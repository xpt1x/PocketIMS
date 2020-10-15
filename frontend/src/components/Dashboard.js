import React, { useState } from "react";
import { navigate } from "@reach/router";
// import Skeleton from "@material-ui/lab/Skeleton";
import MenuIcon from "@material-ui/icons/Menu";
import FetchData from "../ApiLayer/FetchData";
import {
  Tabs,
  Tab,
  AppBar,
  Toolbar,
  IconButton,
  makeStyles,
} from "@material-ui/core";
// import SwipeableViews from 'react-swipeable-views'
import Menu from "./Menu";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
}));

export default function Dashboard({
  setAttendance,
  setFullAttendance,
  setTimetable,
  setMessage,
  children,
}) {
  const classes = useStyles();
  const cacheMinute = 5;
  const tabs = {
    0: "attendance",
    1: "timetable",
  };
  const [value, setValue] = useState(0);
  const [menu, setMenu] = useState(false);

  const handleChange = (event, newValue) => {
    setValue(newValue);
    navigate(`/dashboard/${tabs[newValue]}`);
  };
  React.useEffect(() => {
    // user is logged in send to dashboard
    if (!localStorage.getItem("uid")) {
      navigate("/", { replace: true });
    }
    // Check for cache else send network fetch
    if (
      localStorage.getItem("attendance") &&
      localStorage.getItem("fullattendance") &&
      localStorage.getItem("timetable") &&
      Date.now() - parseInt(localStorage.getItem("timestamp")) <=
        1000 * 60 * cacheMinute
    ) {
      setAttendance(JSON.parse(localStorage.getItem("attendance")));
      setFullAttendance(JSON.parse(localStorage.getItem("fullattendance")));
      setTimetable(JSON.parse(localStorage.getItem("timetable")));
    } else {
      // cache expired, fetch new
      FetchData({ setAttendance, setFullAttendance, setTimetable });
    }
    navigate("/dashboard/attendance");
  }, [setAttendance, setFullAttendance, setTimetable]);

  return (
    <>
      <div className={classes.root}>
        <AppBar position="fixed">
          <Toolbar variant="dense" style={{display: "flex"}}>
            <IconButton
              edge="start"
              className={classes.menuButton}
              color="inherit"
              aria-label="menu"
              onClick={() => setMenu(true)}
            >
              <MenuIcon />
            </IconButton>
            <Menu
              setMessage={setMessage}
              open={menu}
              onclose={() => setMenu(false)}
              setAttendance={setAttendance}
              setFullAttendance={setFullAttendance}
              setTimetable={setTimetable}
            />
            <Tabs
              value={value}
              onChange={handleChange}
              style={{ color: "white", flex: "1", display: "flex", justifyContent: "center" }}
              centered
            >
              <Tab label="Attendance" />
              <Tab label="Timetable" />
            </Tabs>
          </Toolbar>
        </AppBar>
      </div>
      {children}
    </>
  );
}
