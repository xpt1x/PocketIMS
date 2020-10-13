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
import React from "react";
import ExitToAppIcon from "@material-ui/icons/ExitToApp";
import AccountCircleIcon from "@material-ui/icons/AccountCircle";
import GitHubIcon from "@material-ui/icons/GitHub";
import { version } from "../serviceWorker";

const useStyles = makeStyles({
  list: {
    width: 250,
  },
});

const logout = () => {
  localStorage.clear();
  navigate("/");
};

export default function Menu(props) {
  const classes = useStyles();
  return (
    <>
      <Drawer anchor="left" open={props.open} onClose={props.onclose}>
        <div className={classes.list}>
          <List>
            <ListItem>
              <Typography color="textSecondary" variant="subtitle1">
                {" "}
                PocketIMS v{version}{" "}
              </Typography>
            </ListItem>
            <Divider />
            <ListItem button>
              <ListItemIcon>
                <AccountCircleIcon />
              </ListItemIcon>
              <ListItemText primary="Profile" />
            </ListItem>
            <ListItem button onClick={logout}>
              <ListItemIcon>
                <ExitToAppIcon />
              </ListItemIcon>
              <ListItemText primary="Log Out" />
            </ListItem>
            <Divider />
            {/* For now keeping this simple but will add dialog */}
            <ListItem
              button
              onClick={() =>
                window.open("https://github.com/xpt1x/PocketIMS", "_blank")
              }
            >
              <ListItemIcon>
                <GitHubIcon />
              </ListItemIcon>
              <ListItemText primary="About" />
            </ListItem>
          </List>
        </div>
      </Drawer>
    </>
  );
}
