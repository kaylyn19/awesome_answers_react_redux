// src/store/reducers/index.js

import { combineReducers } from 'redux'
import flash from './flash'
import questions from './questions'

export default combineReducers({
  flash,
  questions,
})
