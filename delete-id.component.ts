import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Books } from '../app.component';
import { freeApiService } from '../services/freeapi.service';

@Component({
  selector: 'app-delete-id',
  templateUrl: './delete-id.component.html',
  styleUrls: ['./delete-id.component.css']
})
export class DeleteIDComponent implements OnInit {

  ngOnInit() {
  }
  constructor(private _freeApiService:freeApiService) { }
  book:Books[]
  d:string
  ID :string
  values:string=''
  onEnter(value: string)  { 
      this.values=value
      this._freeApiService.deleteBookByID(this.values)
    .subscribe(
      data =>{
        console.log("Received :",data.result.BookRep)
        this.book=data.result.BookRep;
        if(this.book.some){
          alert("Deleted")
        }else{
          alert("Entered Id is not available")
        }
      }
    )
  }
    // onSubmit(DeleteID:NgForm) {
    //   this.d="deleted"
    //   this.ID= DeleteID.value.ID
    
    // }
  

}
