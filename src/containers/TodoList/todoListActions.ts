import { createAction, ActionType } from "typesafe-actions";
import { FetchedTodo, Todo, GetTodoDto } from "./";

export const actions = {
  getTodos: createAction("TODO/GET_TODOS"),
  getTodosSuccess: createAction(
    "TODO/GET_TODOS_SUCCESS",
    resolve => (payload: GetTodoDto) => resolve(payload)
  ),
  getTodosFailure: createAction(
    "TODO/GET_TODOS_FAILURE",
    resolve => (payload: string) => resolve(payload)
  ),
  updateTodo: createAction("TODO/UPDATE_TODO", resolve => (payload: Todo) =>
    resolve(payload)
  ),
  updateTodoSuccess: createAction(
    "TODO/UPDATE_TODO_SUCCESS",
    resolve => (payload: Todo) => resolve(payload)
  ),
  updateTodoFailure: createAction(
    "TODO/UPDATE_TODO_FAILURE",
    resolve => (payload: string) => resolve(payload)
  ),
  deleteTodo: createAction("TODO/DELETE_TODO", resolve => (payload: number) =>
    resolve(payload)
  ),
  deleteTodoSuccess: createAction("TODO/DELETE_TODO_SUCCESS"),
  deleteTodoFailure: createAction(
    "TODO/DELETE_TODO_FAILURE",
    resolve => (payload: string) => resolve(payload)
  ),
  addTodo: createAction("TODO_ADD_TODO", resolve => (payload: Todo) =>
    resolve(payload)
  ),
  addTodoSuccess: createAction(
    "TODO_ADD_TODO_SUCCESS",
    resolve => (payload: FetchedTodo) => resolve(payload)
  ),
  addTodoFailure: createAction(
    "TODO_ADD_TODO_FAILURE",
    resolve => (payload: string) => resolve(payload)
  ),
  setSelectedTodo: createAction(
    "TODO/UPDATE_VALUE",
    resolve => (payload: number) => resolve(payload)
  )
};

export type KnownAction = ActionType<typeof actions>;
