import React from "react";
import { navigate } from "@reach/router";
// import Skeleton from "@material-ui/lab/Skeleton";
import FetchData from "../ApiLayer/FetchData";
import { Tabs, Tab, AppBar, Container } from "@material-ui/core";
// import SwipeableViews from 'react-swipeable-views'
import LogOut from "./LogOut";

export default function Dashboard({
  setAttendance,
  setFullAttendance,
  setTimetable,
  children,
}) {
  const cacheMinute = 5;
  const tabs = {
    0: "attendance",
    1: "timetable",
  };
  const [value, setValue] = React.useState(0);
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
      <AppBar position="fixed">
        <Tabs value={value} onChange={handleChange} centered>
          <Tab label="Attendance" />
          <Tab label="Timetable" />
        </Tabs>
      </AppBar>
      <Container style={{ marginTop: "60px" }}>{children}</Container>
      <LogOut />
    </>
  );
}
