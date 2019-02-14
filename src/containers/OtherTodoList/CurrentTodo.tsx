import * as React from "react";
import { IApplicationState } from "../../store";
import { bindActionCreators } from "redux";
import { connect } from "react-redux";

import Card from "@material-ui/core/Card";

class CurrentTodo extends React.Component<Props> {
  public initialCounter = 0;

  public render() {
    this.initialCounter += 1;
    console.log(`CurrentTodo rendered ${this.initialCounter} times`);
    const { currentTodo, todos } = this.props;
    const _todo = todos.find(t => t.id === currentTodo);
    return (
      <Card style={{ marginTop: 20, padding: 10, height: 200, width: 300 }}>
        <h4>Current Todo</h4>
        <h3>{_todo ? _todo.text : "no todo selected"}</h3>
      </Card>
    );
  }
}

const mapStateToProps = (state: IApplicationState) => ({
  todos: state.otherTodos.todos,
  currentTodo: state.otherTodos.currentTodo
});

const mapDispatchToProps = dispatch => bindActionCreators({}, dispatch);

type StateProps = ReturnType<typeof mapStateToProps>;
type DispatchProps = ReturnType<typeof mapDispatchToProps>;
type OwnProps = {};
type Props = StateProps & DispatchProps & OwnProps;

export default connect<StateProps, DispatchProps, OwnProps, IApplicationState>(
  mapStateToProps,
  mapDispatchToProps
)(CurrentTodo);
