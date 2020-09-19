import CssBaseline from '@material-ui/core/CssBaseline';
import firebase from 'firebase/app';
import 'firebase/firestore';
import React, { useEffect, useState } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import './App.css';
import Contact from './components/Contact';
import Navbar from './components/Navbar';
import Question from './components/Question';
import Signin from './components/Signin';
import Signup from './components/Signup';
import User from './components/User';
import firebaseConfig from './firebase/firebaseConfig';
import Homepage from './components/Homepage'

// Initialize Firebase
firebase.initializeApp(firebaseConfig);

export const db = firebase.firestore();

export const AuthContext = React.createContext();

function App() {
  const [isLoggedIn, setLoggedIn] = useState(false);
  const user = { name: 'Tania', loggedIn: true };

  function readSession() {
    const user = window.sessionStorage.getItem(
      `firebase:authUser:${firebaseConfig.apiKey}:[DEFAULT]`,
    );
    if (user) setLoggedIn(true);
  }
  useEffect(() => {
    readSession();
  }, []);
  return (
    <AuthContext.Provider value={isLoggedIn}>
      Is logged in? {JSON.stringify(isLoggedIn)}
      <CssBaseline></CssBaseline>
      <Router>
        <Navbar></Navbar>
        <Switch>
          <Route exact path="/" component={Homepage}></Route>
          <Route path="/signup" component={Signup}></Route>
          <Route path="/user" component={User}></Route>
          <Route path="/contact" component={Contact} name={'Jen'}></Route>
          <Route path="/problem/:problemId" component={Question}></Route>
          <Route path="/signin" component={Signin}></Route>
        </Switch>
      </Router>
    </AuthContext.Provider>
  );
}

export default App;
