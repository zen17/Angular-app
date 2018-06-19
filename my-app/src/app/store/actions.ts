import {Action} from '@ngrx/store';
import { Todo } from '../models/todo';

export const ADD_TODO_ITEM = "Add todo item";
export const STRIKE_TODO_ITEM = "Strike todo item";
export const DELETE_TODO_ITEM = "Delete todo item";
export const SET_MY_DATE = "Set My Date";
export const LOAD_DATA = "Load data";
export const LOAD_DATA_SUCCESS = "Load data succes";
export const LOAD_DATA_FAIL = "Load data fail";


export class LoadTodoItem implements Action {
   readonly type = LOAD_DATA;
   todoArr:Todo[];
   constructor(public todo:Todo[]) {
       this.todoArr=[...this.todo];
   }
    
}
export class LoadTodoSuccessItem implements Action {
    readonly type = LOAD_DATA_SUCCESS;
    constructor(){}

     
 }
 export class LoadTodoFailItem implements Action {
    readonly type = LOAD_DATA_SUCCESS;
    constructor(){}

     
 }



export class AddTodoItem implements Action {
    type = ADD_TODO_ITEM;
    todo: Todo;
    constructor(todo:Todo) {
        this.todo = {...todo};
    }
}

export class StrikeTodoItem implements Action{
  public  type=STRIKE_TODO_ITEM;
  public  todo:Todo;
    constructor(todo:Todo) {
        this.todo = {...todo};
    }
}

export class DeleteTodoItem implements Action {
    type=DELETE_TODO_ITEM;
    todo:Todo;
    constructor(todo:Todo) {
        this.todo=todo;
    }
}

export class SetMyDate implements Action{
    type=SET_MY_DATE;
    date:string;
    constructor( date:string ){
        this.date=date;
    }
}