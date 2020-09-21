import CssBaseline from '@material-ui/core/CssBaseline';
import firebase from 'firebase/app';
import 'firebase/firebase-auth';
import 'firebase/firestore';
import React, { useEffect, useState } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import './App.css';
import Contact from './components/Contact';
import Homepage from './components/Homepage';
import Navbar from './components/Navbar';
import Question from './components/Question';
import Signin from './components/Signin';
import Signup from './components/Signup';
import User from './components/User';
import firebaseConfig from './firebase/firebaseConfig';

// Initialize Firebase
firebase.initializeApp(firebaseConfig);

export const db = firebase.firestore();

export const AuthContext = React.createContext();

function App() {
  const [isLoggedIn, setLoggedIn] = useState(false);
  const [userData, setUserData] = useState();
  const [isLoading, setLoading] = useState(true);

  const getUserData = () => {
    firebase.auth().onAuthStateChanged((userAuth) => setUserData(userAuth));
  };

  useEffect(() => {
    getUserData();
  }, []);

  useEffect(() => {
    if (userData) {
      setLoading(false);
    }
  }, [userData]);

  // function readSession() {
  //   const user = window.sessionStorage.getItem(
  //     `firebase:authUser:${firebaseConfig.apiKey}:[DEFAULT]`,
  //   );
  //   if (user) setLoggedIn(true);
  // }
  // useEffect(() => {
  //   readSession();
  // }, []);
  if (isLoading) return <div>...Loading</div>;
 

  return (
    <AuthContext.Provider value={isLoggedIn}>
      Is logged in? {JSON.stringify(isLoggedIn)}
      <CssBaseline></CssBaseline>
      <Router>
        <Navbar uid={userData.uid}></Navbar>
        <Switch>
          <Route exact path="/" component={Homepage}></Route>
          <Route path="/signup" component={Signup}></Route>
          <Route path="/user/:uid" component={User}></Route>
          <Route path="/contact" render={() => <Contact name={userData.displayName} />}/>
          <Route path="/problem/:problemId" component={Question}></Route>
          <Route path="/signin" component={Signin}></Route>
        </Switch>
      </Router>
    </AuthContext.Provider>
  );
}

export default App;
