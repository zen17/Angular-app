import { Component, OnInit } from '@angular/core';
import {Store} from '@ngrx/store';
import { State } from '../../store';
import { Observable } from 'rxjs';
import { Todo } from '../../models/todo'
import {AddTodoItem } from '../../store/actions'
@Component({
  selector: 'app-list-todo',
  templateUrl: './list-todo.component.html',
  styleUrls: ['./list-todo.component.css']
})
export class ListTodoComponent implements OnInit {
  todolist$:Observable<Todo[]>

  constructor(private store$: Store<State>) { }
  
  ngOnInit() {
    this.todolist$=this.store$.select('todo');
    this.todolist$.subscribe(data=>console.log(data));
  }

}
