import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Books } from '../app.component';
import { freeApiService } from '../services/freeapi.service';
 
@Component({
  selector: 'app-get-id',
  templateUrl: './get-id.component.html',
  styleUrls: ['./get-id.component.css']
})
export class GetIDComponent implements OnInit {

  values = '';

  onEnter(value: string)  { // without type info
    this.values =value;
    this._freeApiService.getBookByID(this.values)
    .subscribe(
      data =>{
        console.log("Received :",data.result.BookRep)
        this.getbookbyid=data.result.BookRep;
      }
    )
  }
  ngOnInit() {
  }
  constructor(private _freeApiService:freeApiService) { }
  getbookbyid:Books[]
  // ID :string=''
  //   onSubmit(GetID:NgForm) {
  //     this.ID= GetID.value.ID
    
  //   }
  
}
