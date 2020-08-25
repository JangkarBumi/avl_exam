import CssBaseline from '@material-ui/core/CssBaseline';
import React from 'react';
import './App.css';
import Homepage from './components/Homepage';
function App() {
  return (
    <React.Fragment>
      <CssBaseline></CssBaseline>
      <Homepage></Homepage>
    </React.Fragment>
  );
}

export default App;
