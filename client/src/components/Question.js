import { Button } from '@material-ui/core';
import React, { useEffect, useState } from 'react';
import firebase from '../firebase/firebaseConfig';

const Question = ({ match }) => {
  const [questionTitle, setQuestionTitle] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const titleRef = firebase.database().ref();

    titleRef.on('value', (snapshot) => {
      // console.log(snapshot.val());
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
    <div>
      <p>{dmg[0].question_title}</p>
      <p>{dmg[0].question_text}</p>
      <p>{dmg[0].hashtags}</p>
      <Button variant="contained" color="primary">
        Sub
      </Button>
    </div>
  );
};

export default Question;
