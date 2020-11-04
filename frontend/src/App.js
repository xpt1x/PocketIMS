import React, { useState } from "react";
import SignIn from "./components/SignIn";
import Dashboard from "./components/Dashboard";
import { Router } from "@reach/router";
import Attendance from "./components/Attendance";
import SubjectDetail from "./components/SubjectDetail";
import FullReport from "./components/FullReport";
import {
  createMuiTheme,
  CssBaseline,
  MuiThemeProvider,
} from "@material-ui/core";
import { blue, deepOrange } from "@material-ui/core/colors";
import TimeTable from "./components/TimeTable";
import { useSnackbar } from 'notistack';


function App() {
  const [attendance, setAttendance] = useState(undefined);
  const [fullAttendance, setFullAttendance] = useState(undefined);
  const [timetable, setTimetable] = useState(undefined);
  const [subject, setSubject] = useState(undefined);
  const { enqueueSnackbar } = useSnackbar();
  const drawer = useState(false);
  const setDrawerOpen = drawer[1];

  const globalProps = {
    setDrawerOpen,
    enqueueSnackbar,
    setAttendance,
    setFullAttendance,
    setTimetable,
  };

  const dashboardProps = {
    ...globalProps,
    attendance,
    fullAttendance,
    timetable,
  };

  const darkTheme = createMuiTheme({
    palette: {
      type: "dark",
      primary: blue,
      secondary: deepOrange,
    },
  });

  return (
    <>
      <MuiThemeProvider theme={darkTheme}>
        <CssBaseline />
        <Router>
          <SignIn path="/" default {...globalProps} />

          <Dashboard path="dashboard" {...dashboardProps}>
            <Attendance
              path="attendance"
              attendance={attendance}
              setSubject={setSubject}
            >
              <SubjectDetail
                path=":subjectcode"
                subject={subject}
                fullAttendance={fullAttendance}
                drawerHandler={setDrawerOpen}
              >
                <FullReport
                  path="report"
                  data={fullAttendance}
                  close={setDrawerOpen}
                />
              </SubjectDetail>
            </Attendance>

            {/* <TimeTable path="timetable" timetable={timetable} /> */}
            <TimeTable path="timetable" timetable={timetable} />
          </Dashboard>

          {/* Create a not found page for a non func route */}
        </Router>
      </MuiThemeProvider>
    </>
  );
}

export default App;
