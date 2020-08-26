import { Button } from '@material-ui/core';
import React, { useEffect, useState } from 'react';
import firebase from '../firebase/firebaseConfig';

const QuestionList = ({ match }) => {
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

  if (loading) return <div>Loading...</div>;

  return (
    <div>
      {questionTitle.slice(0,10).map((e) => {
        return <div>{e.question_title}</div>;
      })}

      <Button variant="contained" color="primary">
        Sub
      </Button>
    </div>
  );
};

export default QuestionList;
