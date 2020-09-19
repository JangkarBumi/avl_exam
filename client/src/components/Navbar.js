import AppBar from '@material-ui/core/AppBar';
import IconButton from '@material-ui/core/IconButton';
import { makeStyles } from '@material-ui/core/styles';
import Toolbar from '@material-ui/core/Toolbar';
import MenuIcon from '@material-ui/icons/Menu';
import firebase from 'firebase/firebase-auth';
import React,{useContext} from 'react';
import { Link } from 'react-router-dom';
import {AuthContext} from '../App'

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
  },
}));

const Navbar = () => {
  const classes = useStyles();

  const pickNumber = Math.floor(Math.random() * 1600 + 1);

  const isLoggedIn = useContext(AuthContext)

  console.log(isLoggedIn);

  const handleLogout = () => {
    firebase
      .auth()
      .signOut()
      .then(function () {
        alert('Sign-out successful');
        // Sign-out successful.
      })
      .catch(function (error) {
        // An error happened.
      });
  };

  return (
    <div className={classes.root}>
      <AppBar
        position="static"
        style={{ background: '#1d1e20', borderBottom: '2px solid grey' }}
      >
        <Toolbar>
          <IconButton
            edge="start"
            className={classes.menuButton}
            color="inherit"
            aria-label="menu"
          >
            <MenuIcon />
          </IconButton>

          <Link className="link" to="/">
            Home
          </Link>
          <Link className="link" to="/contact">
            Contact Us
          </Link>

          <Link className="link" to={`/problem/problem${pickNumber}`}>
            Random Quiz
          </Link>

          <Link className="link" to="/signup">
            Signup
          </Link>

          <Link className="link" to="/signup" onClick={handleLogout}>
            Logout
          </Link>
        </Toolbar>
      </AppBar>
    </div>
  );
};

export default Navbar;
