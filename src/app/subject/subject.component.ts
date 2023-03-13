import { Component, OnInit } from '@angular/core';
import { AppService } from '../dataservice/app.service';

@Component({
  selector: 'app-subject',
  templateUrl: './subject.component.html',
  styleUrls: ['./subject.component.css']
})
export class SubjectComponent implements OnInit {
  
  isDirty = true;
  constructor(private appservice:AppService) {
    this.appservice.sub.subscribe(x => console.log('From Subject component',x))
   }

  ngOnInit() {
  }

}