import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import * as serviceWorker from './serviceWorker';

function QuestionDetails() {
  return (
    <div>
      <h2>What is your favourite color?</h2>
      <p>
        Red, green, blue, magenta, etc. <br />
        By Bridge Troll
      </p>
      <p>
        <small>Seen 10 time(s)</small> – <small>Created 10 days ago</small>
      </p>
    </div>
  );
}

ReactDOM.render(<QuestionDetails/>, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();