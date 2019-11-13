import { Component, OnInit } from '@angular/core';
import { Books } from '../app.component';
import { freeApiService } from '../services/freeapi.service';
import { NgForm, FormGroup, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-update-id',
  templateUrl: './update-id.component.html',
  styleUrls: ['./update-id.component.css']
})
export class UpdateIDComponent implements OnInit {
  book:Books[];
  ID:string
  BookName:string
  AuthorName:string
  Price:string
  message:string;

  ngOnInit() {}
  
  constructor(private _freeApiService:freeApiService) { }
  values = '';
  getbookbyid:Books[]

  onEnter(value: string)  
    { 
        this.values =value;
        this._freeApiService.getBookByID(this.values)
          .subscribe(
                        data =>{
                          console.log("Received :",data.result.BookRep)
                          this.getbookbyid=data.result.BookRep;
                          this.ID=this.getbookbyid[0].ID
                          this.BookName=this.getbookbyid[0].BookName
                          this.AuthorName=this.getbookbyid[0].AuthorName
                          this.Price=this.getbookbyid[0].Price
                              }

                    )
   
     }
  
onSubmit(updateID:NgForm)
  {
       this.ID= updateID.value.ID
       this.BookName= updateID.value.BookName
       this.AuthorName= updateID.value.AuthorName
       this.Price= updateID.value.Price

      this._freeApiService.updateBookByID(this.ID,this.BookName,this.AuthorName,this.Price)
            .subscribe(
                        data =>{
                                console.log("Received :",data.result.BookRep)
                                this.book=data.result.BookRep;
                                console.log(this.book)
                                if (this.book){
                                  this.message=new alert("Updated")
                                }
                              }
                      )
   }
}
