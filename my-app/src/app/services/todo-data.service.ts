import { Injectable } from '@angular/core';
import { Todo } from '../models/todo';
import { HttpClient } from '@angular/common/http'
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TodoDataService {
  data:Observable<Todo[]>;
  constructor( public http:HttpClient) { }

  getTodoItems(val:string):Observable<Todo[]>{
    this.data=this.http.get<Todo[]>("http://localhost:3000/data/?date="+val);
    return this.data;
  }
  postTodoItem(todo:Todo){
    const obj={id:todo.id,task:todo.task,priority:todo.priority,cheched:todo.checked,date:todo.date}
    this.http.post<Todo>("http://localhost:3000/data/",obj)
    .subscribe(data=>console.log(data))
  }
  editTodoItem(todo:Todo){
    console.log(todo);
    this.http.put<Todo>("http://localhost:3000/data/"+todo.id,todo).subscribe(res => console.log(res));
  }
  delteTodoItem(val:string){
    this.http.delete("http://localhost:3000/data/"+val).subscribe(res => console.log(res));

  }
}
