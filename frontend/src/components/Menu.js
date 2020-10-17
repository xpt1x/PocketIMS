import {
  Divider,
  Drawer,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  makeStyles,
  Typography,
} from "@material-ui/core";
import { navigate } from "@reach/router";
import React, { useState } from "react";
import ExitToAppIcon from "@material-ui/icons/ExitToApp";
import AccountCircleIcon from "@material-ui/icons/AccountCircle";
import GitHubIcon from "@material-ui/icons/GitHub";
import { version } from "../serviceWorker";
import About from "./About";

const useStyles = makeStyles({
  list: {
    width: 250,
  },
});

export default function Menu(props) {
  const logout = () => {
    localStorage.clear();
    props.setMessage({ message: "Logout successful", variant: 1 });
    props.setAttendance(undefined);
    props.setFullAttendance(undefined);
    props.setTimetable(undefined);
    navigate("/");
  };

  const classes = useStyles();
  const [open, setOpen] = useState(false);
  return (
    <>
      <Drawer anchor="left" open={props.open} onClose={props.onclose}>
        <div className={classes.list}>
          <List>
            <ListItem>
              <Typography color="textSecondary" variant="subtitle1">
                {" "}
                PocketIMS Beta v{version}{" "}
              </Typography>
            </ListItem>
            <Divider />
            <ListItem button disabled>
              <ListItemIcon>
                <AccountCircleIcon />
              </ListItemIcon>
              <ListItemText primary="Profile" />
            </ListItem>

            <ListItem button onClick={() => setOpen(true)}>
              <ListItemIcon>
                <GitHubIcon />
              </ListItemIcon>
              <ListItemText primary="About" />
            </ListItem>

            <Divider />

            <ListItem button onClick={logout}>
              <ListItemIcon>
                <ExitToAppIcon />
              </ListItemIcon>
              <ListItemText primary="Log Out" />
            </ListItem>
          </List>
        </div>
      </Drawer>
      <About open={open} onclose={() => setOpen(false)} />
    </>
  );
}
