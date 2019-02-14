import { FetchedTodo } from "./";

const todo_list = [
  "Write essay",
  "for loop",
  "sleep",
  "walk",
  "situps",
  "test",
  "shop clothes",
  "paint house",
  "read book",
  "update resume",
  "update react component",
  "write reducer",
  "style component",
  "dress",
  "undress",
  "brush teeths",
  "dream",
  "refill oil on the car"
];
const comment_list = [
  "good",
  "bad",
  "decent",
  "brilliant",
  "terrible",
  "awsome"
];

const categories = ["Work", "Private", "Traning"];
const reporters = ["Batman", "Spiderman", "Superman", "Wonderwoman", "Aquaman"];
const random_category = () => Math.floor(Math.random() * categories.length);
const random_reporter = () => Math.floor(Math.random() * reporters.length);
const random_boolean = () => Math.random() >= 0.5;
const random_month = () => Math.floor(Math.random() * 12);
const random_todo = () => Math.floor(Math.random() * todo_list.length);
const random_comment = () => Math.floor(Math.random() * comment_list.length);
const now = Date.now();
const nowDate = new Date(now);

export const getTodos = () => {
  let todos: FetchedTodo[] = [];

  for (let i = 0; i < 100; i++) {
    todos.push({
      id: i,
      category: categories[random_category()],
      comments: [
        {
          id: i + 1000,
          publishedDate: nowDate.setMonth(random_month()).toLocaleString(),
          reporter: reporters[random_reporter()],
          text: comment_list[random_comment()]
        },
        {
          id: i + 1001,
          publishedDate: nowDate.setMonth(random_month()).toLocaleString(),
          reporter: reporters[random_reporter()],
          text: comment_list[random_comment()]
        }
      ],
      reportedDate: nowDate.setMonth(random_month()).toLocaleString(),
      reporter: reporters[random_reporter()],
      resolved: random_boolean(),
      text: todo_list[random_todo()]
    });
  }
  return todos;
};

export const fetchTodos = () =>
  new Promise<FetchedTodo[]>((resolve, reject) => resolve(getTodos()));
