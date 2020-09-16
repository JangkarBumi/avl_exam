import { Button } from '@material-ui/core';
import React, { useEffect, useState } from 'react';
import { db } from '../firebase/firebaseConfig';

const QuestionList = () => {
  const [questions, setQuestions] = useState([]);
  const [loading, setLoading] = useState(true);
  const [calculatorFilter, setCalculatorFilter] = useState('');
  const [answerTypeFilter, setAnswerTypeFilter] = useState('');
  const [chartFilter, setChartFilter] = useState('');
  const [lengthFilter, setLengthFilter] = useState('');

  useEffect(() => {
    async function getData() {
      const problemsRef = db.collection('problems');

      const snapshot = await problemsRef.get();

      if (snapshot.empty) {
        console.log('No matching documents.');
        return;
      }

      const data = [];
      snapshot.forEach((doc) => {
        data.push(doc.data());
      });
      setQuestions(data);
      setLoading(false);
    }
    getData();
  }, []);

  // Query

  useEffect(() => {
    filterQuestion();
  }, [calculatorFilter, answerTypeFilter, chartFilter, lengthFilter]);

  const filterQuestion = async () => {
    let query = db.collection('problems');

    if (calculatorFilter.length > 0) {
      query = query.where(calculatorFilter[0], '==', calculatorFilter[1]);
    }

    if (answerTypeFilter.length > 0) {
      query = query.where(answerTypeFilter[0], '==', answerTypeFilter[1]);
    }

    if (chartFilter.length > 0) {
      query = query.where(chartFilter[0], '==', chartFilter[1]);
    }

    if (lengthFilter.length > 0) {
      query = query.where(lengthFilter[0], '==', lengthFilter[1]);
    }

    const snapshot = await query.get();

    if (snapshot.empty) {
      console.log('No matching documents.');
      return;
    }

    const data = [];
    snapshot.forEach((doc) => {
      data.push(doc.data());
    });

    setQuestions(data);
  };

  if (loading) return <div>Loading...</div>;

  return (
    <div>
      <div>
        <h1>There is {questions.length} Question</h1>
        <h1>More Filters</h1>

        <div>
          <h2>Calculator</h2>

          <button
            onClick={() => {
              setCalculatorFilter('');
            }}
          >
            All
          </button>

          <button
            onClick={() => {
              setCalculatorFilter(['calculator', 'Calculator']);
            }}
          >
            Calculator
          </button>

          <button
            onClick={() => {
              setCalculatorFilter(['calculator', 'No Calculator']);
            }}
          >
            No Calculator
          </button>
        </div>

        <div>
          <h2>Answer Type</h2>
          <button
            onClick={() => {
              setAnswerTypeFilter('');
            }}
          >
            All
          </button>
          <button
            onClick={() => {
              setAnswerTypeFilter(['answer_type', 'Multiple Choice']);
            }}
          >
            Multiple Choice
          </button>
          <button
            onClick={() => {
              setAnswerTypeFilter(['answer_type', 'Grid-In']);
            }}
          >
            Grid In
          </button>
        </div>

        <div>
          <h2>Chart Type</h2>
          <button       onClick={() => {
              setChartFilter('');
            }}>All</button>
          <button
            onClick={() => {
              setChartFilter(['chart', 'Chart']);
            }}
          >
            Contains chart
          </button>
          <button
            onClick={() => {
              setChartFilter(['chart', 'No Chart']);
            }}
          >
            No chart
          </button>
        </div>

        <div>
          <h2>Problem Length</h2>
          <button>All</button>
          <button
            onClick={() => {
              setLengthFilter(['length', 'Short']);
            }}
          >
            Short
          </button>
          <button
            onClick={() => {
              setLengthFilter(['length', 'Long']);
            }}
          >
            Long
          </button>
        </div>
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
