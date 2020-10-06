import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Fab from "@material-ui/core/Fab";
import ExitToAppIcon from "@material-ui/icons/ExitToApp";
import { navigate } from "@reach/router";

const useStyles = makeStyles((theme) => ({
  fab: {
    position: "fixed",
    bottom: theme.spacing(4),
    right: theme.spacing(4),
  },
}));

const logout = () => {
  localStorage.clear();
  navigate("/");
};

export default function LogOut() {
  const classes = useStyles();

  return (
    <div className={classes.fab}>
      <Fab onClick={logout} color="primary" aria-label="logout">
        <ExitToAppIcon />
      </Fab>
    </div>
  );
}
