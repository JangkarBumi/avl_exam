import firebase from 'firebase/app';
import React, { useContext, useState } from 'react';
import { AuthContext } from '../App';

const Signup = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setErrors] = useState('');

  const Auth = useContext(AuthContext);

  const handleGoogleLogin = () => {
    const provider = new firebase.auth.GoogleAuthProvider();

    firebase
      .auth()
      .setPersistence(firebase.auth.Auth.Persistence.SESSION)
      .then(() => {
        firebase
          .auth()
          .signInWithPopup(provider)
          .then((result) => {
            Auth.setLoggedIn(true);
          })
          .catch((e) => setErrors(e.message));
      });
  };

  return (
    <div>
      <h1>Signup</h1>

      <hr />
      <button
        onClick={() => handleGoogleLogin()}
        className="googleBtn"
        type="button"
      >
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
