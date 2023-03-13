import { Component, OnInit } from '@angular/core';
import { DataService } from '../dataservice/data.service';
import { EmployeeService } from '../dataservice/employee.service';
import { Employee } from '../models/employee.model';

@Component({
  selector: 'app-crud',
  templateUrl: './crud.component.html',
  styleUrls: ['./crud.component.css']
})
export class CrudComponent implements OnInit {

  employees: Employee[];
  constructor(private dataservice:DataService,private employeeservice:EmployeeService) {
   
   }

  ngOnInit() {
    // this.dataservice.getTodoData(2).subscribe((data:any)=>{
    //   this.todo = data;
    // })
    this.employees = this.employeeservice.onGet();
  }
  onDelete(id :any){
    this.employeeservice.onDelete(id);
  }
  
}