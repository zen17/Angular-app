import { Component, OnInit } from '@angular/core';
import { Todo } from  '../../models/todo';
import { Priority } from '../../models/todo';
import {Store} from '@ngrx/store';
import { State } from '../../store';
import { AddTodoItem } from "../../store/actions";
@Component({
  selector: 'app-add',
  templateUrl: './add.component.html',
  styleUrls: ['./add.component.css']
})
export class AddComponent implements OnInit {
  public todo:Todo;
  task:string;
  constructor(public store$:Store<State>) { }

  ngOnInit() {
    this.todo=new Todo(0,'',false,Priority.Low);
  }

  taskCreate(){
    console.log(this.todo)
    this.store$.dispatch(new AddTodoItem(this.todo));
  }

}
