import React from 'react'
import Report from './Report'
import Question from './Question'
import Navbar from '../Navbar'

const Homepage = () => {
  return (
    <React.Fragment>
      <Navbar></Navbar>
    <div className="homepage-container">
      <Report></Report>
      <Question></Question>
    </div>
    </React.Fragment>
  )
}

export default Homepage
