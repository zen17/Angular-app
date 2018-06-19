import { Component, OnInit } from '@angular/core';
import {MatDatepickerInputEvent} from '@angular/material/datepicker';
import {Store} from '@ngrx/store';
import { State } from '../../store';
import { SetMyDate, LoadTodoItem } from "../../store/actions";
import {TodoDataService} from "../../services/todo-data.service";
@Component({
  selector: 'app-date',
  templateUrl: './date.component.html',
  styleUrls: ['./date.component.css']
})
export class DateComponent implements OnInit {

  constructor(public store$:Store<State>,public services$:TodoDataService) { }
  ngOnInit() {
  }
  addEvent(type: string, event: MatDatepickerInputEvent<Date>) {
       this.store$.dispatch(new SetMyDate(event.value.toLocaleDateString()))
       this.services$.getTodoItems(event.value.toLocaleDateString())    
       .subscribe(data=>{
         this.store$.dispatch(new LoadTodoItem(data));
       })
    }
}
