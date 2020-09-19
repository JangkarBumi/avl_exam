import firebase from 'firebase';
import React, { useContext } from 'react';
import { AuthContext } from '../App';

const User = () => {
  const isLoggedIn = useContext(AuthContext);

  const user = firebase.auth().currentUser;

  let name, email, uid;

  if (user != null) {
    name = user.displayName;
    email = user.email;
    uid = user.uid;
  }

  // if (isLoading) return <div>Loading...</div>;

  return (
    <div>
      <h1>User</h1>
      <h1>{name}</h1>
      <h1>{email}</h1>
      <h1>{uid}</h1>
    </div>
  );
};

export default User;
