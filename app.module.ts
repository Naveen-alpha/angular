import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import {freeApiService} from './services/freeapi.service';
import { ViewComponent } from './view/view.component';
import { RouterModule, Routes } from '@angular/router';
import { GetIDComponent } from './get-id/get-id.component';
import { UpdateIDComponent } from './update-id/update-id.component';
import { InsertComponent } from './insert/insert.component';
import { DeleteIDComponent } from './delete-id/delete-id.component';
import { NgxPaginationModule } from 'ngx-pagination';
import { ReactiveFormsModule } from '@angular/forms';
import { FilterPipe} from './filter.pipe';
import { MatDatepickerModule, MatInputModule, MatNativeDateModule } from '@angular/material';


const appRoutes: Routes = [
  {path: '', component: InsertComponent},
  { path: 'viewbooks', component: ViewComponent },
  { path: 'getByID', component: GetIDComponent },
  { path: 'updateByID', component: UpdateIDComponent },
  { path: 'deletebyID', component: DeleteIDComponent },
  { path: 'insert', component: InsertComponent },

];

@NgModule({
  imports: [
    BrowserModule,
    FormsModule,
    NgxPaginationModule,
    HttpClientModule,
    ReactiveFormsModule,
    MatDatepickerModule,
      MatInputModule,
      MatNativeDateModule,
     RouterModule.forRoot(
      appRoutes
    )
   
  ],
  declarations: [
    AppComponent,
    ViewComponent,
    GetIDComponent,
    UpdateIDComponent,
    InsertComponent,
    DeleteIDComponent,
    FilterPipe
      ],
  providers: [freeApiService],
  bootstrap: [AppComponent]
 
})
export class AppModule { }


