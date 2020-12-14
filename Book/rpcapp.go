package main

import (
	"fmt"
	"log"
	"net/http"
	"time"

	"github.com/globalsign/mgo"
	"github.com/globalsign/mgo/bson"
	"github.com/gorilla/mux"
	"github.com/gorilla/rpc"
	rpcjson "github.com/gorilla/rpc/json"
)

var err error

var book *Book
var c *mgo.Collection
var c2 *mgo.Collection

//Book data
type Book struct {
	ID         string `bson:"id,omitempty"`
	BookName   string `bson:"bookname,omitempty"`
	AuthorName string `bson:"authorname,omitempty"`
	Price      string `bson:"price,omitempty"`
}

func main() {
	// nc, error := nats.Connect(":4222")
	// fmt.Println("nats Connected")
	// fmt.Print(error)
	session, err1 := mgo.Dial("localhost:27017")
	if err1 != nil {
		fmt.Println(err1)
	}
	c = session.DB("Bookdb").C("Bookcol")
	c2 = session.DB("Bookdb").C("Notes")
	fmt.Println("Mongo Dialed : ")
	s := rpc.NewServer()
	fmt.Println("rpc new server up")
	s.RegisterCodec(rpcjson.NewCodec(), "application/json")
	s.RegisterService(new(RPCService), "")

	r := mux.NewRouter()
	fmt.Println("router turned on")
	rrpc := r.PathPrefix("/rpc").Subrouter()
	rrpc.Handle("", s)
	r.PathPrefix("/").Handler(http.FileServer(http.Dir("./static")))
	http.ListenAndServe(":8080", r)
	// runtime.Goexit()
	select {}

}

//req RPCRequest
type RPCRequest struct {
	Who   string
	Book  Book
	Books []Book
	Notes string
}

//res RPCResponse
type RPCResponse struct {
	Message1 string
	BookRep  []Book
	Notes    Notes
}
type Notes struct {
	Id    string `bson:"id,omitempty"`
	Notes string `bson:"notes,omitempty"`
	Date  string `bson:"date,omitempty"`
}

//service RPCService
type RPCService struct{}

func (rpcService *RPCService) Say(request *http.Request, args *RPCRequest, reply *RPCResponse) error {
	reply.Message1 = args.Who + " " + "Hello"
	return nil
}
func (rpcService *RPCService) GetBook(request *http.Request, args *RPCRequest, reply *RPCResponse) error {
	fmt.Printf("Getting all books")
	var results1 []Book
	c.Find(bson.M{}).All(&results1)
	reply.BookRep = results1
	return nil
}
func (rpcService *RPCService) SortByID(request *http.Request, args *RPCRequest, reply *RPCResponse) error {
	pipeLine := []bson.M{
		bson.M{"$project": bson.M{"id": 1, "bookname": 1, "authorname": 1, "price": 1}},

		bson.M{"$sort": bson.M{"id": 1}},
	}
	results := []bson.M{}
	c.Pipe(pipeLine).All(&results)
	var resarr []Book
	for i := 0; i < len(results); i++ {
		b := Book{
			ID: results[i]["id"].(string),

			BookName:   results[i]["bookname"].(string),
			AuthorName: results[i]["authorname"].(string),
			Price:      results[i]["price"].(string),
		}
		resarr = append(resarr, b)
	}

	fmt.Print()
	fmt.Print(resarr)
	reply.BookRep = resarr
	return nil
}
func (rpcService *RPCService) SortByPrice(request *http.Request, args *RPCRequest, reply *RPCResponse) error {
	pipeLine := []bson.M{
		bson.M{"$project": bson.M{"id": 1, "bookname": 1, "authorname": 1, "price": 1}},
		// 	m{"$match": m{"notecount": m{"$gt": 2}}},
		bson.M{"$sort": bson.M{"price": 1}},
	}
	results := []bson.M{}
	c.Pipe(pipeLine).All(&results)
	var resarr []Book
	for i := 0; i < len(results); i++ {
		b := Book{
			ID:         results[i]["id"].(string),
			BookName:   results[i]["bookname"].(string),
			AuthorName: results[i]["authorname"].(string),
			Price:      results[i]["price"].(string),
		}
		resarr = append(resarr, b)
	}

	fmt.Print(resarr)
	reply.BookRep = resarr
	return nil
}
func (rpcService *RPCService) InsertBook(request *http.Request, args *RPCRequest, reply *RPCResponse) error {
	fmt.Printf("Inserting book")
	fmt.Println(args.Books)
	for i := 0; i < len(args.Books); i++ {
		err = c.Insert(args.Books[i])
	}
	var results1 []Book
	c.Find(bson.M{}).All(&results1)
	reply.BookRep = results1
	fmt.Println(results1)
	return nil
}
func (rpcService *RPCService) GetBookByID(request *http.Request, args *RPCRequest, reply *RPCResponse) error {
	fmt.Printf("Getting book by ID")
	fmt.Println(args.Book)
	var results1 []Book
	c.Find(bson.M{"id": args.Book.ID}).All(&results1)
	reply.BookRep = results1
	return nil
}
func (rpcService *RPCService) UpdateBookByID(request *http.Request, args *RPCRequest, reply *RPCResponse) error {
	fmt.Printf("Updating book by ID")
	fmt.Println(args.Book)
	c.Update(bson.M{"id": args.Book.ID}, args.Book)
	var results1 []Book
	c.Find(bson.M{"id": args.Book.ID}).All(&results1)
	reply.BookRep = results1
	return nil
}
func (rpcService *RPCService) DeleteBookByID(request *http.Request, args *RPCRequest, reply *RPCResponse) error {
	fmt.Printf("Deleting book by ID")
	fmt.Println(args.Book)
	c.Remove(bson.M{"id": args.Book.ID})
	var results1 []Book
	c.Find(bson.M{}).All(&results1)
	reply.BookRep = results1
	return nil
}

func (rpcService *RPCService) GetNotes(r *http.Request, args *RPCRequest, reply *RPCResponse) error {
	var notes Notes
	log.Println("Getting....")
	if err := c2.Find(nil).One(&notes); err != nil {
		log.Println("Error on Fetching Notes ", err)
	}
	reply.Notes = notes
	return nil
}
func (rpcService *RPCService) UpdateNotes(r *http.Request, args *RPCRequest, reply *RPCResponse) error {
	var notes Notes
	notes.Id = "1"
	currentTime := time.Now()
	date := currentTime.Format("01-02-2006")
	notes.Notes = args.Notes
	notes.Date = date
	count, err := c2.Count()
	if err != nil {
		log.Println("Collection Not Found ", err)
	}
	if count == 0 && err == nil {
		if err1 := c2.Insert(&notes); err1 != nil {
			log.Println("Error on Inserting Notes", err)
		}
	}
	if count != 0 && err == nil {
		if err1 := c2.Update(bson.M{"id": "1"}, &notes); err1 != nil {
			log.Println("Error on Updating Notes ", err1)
		}
	}
	reply.Notes = notes
	return nil
}
