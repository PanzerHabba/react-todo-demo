import { getType } from "typesafe-actions";
import { actions } from "./other-todoListActions";
import { takeLatest, put, select, call, delay } from "redux-saga/effects";
import { getTodos as fetchTodos } from "../TodoList/todoListMockApi";

function* getTodos(action: ReturnType<typeof actions.getTodos>) {
  try {
    yield delay(250);
    const response: ReturnType<typeof fetchTodos> = yield call(fetchTodos);
    yield put(actions.getTodosSuccess(response));
  } catch (err) {
    yield put(actions.getTodosFailure(err.message));
  }
}

function* updateTodo(action: ReturnType<typeof actions.updateTodo>) {
  yield delay(250);
  yield put(actions.updateTodoSuccess(action.payload));
}

export function* todoSagas() {
  yield takeLatest(getType(actions.getTodos), getTodos);
  yield takeLatest(getType(actions.updateTodo), updateTodo);
}
