import { createSelector } from "reselect";
import memoize from "lodash.memoize";
import { IApplicationState } from "../../store";
import { Todo } from ".";

const emptyTodo: Todo = {
  category: "no todo selected",
  comments: [],
  id: null,
  reportedDate: "no todo selected",
  reporter: "no todo selected",
  resolved: false,
  text: "no todo selected"
};

export const todosObjectsSelector = (state: IApplicationState) =>
  state.todos.todos;
export const todosIdsSelector = (state: IApplicationState) =>
  state.todos.allTodos;
export const commentObjectsSelector = (state: IApplicationState) =>
  state.todos.comments;
export const fetchedTodosSelector = (state: IApplicationState) => {
  state.todos.fetchedTodos;
};
export const currentTodoSelector = (state: IApplicationState) =>
  state.todos.currentTodo;

export const getTodos = createSelector(
  todosObjectsSelector,
  todos => todos
);
export const getTodosList = createSelector(
  todosIdsSelector,
  todos => todos
);
export const getComments = createSelector(
  commentObjectsSelector,
  comments => comments
);
export const getFetchedTodos = createSelector(
  fetchedTodosSelector,
  fetchedTodos => fetchedTodos
);

export const getCurrentTodo = createSelector(
  [currentTodoSelector, todosObjectsSelector],
  (currentTodo, todos) => {
    if (todos[currentTodo]) return todos[currentTodo];
    return emptyTodo;
  }
);

export const getIsSelected = createSelector(
  currentTodoSelector,
  currentTodo =>
    memoize((idFromComponent: number) => {
      return idFromComponent === currentTodo;
    })
);
