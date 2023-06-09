import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CrudComponent } from './crud.component';
import { EditComponent } from './edit/edit.component';

const routes: Routes = [
  {path:'',component:CrudComponent},
  {path:'employee/add/:id',component:EditComponent},
  {path:'employee/edit/:id',component:EditComponent}
];

@NgModule({
  imports:[RouterModule.forChild(routes)],
  exports:[RouterModule]
})
export class CrudRoutingModule{}