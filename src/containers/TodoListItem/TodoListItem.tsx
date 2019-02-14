import * as React from "react";
import { IApplicationState } from "../../store";
import { bindActionCreators } from "redux";
import { connect } from "react-redux";

import { List, ListItem, Paper } from "../TodoList/todoListStyling";
import Typography from "@material-ui/core/Typography";
import ListItemText from "@material-ui/core/ListItemText";
import {
  getTodos,
  getFetchedTodos,
  getIsSelected
} from "../TodoList/todoSelectors";
import TextField from "@material-ui/core/TextField";
import { Todo } from "../TodoList";
import Button from "@material-ui/core/Button";

import { actions } from "../TodoList/todoListActions";

type ILocalState = {
  editMode: boolean;
  todo: Todo;
};

class TodoListItem extends React.Component<Props, ILocalState> {
  public initialCounter = 0;
  public constructor(props) {
    super(props);
    this.state = {
      editMode: false,
      todo: this.props.todos[this.props.todoId]
    };
  }

  public render() {
    const { todoId, todos } = this.props;

    // if (this.props.todoId === 1) {
    //   this.initialCounter += 1;
    //   console.log(
    //     `todo-item ${todos[todoId].text} rendered ${this.initialCounter} times`
    //   );
    // }
    if (this.state.editMode) return this._renderEditMode();
    return this._renderReadMode();
  }

  private _renderReadMode = () => {
    const _todo = this.props.todos[this.props.todoId];
    return (
      <ListItem alignItems="flex-start" button onClick={this._setSelectedTodo}>
        <ListItemText
          primary={_todo.text}
          secondary={
            <React.Fragment>
              <Typography
                component="span"
                // style={{ display: "inline" }}
                color="textPrimary"
              >
                Reporter: {_todo.reporter}
              </Typography>
              {`Resolved: ${_todo.resolved}`}
            </React.Fragment>
          }
        />
      </ListItem>
    );
  };

  private _renderEditMode = () => {
    return (
      <ListItem alignItems="center">
        <div>
          <TextField
            style={{ paddingTop: 0 }}
            autoFocus
            variant="outlined"
            margin="dense"
            value={this.state.todo.text}
            label="todo text"
            InputProps={{ style: { padding: "7px 5px" } }}
            inputProps={{ style: { padding: "7px 5px" } }}
            onChange={e => this._onTodoTextChanged(e.target.value, "text")}
          />
          <TextField
            style={{ paddingTop: 0 }}
            autoFocus
            variant="outlined"
            margin="dense"
            value={this.state.todo.reporter}
            label="todo reporter"
            InputProps={{ style: { padding: "7px 5px" } }}
            inputProps={{ style: { padding: "7px 5px" } }}
            onChange={e => this._onTodoTextChanged(e.target.value, "reporter")}
          />
        </div>

        <Button
          style={{ marginLeft: "auto" }}
          onClick={this._onEditFinished}
          color="primary"
        >
          Ferdig
        </Button>
      </ListItem>
    );
  };

  private _setSelectedTodo = () => {
    const { todoId, setSelectedTodo } = this.props;
    setSelectedTodo(todoId);
    this.setState({ editMode: true });
  };

  private _onTodoTextChanged = (newText: string, key: string) => {
    this.setState(prevState => ({
      ...prevState,
      todo: { ...prevState.todo, [key]: newText }
    }));
  };

  private _onEditFinished = () => {
    const { setSelectedTodo, updateTodo } = this.props;
    setSelectedTodo(null);
    updateTodo(this.state.todo);
    this.setState({ editMode: false });
  };
}

const mapStateToProps = (state: IApplicationState) => ({
  todos: getTodos(state),
  isSelected: (idFromComponent: number) => {
    const _getIsSelected = getIsSelected(state);
    return _getIsSelected(idFromComponent);
  }
});

const mapDispatchToProps = dispatch =>
  bindActionCreators(
    {
      updateTodo: actions.updateTodo,
      setSelectedTodo: actions.setSelectedTodo
    },
    dispatch
  );

type StateProps = ReturnType<typeof mapStateToProps>;
type DispatchProps = ReturnType<typeof mapDispatchToProps>;
type OwnProps = {
  todoId: number;
};
type Props = StateProps & DispatchProps & OwnProps;

export default connect<StateProps, DispatchProps, OwnProps, IApplicationState>(
  mapStateToProps,
  mapDispatchToProps
)(TodoListItem);
