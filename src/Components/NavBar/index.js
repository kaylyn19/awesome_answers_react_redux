import React from 'react';
import { Link } from 'react-router-dom';
import Flash from '../Flash';

export default function NavBar() {
  return (
    <>
      <div>
        <Link to='/'>HomePage</Link>
        |
        <Link to='/questions'>Index</Link>
        |
        <Link to='/sign_up'>Sign Up</Link>
        |
        <Link to='/questions/new'>New Question</Link>
      </div>
      <Flash />
    </>
  );
}
