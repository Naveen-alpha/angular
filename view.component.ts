import { Component, OnInit } from '@angular/core';
import { freeApiService } from '../services/freeapi.service';
import { Books } from '../app.component';

@Component({
  selector: 'app-view',
  templateUrl: './view.component.html',
  styleUrls: ['./view.component.css']
})
export class ViewComponent implements OnInit {

  constructor(private _freeApiService:freeApiService) { }
  
  book:Books[]
 
  itemsPerPage:number=5
  eventsort:any
  result:any
  ngOnInit() {
    this._freeApiService.getBook()
    .subscribe(
      data =>
        {
          console.log("Received : ",data.result.BookRep)
           this.book=data.result.BookRep;
         
           this.book.sort(function(a,b){
             var idA=a.ID,idB=b.ID
             if(idA>idB)
             return -1
             if(idA<idB)
             return 1
             return 0
           })
        }
    )
  }
  ChangingValue(event){
   
    if (event.target.value=="SortByID"){
      this._freeApiService.sortByID(event.target.value)
    .subscribe(
      data =>
        {
          console.log("Received : ",data.result.BookRep)
           this.book=data.result.BookRep;
        }
    )
    }else if (event.target.value=="SortByPrice"){
      this._freeApiService.sortByPrice(event.target.value)
      .subscribe(
        data =>
          {
            console.log("Received : ",data.result.BookRep)
             this.book=data.result.BookRep;
          }
      )
    }
}
}
