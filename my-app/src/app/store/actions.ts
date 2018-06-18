import {Action} from '@ngrx/store';
import { Todo } from '../models/todo';

export const ADD_TODO_ITEM = "Add todo item";
export const STRIKE_TODO_ITEM = "Strike todo item";
export const DELETE_TODO_ITEM = "Delete todo item";



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