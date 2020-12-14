/*
	The mongo package is a very simple wrapper around the github.com/globalsign/mgo/bson
	package. It's purpose is to allow you to do CRUD operations with very
	little code. It's not exhaustive and not meant to do everything for you.
*/
package main

import (
	"errors"
	"log"
	"reflect"

	"github.com/globalsign/mgo"
	"github.com/globalsign/mgo/bson"
)

type DB struct {
	URL        string
	mgoSession *mgo.Session
	Database   string
}

var (
	NoPtr = errors.New("You must pass in a pointer")
)

// Set the mongo servers and the database
func (db *DB) Connect(servers, database string) error {
	var err error

	db.Database = database

	db.mgoSession, err = mgo.Dial(servers)
	return err
}

// Insert one or more structs. Must pass in a pointer to a struct. The struct must
// contain an Id field of type bson.ObjectId with a tag of `bson:"_id"`.
func (db *DB) Insert(records ...interface{}) error {
	for _, rec := range records {
		if !isPtr(rec) {
			return NoPtr
		}

		s, err := db.GetSession()
		if err != nil {
			return err
		}
		defer s.Close()

		coll := db.GetColl(s, typeName(rec))
		err = coll.Insert(rec)
		if err != nil {
			return err
		}
	}

	return nil
}

// Find one or more records. If a single struct is passed in we'll return one record.
// If a slice is passed in all records will be returned. Must pass in a pointer to a
// struct or slice of structs. Use sortFields to sort the results. See
// http://www.mongodb.org/display/DOCS/Sorting+and+Natural+Order for more info.
func (db *DB) Find(i interface{}, q bson.M, sortFields ...string) error {
	if !isPtr(i) {
		return NoPtr
	}

	s, err := db.GetSession()
	if err != nil {
		return err
	}
	defer s.Close()

	coll := db.GetColl(s, typeName(i))

	query := coll.Find(q).Sort(sortFields...)

	if isSlice(reflect.TypeOf(i)) {
		err = query.All(i)
	} else {
		err = query.One(i)
	}
	return err
}

func (db *DB) FindAll(red interface{}) error {
	if !isPtr(red) {
		return NoPtr
	}

	session, _ := db.GetSession()
	defer session.Close()

	coll := db.GetColl(session, typeName(red))

	err := coll.Find(nil).Sort("-$natural").All(red)
	if err != nil {
		return err
	}

	return nil
}

func (db *DB) FindAllTransaction(red interface{}, sortFields ...string) error {
	if !isPtr(red) {
		return NoPtr
	}
	session, _ := db.GetSession()
	defer session.Close()
	coll := db.GetColl(session, typeName(red))
	err := coll.Find(nil).Sort(sortFields...).All(red)
	if err != nil {
		log.Println("Mongo FindAll Error : ", err)
		return err
	}
	return nil
}

func (db *DB) FindByMtiRRNTimeMsgType(red interface{}, mti string, rrn string, time string) error {
	if !isPtr(red) {
		return NoPtr
	}

	session, _ := db.GetSession()
	defer session.Close()

	coll := db.GetColl(session, typeName(red))

	err := coll.Find(bson.M{"mti": "0" + mti, "rrn": rrn, "time": time, "msgType": "Response"}).One(red)
	if err != nil {
		return err
	}

	return nil
}

func (db *DB) DeleteById(red interface{}, id string) error {
	if !isPtr(red) {
		return NoPtr
	}

	session, _ := db.GetSession()
	defer session.Close()

	coll := db.GetColl(session, typeName(red))

	err := coll.Remove(bson.M{"_id": bson.ObjectIdHex(id)})
	if err != nil {
		return err
	}

	return nil
}

func (db *DB) FindAllPagenator(red interface{}, q bson.M, page int, size int, sortFields ...string) (int, error) {
	if !isPtr(red) {
		return 0, NoPtr
	}

	session, _ := db.GetSession()
	defer session.Close()

	coll := db.GetColl(session, typeName(red))

	var skip int = 0
	if page > 1 {
		skip = size * (page - 1)
	}

	count, er := coll.Find(q).Count()
	if er != nil {
		return 0, er
	}
	//log.Info("Transaction Query: ", q)
	err := coll.Find(q).Skip(skip).Limit(size).Sort(sortFields...).All(red)
	if err != nil {
		return 0, err
	}
	return count, err
}

func (db *DB) FindAllPagenation(red interface{}, page int, size int, sortFields ...string) error {
	if !isPtr(red) {
		return NoPtr
	}

	session, _ := db.GetSession()
	defer session.Close()

	coll := db.GetColl(session, typeName(red))

	var skip int = 0
	if page < 1 {
		skip = page - 1
	}

	err := coll.Find(nil).Skip(skip).Limit(size).Sort(sortFields...).All(red)

	if err != nil {
		return err
	}

	return nil
}

// Find a single record by id. Must pass a pointer to a struct.
func (db *DB) FindById(i interface{}, id string) error {
	return db.Find(i, bson.M{"_id": bson.ObjectIdHex(id)})
}
func (db *DB) FindByEmail(i interface{}, email string) error {
	return db.Find(i, bson.M{"email": email})
}
func (db *DB) FindBySequence(i interface{}, sequence string) error {
	return db.Find(i, bson.M{"name": sequence})
}
func (db *DB) FindByRRN(i interface{}, sequence string) error {
	return db.Find(i, bson.M{"rrn": sequence})
}
func (db *DB) FindByNot(field string, value1 string, value2 string, red interface{}, sortFields ...string) error {
	if !isPtr(red) {
		return NoPtr
	}

	session, _ := db.GetSession()
	defer session.Close()

	coll := db.GetColl(session, typeName(red))

	// err := coll.Find(nil).Sort(sortFields...).All(red)
	err := coll.Find(bson.M{"$or": []bson.M{bson.M{field: value1}, bson.M{field: value2}}}).Sort("-$natural").All(red)
	if err != nil {
		return err
	}

	return nil
}

func (db *DB) UniqueIndex(i interface{}, indexKey []string) error {
	s, err := db.GetSession()
	if err != nil {
		log.Println("Creating Index failed : ", err)
		return err
	}
	defer s.Close()
	coll := db.GetColl(s, typeName(i))
	index := mgo.Index{Key: indexKey, Unique: true}
	indexErr := coll.EnsureIndex(index)
	if indexErr != nil {
		log.Println("Creating Index failed : ", indexErr)
	}
	return err
}

// Does a count on the collection for the struct that is passed in.
func (db *DB) Count(i interface{}) (int, error) {
	s, err := db.GetSession()
	if err != nil {
		return 0, err
	}
	defer s.Close()

	coll := db.GetColl(s, typeName(i))

	return coll.Count()
}

func (db *DB) UpdateById(q bson.ObjectId, i interface{}) error {
	s, err := db.GetSession()
	if err != nil {
		return err
	}
	defer s.Close()

	coll := db.GetColl(s, typeName(i))
	return coll.UpdateId(q, i)
}

// Returns a Mongo session. You must call Session.Close() when you're done.
func (db *DB) GetSession() (*mgo.Session, error) {
	var err error

	if db.mgoSession == nil {
		db.mgoSession, err = mgo.Dial(db.URL)
		if err != nil {
			return nil, err
		}
	}

	return db.mgoSession.Copy(), nil
}

// We pass in the session because that is a clone of the original and the
// caller will need to close it when finished.
func (db *DB) GetColl(session *mgo.Session, coll string) *mgo.Collection {
	return session.DB(db.Database).C(coll)
}

func isPtr(i interface{}) bool {
	return reflect.ValueOf(i).Kind() == reflect.Ptr
}

func typeName(i interface{}) string {
	t := reflect.TypeOf(i)

	if t.Kind() == reflect.Ptr {
		t = t.Elem()
	}

	if isSlice(t) {
		t = t.Elem()

		if t.Kind() == reflect.Ptr {
			t = t.Elem()
		}
	}

	return t.Name()
}

// returns true if the interface is a slice
func isSlice(t reflect.Type) bool {
	if t.Kind() == reflect.Ptr {
		t = t.Elem()
	}
	return t.Kind() == reflect.Slice
}

func hasStructField(i interface{}, field string) bool {
	t := reflect.TypeOf(i)
	if t.Kind() == reflect.Ptr {
		t = t.Elem()
	}

	if t.Kind() != reflect.Struct {
		return false
	}

	_, found := t.FieldByName(field)
	return found
}
