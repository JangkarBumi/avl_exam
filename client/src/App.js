import CssBaseline from '@material-ui/core/CssBaseline';
import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import './App.css';
import Contact from './components/Contact';
import Homepage from './components/Homepage';

function App() {
  return (
    <Router>
      <CssBaseline></CssBaseline>
      <Switch>
        <Route exact path="/" component={Homepage}></Route>
        <Route path="/contact" component={Contact} name={'Jen'}></Route>
        {/* <Route path="/problem/:problemId" component={Problem}></Route>  */}
      </Switch>
    </Router>
  );
}

export default App;
