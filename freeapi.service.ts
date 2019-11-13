
import {Injectable} from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';


@Injectable()
export class freeApiService
{
    
   
    constructor(private http:HttpClient){}

    getBook():Observable<any>{
       
        var a = {
            "id": "1",
            "method": "RPCService.GetBook",
            "params": [
                {
                    "book": {
                        "ID": "6",
                        "BookName": "javascript",
                        "AuthorName": "xxjx",
                        "Price": "230"
                    }
                }
            ]};
       return this.http.post("http://localhost:8080/rpc",a);
        }
    
    
    sortByID(sort:string):Observable<any>{
        var a = {
            "id": "1",
            "method": "RPCService."+sort,
            "params": [
                {
                    "book": {
                        "ID": "6",
                        "BookName": "javascript",
                        "AuthorName": "xxjx",
                        "Price": "230"
                    }
                }
            ]};
       return this.http.post("http://localhost:8080/rpc",a);
    }
    sortByPrice(sort:string):Observable<any>{
        console.log("SortByPrice")
        var x = {
            "id": "1",
            "method": "RPCService."+sort,
            "params": [
                {
                    "book": {
                        "ID": "6",
                        "BookName": "javascript",
                        "AuthorName": "xxjx",
                        "Price": "230"
                    }
                }
            ]};
       return this.http.post("http://localhost:8080/rpc",x);
    }

    
    getBookByID(input:string):Observable<any>{
        console.log(input)
        var b= {
            "id": "1",
            "method": "RPCService.GetBookByID",
            "params": [
                {
                    "book": {
                        "ID": input,
                        "BookName": "php",
                        "AuthorName": "authphp",
                        "Price": "950"
                    }
                }
            ]};
       return this.http.post("http://localhost:8080/rpc",b);
    }
    updateBookByID(id:string,bn:string,an:string,p:string):Observable<any>{
        var c= {
            "id": "1",
            "method": "RPCService.UpdateBookByID",
            "params": [
                {
                    "book": {
                        "ID":id ,
                        "BookName":bn ,
                        "AuthorName":an,
                        "Price": p
                    }
                }
            ]};
       return this.http.post("http://localhost:8080/rpc",c);
    }
    deleteBookByID(input:string):Observable<any>{
        var d= {
            "id": "1",
            "method": "RPCService.DeleteBookByID",
            "params": [
                {
                    "book": {
                        "ID": input,
                        "BookName": "PHP",
                        "AuthorName": "Rasmus Lerdorf",
                        "Price": "950"
                    }
                }
            ]};
       return this.http.post("http://localhost:8080/rpc",d);
    }
    
    insertBook(ID:string,BookName:string,AuthorName:string,Price:string):Observable<any>{
        var e= {
            "id": "1",
            "method": "RPCService.InsertBook",
            "params": [
                            {
                                "books":[
                                            {
                                                "ID":ID ,
                                                "BookName":BookName ,
                                                "AuthorName":AuthorName,
                                                "Price": Price
                                            }
                                        ]
                            }
                     ]
                };
                   return this.http.post("http://localhost:8080/rpc",e);
    }
   

}