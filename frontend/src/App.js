import React, {useState} from "react";
import SignIn from "./components/SignIn";
import Dashboard from "./components/Dashboard";
import Message from "./components/common/Message";
import { Router } from "@reach/router";
import Attendance from "./components/Attendance";
import TimeTable from "./components/TimeTable";
import SubjectDetail from "./components/SubjectDetail";
import "./styles/main.scss";
import FullReport from "./components/FullReport";
import {
  createMuiTheme,
  CssBaseline,
  MuiThemeProvider,
} from "@material-ui/core";
import { blue, deepOrange } from "@material-ui/core/colors";

function App() {
  const [attendance, setAttendance] = useState(undefined);
  const [fullAttendance, setFullAttendance] = useState(undefined);
  const [timetable, setTimetable] = useState(undefined);
  const [subject, setSubject] = useState(undefined);
  const [message, setMessage] = useState({
    message: null,
    variant: 0,
  });
  const drawer = useState(false);
  const setDrawerOpen = drawer[1];

  const globalProps = {
    setDrawerOpen,
    setMessage,
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
      {message.message ? <Message message={message} /> : null}
      <MuiThemeProvider theme={darkTheme}>
        <CssBaseline />
        <Router>
          <SignIn path="/" {...globalProps} />

          <Dashboard path="dashboard" {...dashboardProps}>

            <Attendance path="attendance" attendance={attendance} setSubject={setSubject}>
              <SubjectDetail path=":subjectcode" subject={subject} fullAttendance={fullAttendance} drawerHandler={setDrawerOpen}>
                <FullReport path="report" data={fullAttendance} close={setDrawerOpen}/>
              </SubjectDetail>
            </Attendance>
            
            <TimeTable path="timetable" timetable={timetable} />

          </Dashboard>

          {/* Create a not found page for a non func route */}
        </Router>
      </MuiThemeProvider>
    </>
  );
}

export default App;
