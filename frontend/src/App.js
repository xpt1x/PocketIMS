import React, { useState, useEffect } from 'react';
import SignIn from './components/SignIn'
import Dashboard from './components/Dashboard'
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import Message from './components/Message'

function App() {
  const [loggedIn, setLoggedIn] = useState(false);
  const [attendance, setAttendance] = React.useState([])
  const [fullAttendance, setFullAttendance] = React.useState([])
  const [timetable, setTimetable] = React.useState([])
  const [message, setMessage] = React.useState({
    message: null,
    variant: 0
  });
  const globalProps = {
    setMessage: setMessage,
    setLoggedIn: setLoggedIn,
    setAttendance: setAttendance,
    setTimetable: setTimetable
  }

  return (
    <>
    {message.message ? <Message message={message} /> : null}
    <Switch>
        <Route path='/' exact render={(props) => <SignIn {...props} {...globalProps}/>}/>
        <Route path='/dashboard' exact render={(props) => <Dashboard {...props} {...globalProps}/>} />
    </Switch>
    </>
  );
}


export default App;
