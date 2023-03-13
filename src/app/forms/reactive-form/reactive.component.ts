import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, FormBuilder, Validators} from '@angular/forms'
@Component({
  selector: 'app-reactive',
  templateUrl: './reactive.component.html',
  styleUrls: ['./reactive.component.css']
})
export class ReactiveComponent implements OnInit {
  reactiveForm : FormGroup
  constructor(private fb:FormBuilder) { }

  ngOnInit() {
    this.reactiveForm = this.fb.group({
      firstName: ['',Validators.required],
      lastName: ['',Validators.required],
      emailAddress:['',[Validators.minLength(5),Validators.required,Validators.email]],
      phoneNumber:['',Validators.required],
      postalAddress:['',Validators.required],
      ZipCode:['',Validators.required],
      gender:['',Validators.required],
      terms:['',Validators.requiredTrue],

    })
  }
  postData(){
    console.log(this.reactiveForm)
  }
}