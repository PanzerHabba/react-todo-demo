import { createAction, ActionType } from "typesafe-actions";
import { OtherTodo } from ".";

export const actions = {
  getTodos: createAction("OTHER_TODO/GET_TODOS"),
  getTodosSuccess: createAction(
    "OTHER_TODO/GET_TODOS_SUCCESS",
    resolve => (payload: OtherTodo[]) => resolve(payload)
  ),
  getTodosFailure: createAction(
    "OTHER_TODO/GET_TODOS_FAILURE",
    resolve => (payload: string) => resolve(payload)
  ),
  updateTodo: createAction(
    "OTHER_TODO/UPDATE_TODO",
    resolve => (payload: OtherTodo) => resolve(payload)
  ),
  updateTodoSuccess: createAction(
    "OTHER_TODO/UPDATE_TODO_SUCCESS",
    resolve => (payload: OtherTodo) => resolve(payload)
  ),
  updateTodoFailure: createAction(
    "OTHER_TODO/UPDATE_TODO_FAILURE",
    resolve => (payload: string) => resolve(payload)
  ),
  deleteTodo: createAction(
    "OTHER_TODO/DELETE_TODO",
    resolve => (payload: number) => resolve(payload)
  ),
  deleteTodoSuccess: createAction("OTHER_TODO/DELETE_TODO_SUCCESS"),
  deleteTodoFailure: createAction(
    "OTHER_TODO/DELETE_TODO_FAILURE",
    resolve => (payload: string) => resolve(payload)
  ),
  addTodo: createAction(
    "OTHER_TODO/ADD_TODO",
    resolve => (payload: OtherTodo) => resolve(payload)
  ),
  addTodoSuccess: createAction(
    "OTHER_TODO/ADD_TODO_SUCCESS",
    resolve => (payload: OtherTodo) => resolve(payload)
  ),
  addTodoFailure: createAction(
    "OTHER_TODO/ADD_TODO_FAILURE",
    resolve => (payload: string) => resolve(payload)
  ),
  setSelectedTodo: createAction(
    "OTHER_TODO/UPDATE_VALUE",
    resolve => (payload: number) => resolve(payload)
  )
};

export type KnownAction = ActionType<typeof actions>;
