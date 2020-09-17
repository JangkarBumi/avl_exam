import React,{useState,useContext} from 'react'
import {AuthContext} from '../index'
import * as firebase from 'firebase'

const Signup = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setErrors] = useState("");

  const Auth = useContext(AuthContext);
  const handleForm = e => {
    e.preventDefault();
    firebase
      .auth()
      .createUserWithEmailAndPassword(email, password)
      .then(res => {
        console.log(res)
        if (res.user) Auth.setLoggedIn(true);
      })
      .catch(e => {
        setErrors(e.message);
      });
  };

  return (
    <div>
      <h1>Signup</h1>

        <hr />
        <button type="button">
          <img
            src="https://upload.wikimedia.org/wikipedia/commons/5/53/Google_%22G%22_Logo.svg"
            alt="logo"
          />
          Signup With Google
        </button>

        <button type="submit">Login</button>

        <span>{error}</span>
    </div>
  );
};

export default Signup;