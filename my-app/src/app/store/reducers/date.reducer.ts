import { Action } from "@ngrx/store";
import {  SET_MY_DATE,SetMyDate } from "../actions";


const initalState: string = Date.now().toLocaleString();

export default function (state:string = initalState, action: Action) {
    switch(action.type) {
        case SET_MY_DATE:{
            const obj=action as SetMyDate;
            state=obj.date;
            return state;
        } 
        default: 
            return state;
    }
}