import { Component ,Injectable} from '@angular/core';
import {Store} from '@ngrx/store';
import { SetMyDate } from "./store/actions";
import { AddTodoItem,LoadTodoItem } from "./store/actions";
import { TodoDataService } from './services/todo-data.service';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';
  d:any;
  m:any;
  y:any;
  date:Date;
  stringDate:string;
  constructor(public store$:Store<any>,public service:TodoDataService) {}
 
  ngOnInit(){
    this.stringDate=this.parseDate();
    this.store$.dispatch(new SetMyDate(this.stringDate));

    this.service.getTodoItems(this.stringDate)
    .subscribe(data=>{
      this.store$.dispatch(new LoadTodoItem(data));
    })
  }
  parseDate():string{
    this.date=new Date();
    this.d=this.date.getDate();
    this.m=this.date.getMonth()+1;
    this.y=this.date.getFullYear();
    return this.m+"/"+this.d+"/"+this.y
  }
}
