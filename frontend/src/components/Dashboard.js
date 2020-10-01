import React from "react";
import { navigate } from "@reach/router";
import Skeleton from "@material-ui/lab/Skeleton";
import FetchData from "../ApiLayer/FetchData";
const cacheMinute = 5;
export default function Dashboard({
  setAttendance,
  setFullAttendance,
  setTimetable,
  attendance,
  timetable,
  fullAttendance,
}) {
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
  }, [setAttendance, setFullAttendance, setTimetable]);

  return (
    <>
      <h2>Hey there! You are on Dashboard</h2>
      {attendance !== undefined ? (
        <h2>Attendance fetched</h2>
      ) : (
        <Skeleton variant="rect" width={210} height={118} />
      )}
    </>
  );
}
