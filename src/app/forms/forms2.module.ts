import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsComponent } from './forms.component';
import { FormsRoutingModule } from './forms-routing';
import { ReactiveComponent } from './reactive-form/reactive.component';
import { ReactiveFormsModule } from '@angular/forms';
import { FormarrayComponent } from './form-array/formarray.component';

@NgModule({
  imports: [CommonModule, FormsRoutingModule, ReactiveFormsModule],
  declarations: [FormsComponent, ReactiveComponent, FormarrayComponent],
})
export class Forms2Module {}
