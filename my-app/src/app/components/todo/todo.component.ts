import { Component, OnInit, Input, EventEmitter,Output } from '@angular/core';
import { Todo } from '../../models/todo';
import {Store} from '@ngrx/store';
import { State } from '../../store';
import { Observable } from 'rxjs';
import { StrikeTodoItem,DeleteTodoItem } from '../../store/actions'
import {TodoDataService} from "../../services/todo-data.service"
import { subscribeOn } from 'rxjs/operators';

@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.css']
})
export class TodoComponent implements OnInit {
 
  
  private id:number;
  private tmp:Todo;
  @Input() todo:Todo;
  @Output() public mojEvent:EventEmitter<string>=new EventEmitter();
  constructor(private store$: Store<State>,private services$:TodoDataService) {}

  ngOnInit() {
    this.id=this.todo.id;
    console.log(this.todo)
  }
   taskDone(){
     this.store$.dispatch(new StrikeTodoItem(this.todo));
    // console.log(this.todo)
       this.store$.select('todo').subscribe(data=>{
       this.tmp=data.find((element)=>element.id===this.id)
       this.services$.editTodoItem(this.tmp);
     });
   //  
   }
   taskDelete(){
     console.log(this.id);
    this.store$.dispatch(new DeleteTodoItem(this.todo));
    this.services$.delteTodoItem(this.id.toString());
  }
  proveriStanje():string{
    return this.todo.checked?"Not Done?":"Done"
  }

  
}
