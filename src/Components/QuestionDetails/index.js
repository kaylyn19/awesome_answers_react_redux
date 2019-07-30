import React from 'react';
import {DifferenceInDays} from '../../helpers';

export default function QuestionDetails(props) {
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