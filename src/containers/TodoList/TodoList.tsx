import * as React from "react";
import { IApplicationState } from "../../store";
import { bindActionCreators } from "redux";
import { connect } from "react-redux";

import { List, Paper } from "./todoListStyling";
import { getTodosList } from "./todoSelectors";

import TodoListItem from "../TodoListItem/TodoListItem";
import { actions } from "./todoListActions";
import CurrentTodo from "./CurrentTodo";

class TodoList extends React.Component<Props> {
  public initialCounter = 0;
  public componentDidMount() {
    this.props.fetchTodos();
  }

  public shouldComponentUpdate(nextProps: Props) {
    if (JSON.stringify(nextProps.todos) !== JSON.stringify(this.props.todos)) {
      return true;
    }
    return false;
  }

  public render() {
    this.initialCounter += 1;
    console.log(`TodoList rendered ${this.initialCounter} times`);
    const { todos } = this.props;
    return (
      <div
        style={{
          width: "100%",
          margin: "20px auto",
          maxWidth: 900,
          display: "flex"
        }}
      >
        <Paper>
          <List>
            {todos.map(todoId => (
              <TodoListItem key={todoId} todoId={todoId} />
            ))}
          </List>
        </Paper>
        <CurrentTodo />
      </div>
    );
  }
}

const mapStateToProps = (state: IApplicationState) => ({
  todos: getTodosList(state)
});

const mapDispatchToProps = dispatch =>
  bindActionCreators(
    {
      fetchTodos: actions.getTodos
    },
    dispatch
  );

type StateProps = ReturnType<typeof mapStateToProps>;
type DispatchProps = ReturnType<typeof mapDispatchToProps>;
type OwnProps = {};
type Props = StateProps & DispatchProps & OwnProps;

export default connect<StateProps, DispatchProps, OwnProps, IApplicationState>(
  mapStateToProps,
  mapDispatchToProps
)(TodoList);
