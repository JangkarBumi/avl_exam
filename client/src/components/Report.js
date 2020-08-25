import React from 'react';
import RadialChart from './RadialChart';

const Report = () => {
  return (
    <div className="report-container">
      <RadialChart progress={70} color="#3c71d0" />
      <div className="report-detail">
        <div>
          <span className="caps block">Completed</span>
          <span className="number ">100</span>
          <span className="caps grey bold">Problems</span>
        </div>

        <div>
          <span className="caps block">Correct</span>
          <span className="number">75</span>
          <span className="caps grey bold">Problems</span>
        </div>
      </div>
    </div>
  );
};

export default Report;
