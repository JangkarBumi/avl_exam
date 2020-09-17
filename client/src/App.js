import CssBaseline from '@material-ui/core/CssBaseline';
import * as firebase from 'firebase/app';
import 'firebase/firestore';
import React, { useEffect, useState } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import './App.css';
import Contact from './components/Contact';
import Homepage from './components/Homepage';
import Question from './components/Question';
import Signup from './components/Signup';
import firebaseConfig from './firebase/firebaseConfig';

// Initialize Firebase
firebase.initializeApp(firebaseConfig);

export const db = firebase.firestore();

export const AuthContext = React.createContext(null);

function App() {
  const [isLoggedIn, setLoggedIn] = useState(false);

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
    <AuthContext.Provider value={{ isLoggedIn, setLoggedIn }}>
      Is logged in? {JSON.stringify(isLoggedIn)}
      <Router>
        <CssBaseline></CssBaseline>
        <Switch>
          <Route exact path="/" component={Homepage}></Route>
          <Route path="/contact" component={Contact} name={'Jen'}></Route>
          <Route path="/problem/:problemId" component={Question}></Route>
          <Route path="/signup" component={Signup}></Route>
        </Switch>
      </Router>
    </AuthContext.Provider>
  );
}

export default App;
