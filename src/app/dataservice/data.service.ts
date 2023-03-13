import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({

  providedIn:'root'
})

export class DataService{
  todo= null;
  constructor( private http:HttpClient){
   
  }
  getTodoData(todoId: number ){
   return this.http.get(`https://jsonplaceholder.typicode.com/todos/${todoId}`);
  }
  postTodoData(data:any){
    return this.http.post(`https://jsonplaceholder.typicode.com/todos`,data);
  }
  putTodoData(data:any){
    return this.http.post(`https://jsonplaceholder.typicode.com/todos/${data.id}`,data);
  }
  deelteTodoData(todoIds: number ){
  return this.http.get(`https://jsonplaceholder.typicode.com/todos/${todoIds}`);
  }
}