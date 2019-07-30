import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import * as serviceWorker from './serviceWorker';

function HelloWorld(props) {
  const { name } = props;
  return (
    <div>Hello {name || "World"}!</div>
  )
}

// Attatches Our Root React Component to the DOM
// Render components inside of JSX as if they are tags
// Add data to props object like adding attributes to tags

ReactDOM.render(<HelloWorld name='Jon Snow' />, document.getElementById('root'));
// The above line is similar to:
// HelloWorld({name: "Jon Snow"})

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();