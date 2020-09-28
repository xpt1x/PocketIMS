import React, { useState } from 'react';
import {Router, Link} from '@reach/router';
import SignIn from './components/SignIn'

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
  
  return (
    <Router>
      <SignIn {...globalProps} path='signin'/>
    </Router>
  );
}


export default App;
