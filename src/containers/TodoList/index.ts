export type Omit<T, K extends keyof T> = Pick<T, Exclude<keyof T, K>>;

export type Comment = {
  id: number;
  text: string;
  reporter: string;
  publishedDate: string;
};

export type Todo = {
  id: number;
  reporter: string;
  reportedDate: string;
  category: string;
  resolved: boolean;
  text: string;
  comments: number[];
};

export type GetTodoDto = {
  allTodos: number[];
  todos: { [id: number]: Todo };
  comments: { [id: number]: Comment };
};

export interface FetchedTodo extends Omit<Todo, "comments"> {
  comments: Comment[];
}

export interface ITodoState {
  isLoading: boolean;
  fetchedTodos: boolean;
  todos: { [id: number]: Todo };
  comments: { [id: number]: Comment };
  allTodos: number[];
  currentTodo: number;
}
