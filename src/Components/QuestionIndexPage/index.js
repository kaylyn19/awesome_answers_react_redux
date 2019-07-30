import React from 'react';

import { default as questions } from './questionsData';

export default function QuestionIndexPage() {
  return(
    <main className='page'>
      <h2>Questions Index</h2>
      <ul>
        {questions.map((question, key) => {
          const { id, title } = question;
          return(
            <li 
              key={id}
              style={{listStyle: 'none'}}
            >
              <a href='/#'>
                {title}
              </a>
            </li>
          )
        })}
      </ul>
    </main>
  );
}