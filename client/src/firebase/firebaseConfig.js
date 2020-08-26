
import firebase from 'firebase'

var firebaseConfig = {
  apiKey: "AIzaSyDmWDjGMZyPU_PWHAsoMMvki7eR9v0zg6w",
  authDomain: "scorepractice-a6fac.firebaseapp.com",
  databaseURL: "https://scorepractice-a6fac.firebaseio.com",
  projectId: "scorepractice-a6fac",
  storageBucket: "scorepractice-a6fac.appspot.com",
  messagingSenderId: "531537365442",
  appId: "1:531537365442:web:43ce123eae383c0ecf6e5b"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

export default firebase