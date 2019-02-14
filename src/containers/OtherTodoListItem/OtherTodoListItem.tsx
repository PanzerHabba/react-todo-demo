import * as React from "react";
import { IApplicationState } from "../../store";
import { bindActionCreators } from "redux";
import { connect } from "react-redux";

import { List, ListItem, Paper } from "../TodoList/todoListStyling";
import Typography from "@material-ui/core/Typography";
import ListItemText from "@material-ui/core/ListItemText";
import TextField from "@material-ui/core/TextField";
import { FetchedTodo } from "../TodoList";
import Button from "@material-ui/core/Button";
import { actions } from "../OtherTodoList/other-todoListActions";

type ILocalState = {
  editMode: boolean;
  todo: FetchedTodo;
};

class OtherTodoListItem extends React.Component<Props, ILocalState> {
  public initialCounter = 0;

  public constructor(props) {
    super(props);
    this.state = {
      editMode: false,
      todo: this.props.todo
    };
  }

  public render() {
    // if (this.props.todo.id === 1) {
    //   this.initialCounter += 1;
    //   console.log(
    //     `todo-item ${this.props.todo.text} rendered ${
    //       this.initialCounter
    //     } times`
    //   );
    // }
    if (this.state.editMode) return this._renderEditMode();
    return this._renderReadMode();
  }

  private _renderReadMode = () => {
    const { todo } = this.props;
    return (
      <ListItem alignItems="flex-start" button onClick={this._setSelectedTodo}>
        <ListItemText
          primary={todo.text}
          secondary={
            <React.Fragment>
              <Typography
                component="span"
                // style={{ display: "inline" }}
                color="textPrimary"
              >
                Reporter: {todo.reporter}
              </Typography>
              {`Resolved: ${todo.resolved}`}
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
    const { todo, setSelectedTodo } = this.props;
    setSelectedTodo(todo.id);
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
  currentTodo: (id: number) => {
    return state.otherTodos.currentTodo === id;
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
  todo: FetchedTodo;
};
type Props = StateProps & DispatchProps & OwnProps;

export default connect<StateProps, DispatchProps, OwnProps, IApplicationState>(
  mapStateToProps,
  mapDispatchToProps
)(OtherTodoListItem);
