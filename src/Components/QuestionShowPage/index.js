import React from 'react';

import QuestionDetails from '../QuestionDetails';
import AnswerDetails from '../AnswerDetails';

// To structure our application, we will create components
// that simulate the pages of web application. These are meant
// to replace the various pages rendered by the routes of our rails server.
export default function QuestionShowPage() {
  return (
    <main>
      <QuestionDetails 
        title="What's your favourite color?"
        body="red, green, blue, yellow, ect."
        viewCount={24}
        createdAt={new Date(2017, 12, 4)}
        author={{full_name: 'Trolly Trollgarden'}}
      />
      <AnswerDetails
        body='Red.'
        author={{full_name: 'Steve Wozniak'}}
        createdAt={new Date(2019, 4, 12)}
      />
    </main>
  );
}