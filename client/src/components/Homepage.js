import React from 'react';
import Navbar from './Navbar';
import QuestionList from './QuestionList';
import Report from './Report';

const Homepage = () => {
  return (
    <React.Fragment>
      <Navbar></Navbar>
      <div className="homepage-container">
        <Report completed={100} correct={75}></Report>
        <QuestionList></QuestionList>
      </div>
    </React.Fragment>
  );
};

export default Homepage;
