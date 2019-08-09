import React from 'react'
import { connect } from 'react-redux'

function Flash({ messages }) {

  const style = {
    border: '1px solid maroon',
    margin: '0.5em',
    padding: '0.5em',
    color: 'maroon',
  }

  return <div>
    {messages.map(message => <div key={message.id} style={style}>{message.text}</div>)}
  </div>
}

const mapStateToProps = currentState => ({
  messages: currentState.flash
})

// function connect(mapStateFunc, mapDispatchFunc) {
//     const state = this.getState()
//     const dispatch = this.getDispatch()
//     mapStateFunc(state)
//     mapDispatchFunc(dispatch)
// }

export default connect(mapStateToProps)(Flash)
// the first param of connect returns the props of the currentState
// the second param of connect stores dispatch function