import { reducer as todos } from "../containers/TodoList/todoListReducer";
import { ITodoState } from "../containers/TodoList";
import {
  IOtherTodoState,
  reducer as otherTodos
} from "../containers/OtherTodoList";

// The top-level state object
export interface IApplicationState {
  todos: ITodoState;
  otherTodos: IOtherTodoState;
}

export const reducers = {
  todos,
  otherTodos
};
