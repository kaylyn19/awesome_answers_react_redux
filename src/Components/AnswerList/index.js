import React from 'react';
import AnswerDetails from '../AnswerDetails';

export default function AnswerList(props) {
  let { answers, onAnswerDeleteClick } = props;
  if (!answers) {
    answers = [];
  }
  return(
    <ul
      style={{
        listStyle: 'none',
        paddingLeft: 0,
      }}
    >
      {answers.map((answer) => {
        return(
          <li key={answer.id}>
            <AnswerDetails
              body={answer.body}
              author={answer.author}
              createdAt={answer.createdAt}
            />
            <button onClick={() => { onAnswerDeleteClick(answer.id) }}>
              Delete
            </button>
          </li>
        )
      })}
    </ul>
  )
}