import { connectRouter, routerMiddleware } from "connected-react-router";
import { History } from "history";
import { localizeReducer } from "react-localize-redux";
import { applyMiddleware, combineReducers, createStore, Store } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import { IApplicationState, reducers } from "./store";

import createSagaMiddleware from "redux-saga";
import registerWithMiddleware from "./sagas";

const host = process.env.NODE_ENV;
console.log("host: ", host);

const configureStore = (history: History, initialState?: IApplicationState) => {
  // create the saga middleware
  const sagaMiddleware = createSagaMiddleware();

  const composer = composeWithDevTools({});

  const appliedMiddleWare = composer(
    applyMiddleware(sagaMiddleware, routerMiddleware(history))
  );

  // Combine all reducers and instantiate the app-wide store instance
  const allReducers = buildRootReducer(reducers, history);
  const store = createStore(
    allReducers,
    initialState,
    appliedMiddleWare
  ) as Store<IApplicationState>;

  registerWithMiddleware(sagaMiddleware);
  return store;
};

const buildRootReducer = (allReducers, history) => {
  return combineReducers({
    ...allReducers,
    localize: localizeReducer,
    router: connectRouter(history)
  });
};

export default configureStore;
