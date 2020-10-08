import React from "react";
import SignIn from "./components/SignIn";
import Dashboard from "./components/Dashboard";
import Message from "./components/Message";
import { Router } from "@reach/router";
import Attendance from "./components/Attendance";
import TimeTable from "./components/TimeTable";
import SubjectDetail from "./components/SubjectDetail";
import "./styles/main.scss";
import FullReport from "./components/FullReport";

function App() {
  const [attendance, setAttendance] = React.useState(undefined);
  const [fullAttendance, setFullAttendance] = React.useState(undefined);
  const [timetable, setTimetable] = React.useState(undefined);
  const [subject, setSubject] = React.useState(undefined);
  const [message, setMessage] = React.useState({
    message: null,
    variant: 0,
  });
  const [drawerOpen, setDrawerOpen] = React.useState(false);

  const globalProps = {
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

  return (
    <>
      {message.message ? <Message message={message} /> : null}
      <Router>
        <SignIn path="/" {...globalProps} />
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
              <FullReport path="report" data={fullAttendance} />
            </SubjectDetail>
          </Attendance>
          <TimeTable path="timetable" timetable={timetable} />
        </Dashboard>
        {/* Create a not found page for a non func route */}
      </Router>
    </>
  );
}

export default App;
