import CssBaseline from "@material-ui/core/CssBaseline";
import { MuiThemeProvider } from "@material-ui/core/styles";
import { ConnectedRouter } from "connected-react-router";
import { createBrowserHistory } from "history";
import * as React from "react";
import { Provider } from "react-redux";
import configureStore from "./configureStore";
import { theme } from "./styling";

import JssProvider from "./jssProvider";
import GlobalStyle from "./global-style";

import TodoList from "./containers/TodoList/TodoList";
// import TodoList from "./containers/OtherTodoList/OtherTodoList";
const history = createBrowserHistory();

export const store = configureStore(history);

class App extends React.Component {
  public render() {
    return (
      <Provider store={store}>
        <JssProvider>
          <MuiThemeProvider theme={theme}>
            <CssBaseline />
            <GlobalStyle />
            <ConnectedRouter history={history}>
              <TodoList />
            </ConnectedRouter>
          </MuiThemeProvider>
        </JssProvider>
      </Provider>
    );
  }
}

export default App;
