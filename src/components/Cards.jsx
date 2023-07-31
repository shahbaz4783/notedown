import React from 'react';

export const Cards = (props) => {
  return (
    <div className='note-card'>
        <h1>{props.title}</h1>
        <p>{props.body}</p>
    </div>
  )
}
