import { Action } from '@ngrx/store';

import { ToDo } from './todo.model';

export enum ToDoActionTypes {
  AddToDo = '[Todo] Add Todo',
  ClearToDos = '[Todo] Clear Todos',
  CompleteToDo = '[Todo] Complete Todo',
  IncompleteToDo = '[Todo] Incomplete Todo',
  RemoveToDo = '[Todo] Remove Todo'
}

export class AddToDo implements Action {
  readonly type = ToDoActionTypes.AddToDo;
  constructor(public payload: ToDo) { }
}

export class ClearToDos implements Action {
  readonly type = ToDoActionTypes.ClearToDos;
}

export class CompleteToDo implements Action {
  readonly type = ToDoActionTypes.CompleteToDo;
  constructor(public payload: ToDo) { }
}

export class IncompleteToDo implements Action {
  readonly type = ToDoActionTypes.IncompleteToDo;
  constructor(public payload: ToDo) { }
}

export class RemoveToDo implements Action {
  readonly type = ToDoActionTypes.RemoveToDo;
  constructor(public payload: ToDo) { }
}

export type ToDoActions =
  | AddToDo
  | ClearToDos
  | CompleteToDo
  | IncompleteToDo
  | RemoveToDo;
  