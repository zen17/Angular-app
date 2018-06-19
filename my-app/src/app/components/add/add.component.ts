import { Component, OnInit } from '@angular/core';
import { Todo } from  '../../models/todo';
import { Priority } from '../../models/todo';
import {Store} from '@ngrx/store';
import { State } from '../../store';
import { AddTodoItem,LoadTodoItem } from "../../store/actions";
import {TodoDataService} from "../../services/todo-data.service"
import { SetMyDate } from "../../store/actions";
import dateReducer from '../../store/reducers/date.reducer';

@Component({
  selector: 'app-add',
  templateUrl: './add.component.html',
  styleUrls: ['./add.component.css']
})
export class AddComponent implements OnInit {
  public todo:Todo;
  task:string;
  selected:Priority;
  date:string;
  constructor(public store$:Store<State>,public service$:TodoDataService) { }

  ngOnInit() {
    
  }

  taskCreate(title:string){
    this.store$.select("date").subscribe(data=>this.date=data)
    this.todo=new Todo(Date.now(),title,false,this.selected,this.date);
    this.store$.dispatch(new AddTodoItem(this.todo));
    this.service$.postTodoItem(this.todo);
  }

}
