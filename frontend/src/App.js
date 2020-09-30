import React, { useState, useEffect } from 'react';
import {Router, Link} from '@reach/router';
import { navigate } from '@reach/router';
import SignIn from './components/SignIn'
import Dashboard from './components/Dashboard'

function App() {
  const [loggedIn, setLoggedIn] = useState(false);
  const [attendance, setAttendance] = React.useState([])
  const [fullAttendance, setFullAttendance] = React.useState([])
  const [timetable, setTimetable] = React.useState([])

  const globalProps = {
    setLoggedIn: setLoggedIn,
    setAttendance: setAttendance,
    setTimetable: setTimetable
  }

  // console.log(loggedIn);
  return (
    <Router>
      <SignIn {...globalProps} path='/'/>
      <Dashboard {...globalProps} loggedIn={loggedIn} path='dashboard' />
    </Router>
  );
}


export default App;
