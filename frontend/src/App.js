import React, { useState, useEffect } from 'react';
import SignIn from './components/SignIn'
import Dashboard from './components/Dashboard'
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';

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
    <Switch>
        <Route path='/' exact render={(props) => <SignIn {...props} {...globalProps}/>}/>
        <Route path='/dashboard' exact render={Dashboard}></Route>
    </Switch>
  );
}


export default App;
