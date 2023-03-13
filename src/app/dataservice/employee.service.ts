import { Injectable} from '@angular/core';
import { Employee } from '../models/employee.model';
@Injectable({
  providedIn:'root'
})

export class EmployeeService{

  constructor(){
  
  }
  employees: Employee[] = [
    {
       id:1,
       name:'Ramesh',
       email:'raminfo61@gmail.com',
       phone: 9500424458,
    },
    {
      id:2,
      name:'Ramu',
      email:'rany@gmail.com',
      phone: 9500424338,
   },
   {
    id:3,
    name:'rajesh',
    email:'rahes@gmail.com',
    phone: 9500424358,
    },
    {
      id:4,
      name:'rajasekar',
      email:'raminfo61@gmail.com',
      phone: 9500544458,
    },
    {
      id:5,
      name:'rock',
      email:'raminfo61@gmail.com',
      phone: 9500424454,
    }
  ]
  onGet(){
    return this.employees;
  }
  onAdd(employee:Employee){
    this.employees.push(employee)
  }
  onDelete(id:any){
    let employee = this.employees.find(x => x.id === id );
    let index = this.employees.indexOf(employee,0);
    this.employees.splice(index,1)
  }
  onGetEmployee(id:number){
    return this.employees.find(x=>x.id === id)
  }
  onUpdate(employee:Employee){
    let oldEmployee = this.employees.find(x=> x.id === employee.id);
    oldEmployee.name = employee.name;
    oldEmployee.email = employee.email;
    oldEmployee.phone = employee.phone;
  }
}
