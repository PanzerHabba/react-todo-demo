import * as React from "react";
import { IApplicationState } from "../../store";
import { bindActionCreators } from "redux";
import { connect } from "react-redux";

import { List, Paper } from "../TodoList/todoListStyling";

import OtherTodoListItem from "../OtherTodoListItem/OtherTodoListItem";
import { actions } from "./other-todoListActions";
import CurrentTodo from "./CurrentTodo";

class OtherTodoList extends React.Component<Props> {
  public initialCounter = 0;

  public componentDidMount() {
    this.props.fetchTodos();
  }

  public render() {
    this.initialCounter += 1;
    console.log(`TodoList rendered ${this.initialCounter} times`);
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
            {this.props.todos.map(todo => (
              <OtherTodoListItem key={todo.id} todo={todo} />
            ))}
          </List>
        </Paper>
        <CurrentTodo />
      </div>
    );
  }
}

const mapStateToProps = (state: IApplicationState) => ({
  todos: state.otherTodos.todos
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
)(OtherTodoList);
