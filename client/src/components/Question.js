import { Button } from '@material-ui/core';
import React, { useEffect, useState } from 'react';
import firebase from '../firebase/firebaseConfig';
import Navbar from './Navbar';
import Report from './Report';

const Question = ({ match }) => {
  const [questionTitle, setQuestionTitle] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const titleRef = firebase.database().ref();

    titleRef.on('value', (snapshot) => {
      let datas = snapshot.val();
      let newState = [];
      for (let data in datas) {
        newState.push(datas[data]);
      }
      setQuestionTitle(newState);
      setLoading(false);
    });
  }, []);

  let problemId = 'problem1';

  if (match) problemId = match.params.problemId;

  const dmg = questionTitle.filter((e) => e.question_id === problemId);

  if (loading) return <div>Loading...</div>;

  return (
    <React.Fragment>
      <Navbar></Navbar>
      <div className="homepage-container">
        <Report completed={100} correct={75}></Report>
        <div>
          <p>{dmg[0].question_title}</p>
          <p>{dmg[0].question_text}</p>
          <p>{dmg[0].hashtags}</p>
          <Button variant="contained" color="primary">
            Sub
          </Button>
        </div>
      </div>
    </React.Fragment>
  );
};

export default Question;
