import * as firebase from 'firebase/app';
import 'firebase/firestore';
require('dotenv').config();

// Firebase App (the core Firebase SDK) is always required and must be listed first
// Add the Firebase products that you want to use

// TODO: Replace the following with your app's Firebase project configuration
const firebaseConfig = {
  apiKey: process.env._api,
  authDomain: process.env.REACT_APP_authDomain,
  databaseURL: process.env.REACT_APP_databaseURL,
  projectId: process.env.REACT_APP_projectId,
  storageBucket: process.env.REACT_APP_storageBucket,
  messagingSenderId: process.env.REACT_APP_messagingSenderId,
  appId: process.env.REACT_APP_appId,
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);

export const db = firebase.firestore();
