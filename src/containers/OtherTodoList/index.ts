export * from "./other-todoListReducer";
export * from "./other-todoListActions";
export * from "./other-todoListSaga";

export type Comment = {
  id: number;
  text: string;
  reporter: string;
  publishedDate: string;
};

export type OtherTodo = {
  id: number;
  reporter: string;
  reportedDate: string;
  category: string;
  resolved: boolean;
  text: string;
  comments: Comment[];
};

export interface IOtherTodoState {
  isLoading: boolean;
  fetchedTodos: boolean;
  todos: OtherTodo[];
  currentTodo: number;
}
