import { Component, OnInit, Input, EventEmitter,Output } from '@angular/core';
import { Todo } from '../../models/todo';
import {Store} from '@ngrx/store';
import { State } from '../../store';
import { Observable } from 'rxjs';
import { StrikeTodoItem,DeleteTodoItem } from '../../store/actions'
@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.css']
})
export class TodoComponent implements OnInit {
 
  private id:number;
  @Input() todo:Todo;
  @Output() public mojEvent:EventEmitter<string>=new EventEmitter();
  constructor(private store$: Store<State>) {}

  ngOnInit() {
    this.id=this.todo.id;
    console.log(this.todo)
  }
   taskDone(){
     this.store$.dispatch(new StrikeTodoItem(this.todo));
   }
   taskDelete(){
    this.store$.dispatch(new DeleteTodoItem(this.todo));
  }
  proveriStanje():string{
    return this.todo.checked?"Not Done?":"Done"
  }

  
}
