import { Action } from "@ngrx/store";
import { Todo } from "../../models/todo";
import { Priority } from "../../models/todo";
import {  STRIKE_TODO_ITEM, StrikeTodoItem, 
    DELETE_TODO_ITEM, DeleteTodoItem,
     ADD_TODO_ITEM, AddTodoItem,
     LOAD_DATA, LoadTodoItem } from "../actions";


    const initalState: Todo[] =[];

export default function (state:Todo[] = initalState, action: Action) {
    switch(action.type) {
        case ADD_TODO_ITEM:{
            const obj=action as AddTodoItem
            state=[...state,obj.todo]
            return state;
        }
        case STRIKE_TODO_ITEM: {
           const obj=action as StrikeTodoItem;
           state.map(data=>{
                if(data.id===obj.todo.id)
                 data.checked=!data.checked;
           })
           return state;
        }
        case DELETE_TODO_ITEM:{
            const obj=action as DeleteTodoItem;
          return state.filter(data=>{
                return data.id!==obj.todo.id;
            })
        }
        case LOAD_DATA:{
            const obj=action as LoadTodoItem;
            state=obj.todoArr;
            return state;
        }
        default: 
            return state;
    }
}