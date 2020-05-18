import { ActionReducerMap, MetaReducer } from '@ngrx/store';

import { State } from './state.interface';
import { toDoReducer } from './todo/todo.reducer';

export const appReducers: ActionReducerMap<State> = {
  todo: toDoReducer
};
