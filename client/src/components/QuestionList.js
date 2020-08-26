import { Button } from '@material-ui/core';
import React, { useEffect, useState } from 'react';
import firebase from '../firebase/firebaseConfig';

const QuestionList = ({ match }) => {
  const [questions, setQuestions] = useState([]);
  const [loading, setLoading] = useState(true);

  const questionRef = firebase.database().ref('problems');

  useEffect(() => {
    questionRef.on('value', (snapshot) => {
      let datas = snapshot.val();
      let newState = [];
      for (let data in datas) {
        newState.push(datas[data]);
      }
      setQuestions(newState);
      setLoading(false);
    });
  }, []);

  // Query

  const filterQuestion = () => {
    setLoading(true);

    questionRef
      .orderByChild('calculator')
      .equalTo('No Calculator')
      .on('value', (snapshot) => {
        let datas = snapshot.val();

        let newState = [];
        for (let data in datas) {
          newState.push(datas[data]);
        }
        console.log(newState.length);
      });

    setLoading(false);
  };

  if (loading) return <div>Loading...</div>;

  return (
    <div>
      <div>
        <h1>More Filters</h1>

        <div>
          <h2>Calculator</h2>
          <button>All</button>
          <button>Calculator</button>
          <button>No Calculator</button>
        </div>

        <div>
          <h2>Answer Type</h2>
          <button>All</button>
          <button>Multiple Choice</button>
          <button>Grid In</button>
        </div>

        <button onClick={() => filterQuestion()}>Submit</button>
      </div>

      {questions.slice(0, 10).map((e) => {
        return (
          <div key={e.question_id}>
            <div>{e.question_title}</div>
            <div>{e.calculator}</div>
          </div>
        );
      })}

      <Button variant="contained" color="primary">
        Sub
      </Button>
    </div>
  );
};

export default QuestionList;
