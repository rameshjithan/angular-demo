import { NgModule } from '@angular/core';
import { Routes, RouterModule, Router } from '@angular/router';
import { FormarrayComponent } from './form-array/formarray.component';
import { FormsComponent } from './forms.component';
import { ReactiveComponent } from './reactive-form/reactive.component';

const routes: Routes = [
  { path: '', component: FormsComponent },
  { path: 'reactive', component: ReactiveComponent },
  { path: 'formarray', component: FormarrayComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class FormsRoutingModule {}
