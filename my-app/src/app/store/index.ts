import todoReducer from './reducers/todo.reducer';
import dateReducer from './reducers/date.reducer';

import {ActionReducerMap} from '@ngrx/store';
import { Todo } from '../models/Todo';

export interface State {
     todo: Todo[],
     date :number
}

export const rootReducer: ActionReducerMap<State> = {
    todo: todoReducer,
    date:dateReducer
}