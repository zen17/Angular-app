import { Action } from "@ngrx/store";


const initalState: number = Date.now();

export default function (state:number = initalState, action: Action) {
    switch(action.type) { 
        default: 
            return state;
    }
}