import { Question } from '../api';

export const showFlash = (text, id) => ({
  type: "SHOW_FLASH",
  text,
  id,
})

export const removeFlash = id => ({
  type: "REMOVE_FLASH",
  id,
})

export const updateQuestions = questions => ({
  type: "UPDATE_QUESTIONS",
  questions,
})

let messageId = 0
export function showFlashWithTimeout(text, id) {
  return function(dispatch) {
    const id = messageId++
    dispatch(showFlash(text, id))
    setTimeout(() => dispatch(removeFlash(id)), 3000)
  }
}

// thunk
export function getAllQuestions() {
  return function(dispatch) {
    Question.all().then(questions => {
      dispatch(updateQuestions(questions))
    })
  }
}