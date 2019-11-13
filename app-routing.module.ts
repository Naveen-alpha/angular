import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {ViewComponent} from './view/view.component'
import {GetIDComponent} from './get-id/get-id.component'
import { UpdateIDComponent } from './update-id/update-id.component';
import { InsertComponent } from './insert/insert.component';
import { DeleteIDComponent } from './delete-id/delete-id.component';

const appRoutes: Routes = [
  {path: '', component: InsertComponent},
  { path: 'viewbooks', component: ViewComponent },
  { path: 'getByID', component: GetIDComponent },
  { path: 'updateByID', component: UpdateIDComponent },
  { path: 'deletebyID', component: DeleteIDComponent },
  { path: 'insert', component: InsertComponent },


];

@NgModule({
  imports: [RouterModule.forRoot(appRoutes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
