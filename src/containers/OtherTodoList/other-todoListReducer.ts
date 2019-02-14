import { Reducer } from "redux";
import { getType } from "typesafe-actions";
import { actions, KnownAction } from "./other-todoListActions";
import { IOtherTodoState } from ".";

const unloadedState: IOtherTodoState = {
  isLoading: false,
  fetchedTodos: false,
  todos: [],
  currentTodo: null
};

export const reducer: Reducer<IOtherTodoState> = (
  state: IOtherTodoState,
  action: KnownAction
) => {
  switch (action.type) {
    case getType(actions.getTodos):
      return { ...state, isLoading: true };
    case getType(actions.getTodosSuccess):
      return {
        ...state,
        todos: action.payload,
        isLoading: false,
        fetchedTodos: true
      };
    case getType(actions.getTodosFailure):
      return { ...state };
    case getType(actions.addTodo):
      return { ...state, isLoading: true };
    case getType(actions.addTodoSuccess):
      return { ...state, isLoading: false };
    case getType(actions.addTodoFailure):
      return { ...state, isLoading: false };
    case getType(actions.deleteTodo):
      return { ...state, isLoading: true };
    case getType(actions.deleteTodoSuccess):
      return { ...state, isLoading: false };
    case getType(actions.deleteTodoFailure):
      return { ...state, isLoading: false };
    case getType(actions.updateTodo):
      return { ...state, isLoading: true };
    case getType(actions.updateTodoSuccess):
      return {
        ...state,
        isLoading: false,
        todos: state.todos.map(t =>
          t.id !== action.payload.id ? t : action.payload
        )
      };
    case getType(actions.updateTodoFailure):
      return { ...state, isLoading: false };
    case getType(actions.setSelectedTodo):
      return {
        ...state,
        currentTodo: action.payload
      };
    default:
      // The following line guarantees that every action in the KnownAction union has been covered by a case above
      const exhaustiveCheck: never = action;
      if (typeof exhaustiveCheck !== "undefined") break;
  }

  return state || unloadedState;
};
