import { Component } from '@angular/core';
import { freeApiService } from './services/freeapi.service';
import { ActivatedRoute } from '@angular/router';
import { InsertComponent } from './insert/insert.component';

@Component({  
  selector: 'app-root',  
  templateUrl: './app.component.html',  
  styleUrls: ['./app.component.css']  
})
export class AppComponent{

  constructor(private _freeApiService:freeApiService, private route: ActivatedRoute,) { }  
  book:Books[]

  ngOnInit() {
    this.reset();
    this._freeApiService.getBook()
    .subscribe(
      data =>
        {
          console.log("Received : ",data.result.BookRep)
           this.book=data.result.BookRep;
         
         
        }
    )
  }
  greeting: Promise<string>|null = null;
  arrived: boolean = false;

  private resolve: Function|null = null;


  reset() {
    this.arrived = false;
    this.greeting = new Promise<string>((resolve, reject) => { this.resolve = resolve; });
  }

  clicked() {
    if (this.arrived) {
      this.reset();
    } else {
      this.resolve !('hi there!');
      this.arrived = true;
    }
  }
}

export class Books{
  ID:string;
  BookName:string;
  AuthorName:string;
  Price:string;
}
