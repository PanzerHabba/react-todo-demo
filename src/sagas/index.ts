import { all, fork } from "redux-saga/effects";
import { todoSagas } from "../containers/TodoList/todoListSaga";
import { todoSagas as otherTodoSaga } from "../containers/OtherTodoList/other-todoListSaga";

export default function registerWithMiddleware(middleware: {
  run: (name) => void;
}) {
  function* mainSaga() {
    yield all([fork(todoSagas), fork(otherTodoSaga)]);
  }
  middleware.run(mainSaga);
}
