import { Button } from '@material-ui/core';
import React, { useEffect, useState } from 'react';
import {db} from '../firebase/firebaseConfig';

const QuestionList = ({ match }) => {
  const [questions, setQuestions] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    function getData() {
      db.collection('problems')
        .get()
        .then((querySnapshot) => {
          const data = querySnapshot.docs.map((doc) => doc.data());
      setQuestions(data)
      setLoading(false)
        });
    }
    getData();
  }, []);

  // Query

  // const filterQuestion = (order, params) => {
  //   setLoading(true);

  //   questionRef
  //     .orderByChild(order)
  //     .equalTo(params)
  //     .on('value', (snapshot) => {
  //       let datas = snapshot.val();

  //       let newState = [];
  //       for (let data in datas) {
  //         newState.push(datas[data]);
  //       }
  //       console.log(newState.length);
  //     });

  //   setLoading(false);
  // };

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

        <div>
          <h2>Chart Type</h2>
          <button>All</button>
          <button>Contains chart</button>
          <button>No chart</button>
        </div>

        <div>
          <h2>Problem Length</h2>
          <button>All</button>
          <button>Short</button>
          <button>Long</button>
        </div>

        <h3>Test button</h3>

        {/* <button onClick={() => filterQuestion('calculator', 'No Calculator')}>
          Submit Calculator
        </button>
        <button onClick={() => filterQuestion('answer_type', 'Grid-In')}>
          Submit Answer Type
        </button>
        <button onClick={() => filterQuestion('chart', 'No Chart')}>
          Submit Chart Type
        </button>
        <button onClick={() => filterQuestion('length', 'Long')}>
          Submit Question Length
        </button> */}
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
