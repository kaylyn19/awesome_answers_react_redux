import React from 'react';
import { connect } from 'react-redux'
import { showFlashWithTimeout, removeFlash } from '../../store/action'
import { Session } from '../../api';

function SignInPage({ addNewMessage, removeMessageId }) {
  let messageId = 0

  function handleSubmit(event) {
    event.preventDefault();
    const { currentTarget } = event;
    const data = new FormData(currentTarget);
    Session.create({
      email: data.get('email'),
      password: data.get('password'),
    })
    .then(res => {
      if (res.status === 200) {
        const newId = new Number(messageId)
        addNewMessage('Success Login', newId)
        setTimeout(() => removeMessageId(newId), 1000)
        messageId++
      } else {
        const newId = new Number(messageId)
        addNewMessage('Failed Login', newId)
        setTimeout(() => removeMessageId(newId), 1000)
        messageId++
      }
    });
  }

  return(
    <main className='page'>
      <h1>Sign In</h1>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor='email'>Email</label>
          <input type='email' name='email'></input>
        </div>
        <div>
          <label htmlFor='password'>Password</label>
          <input type='password' name='password'></input>
        </div>
        <input type='submit' value='Sign In'/>
      </form>
    </main>
  );
}

const mapDispatchToProps = dispatch => ({
  addNewMessage: (text, id) => dispatch(showFlashWithTimeout(text, id)),
  removeMessageId: id => dispatch(removeFlash(id)),
})

export default connect(undefined, mapDispatchToProps)(SignInPage)