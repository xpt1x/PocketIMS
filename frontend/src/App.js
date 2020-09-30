import React, { useState, useEffect } from 'react';
import SignIn from './components/SignIn'
import Dashboard from './components/Dashboard'
import {BrowserRouter as Router, Switch, Route, Redirect, useHistory} from 'react-router-dom';
import Message from './components/Message'

function App() {
  const history = useHistory();
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
        <Route path='/' exact>
          {loggedIn? <Redirect to='/dashboard'/>:<SignIn {...globalProps}/>}
        </Route>
        <Route path='/dashboard' exact>
          {!loggedIn? <Redirect to={{pathname:"/", state:{from: history.location}}} />:<Dashboard {...globalProps}/>}
        </Route>
    </Switch>
    </>
  );
}


export default App;
