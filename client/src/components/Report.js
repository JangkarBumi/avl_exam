import React from 'react';
import RadialChart from './RadialChart';

const Report = ({ completed, correct }) => {
  return (
    <div className="report-container">
      <RadialChart progress={75} color="#6dd5ed" />
      <div className="report-detail">
        <div>
          <span className="caps block">Completed</span>
          <span className="number ">{completed}</span>
          <span className="caps grey bold">Problems</span>
        </div>

        <div>
          <span className="caps block">Correct</span>
          <span className="number">{correct}</span>
          <span className="caps grey bold">Problems</span>
        </div>
      </div>
      
    </div>
  );
};

export default Report;
