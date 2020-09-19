import React from 'react';
import QuestionList from './QuestionList';
import Report from './Report';

const Homepage = () => {
  return (
    <React.Fragment>
      <div className="homepage-container">
        <Report completed={100} correct={75}></Report>
        <QuestionList></QuestionList>
      </div>
    </React.Fragment>
  );
};

export default Homepage;
