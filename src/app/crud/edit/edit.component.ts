import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { EmployeeService } from '../../dataservice/employee.service';
import { Employee } from '../../models/employee.model';
@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
})
export class EditComponent {
  id:any;
  header: string;
  employee: Employee = {
    id: 0,
    name:'',
    email:'',
    phone:0,
  }
  constructor(private router: Router,private activateroute:ActivatedRoute,private employeeservice:EmployeeService) {
    
  }
  ngOnInit(){
  this.id= +this.activateroute.snapshot.paramMap.get('id');
  this.header = this.id === 0? ' Add Employee': 'Edit Employee';
  if(this.id != 0 ){
   this.employee = this.employeeservice.onGetEmployee(this.id)
  }
  }
  onSubmit(editform: NgForm){
    console.log(editform.value.id);
    let employee:Employee = {
      id:editform.value.id,
      name:editform.value.name,
      email:editform.value.email,
      phone:editform.value.phone,
    }
    if(this.id === 0){
      this.employeeservice.onAdd(employee);
    }
    else{
      this.employeeservice.onUpdate(employee);
    }
   
    this.router.navigateByUrl('/crud');
  }
}