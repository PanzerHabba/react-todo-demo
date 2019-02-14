import { withStyles } from "@material-ui/core/styles";
import MUiList from "@material-ui/core/List";
import MUiListItem from "@material-ui/core/ListItem";
import MUiPaper from "@material-ui/core/Paper";

export const List = withStyles({
  root: {}
})(MUiList);

export const ListItem = withStyles({
  root: {}
})(MUiListItem);

export const Paper = withStyles({
  root: {
    display: "inline-table",
    maxWidth: 500,
    width: "100%",
    margin: "20px auto"
  }
})(MUiPaper);
