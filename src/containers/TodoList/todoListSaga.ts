import { getType } from "typesafe-actions";
import { actions } from "./todoListActions";
import { takeLatest, put, select, call, delay } from "redux-saga/effects";
import { getTodos as fetchTodos } from "./todoListMockApi";
import { Schema, normalize, schema } from "normalizr";

const commentSchema = new schema.Entity("comments");

const todoSchema = new schema.Entity("todos", { comments: [commentSchema] });

function* getTodos(action: ReturnType<typeof actions.getTodos>) {
  try {
    yield delay(250);
    const response: ReturnType<typeof fetchTodos> = yield call(fetchTodos);
    const normalizedResponse = normalize(response, [todoSchema]);
    const { todos, comments } = normalizedResponse.entities;
    yield put(
      actions.getTodosSuccess({
        allTodos: normalizedResponse.result,
        todos,
        comments
      })
    );
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
