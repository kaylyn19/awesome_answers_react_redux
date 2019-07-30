import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import * as serviceWorker from './serviceWorker';

// In React application, we create a component that acts as the
// "root" or the entry point to all of our other components.
// This is the one that should be rendered `ReactDOM.render()`
function App() {
  return (
    <div>
      <QuestionShowPage></QuestionShowPage>
    </div>
  );
}

// To structure our application, we will create components
// that simulate the pages of web application. These are meant
// to replace the various pages rendered by the routes of our rails server.
function QuestionShowPage() {
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

// A React component is a function that returns a React element.
// React elements are created with the `React.createElement()` method
// or JSX tags.

 // Your React component's names must be in PascalCase. Those whose
// names do not begin with an upper case letter will interpreted
// as plain HTML tag.
function AnswerDetails(props) {
  const { body, author, createdAt } = props;
  return (
    <div>
      <p>
        {body} <br />
        By { author.full_name } <br />
        <small>Answered {DifferenceInDays(null, createdAt)} days ago</small>
      </p>
    </div>
  );
}

function QuestionDetails(props) {
  const { title, body, viewCount, createdAt, author } = props;
  return (
    <div>
      <h2>{title}?</h2>
      <p>
        {body} <br />
        By {author.full_name}
      </p>
      <p>
        <small>Seen {viewCount} time(s)</small>
        –
        <small> Created  {DifferenceInDays(new Date().toLocaleDateString(), createdAt)} days ago</small>
      </p>
    </div>
  );
}

// Not accurate but close enough difference date function.
function DifferenceInDays(firstDateString, secondDateString) {
  firstDateString = firstDateString || new Date();
  const firstDate = Date.parse(firstDateString);
  const secondDate = Date.parse(secondDateString)
  return Math.round((secondDate-firstDate)/(1000*60*60*24));
}


ReactDOM.render(<App/>, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();