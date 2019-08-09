// src/store/reducers/flash.js
// default state to [] if it has not been initialized
const questions = (state = [], action) => {
    switch (action.type) {
      case 'UPDATE_QUESTIONS':
        return action.questions;
      default:
        return state;
    }
  };
  
  export default questions;
  