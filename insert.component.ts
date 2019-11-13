import { Component, OnInit } from '@angular/core';
import { Books } from '../app.component';
import { freeApiService } from '../services/freeapi.service';
import { NgForm, FormGroup, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-insert',
  templateUrl: './insert.component.html',
  styleUrls: ['./insert.component.css']
})
export class InsertComponent implements OnInit {
  book:Books[];
  ID:string;
  BookName:string;
  AuthorName:string;
  Price:string;
  message:string
  bookdetails:FormGroup
  submitted:boolean=false
  success:boolean=false
  ngOnInit() {
  }
  // constructor(private _freeApiService:freeApiService,private formbuilder:FormBuilder) { 
  //   this.bookdetails=formbuilder.group(
  //     {
  //       id:['',Validators.required],
  //       bname:['',Validators.required],
  //       aname:['',Validators.required],
  //       price:['',Validators.required]
  //     }
  //   )
  // }
  constructor(private _freeApiService:freeApiService){}
// onSubmit(){
//   this.submitted=true
//   if(this.bookdetails.invalid){
//     return
//   }else{
//     this._freeApiService.insertBook(this.bookdetails).subscribe
//     (
//       data =>{
//         console.log("Received:",data.result.BookRep)
//         this.book=data.result.BookRep;
//       }
//     )
//   }
//   this.success=true
// }
 
  onSubmit(bookForm:NgForm)
  {
    
       this.ID= bookForm.value.ID
       this.BookName= bookForm.value.BookName
       this.AuthorName= bookForm.value.AuthorName
       this.Price= bookForm.value.Price

      this._freeApiService.insertBook(this.ID,this.BookName,this.AuthorName,this.Price) .subscribe
            (
                    data =>{
                            console.log("Received :",data.result.BookRep)
                             this.book=data.result.BookRep;
                             if (this.book.some){
                              this.message=new alert("Inserted")
                            }
                          }
            )
   }
 }
