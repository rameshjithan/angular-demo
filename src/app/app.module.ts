import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { HelloComponent } from './hello.component';
import { AppRoutingModule } from './app.routing';
import { ObservableComponent } from './observable/observable.component';
import { SubjectComponent } from './subject/subject.component';
import { HttpClientModule } from '@angular/common/http';
import { CustomDirectiveComponent } from './custom-directive/custom-directive.component';
import { ChildComponent } from './custom-directive/child/child.component';

//import { Forms2Module } from './forms/forms.module';

@NgModule({
  imports:      [ BrowserModule, FormsModule,AppRoutingModule,HttpClientModule ],

  declarations: [ AppComponent, HelloComponent,ObservableComponent,SubjectComponent,CustomDirectiveComponent,ChildComponent],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
