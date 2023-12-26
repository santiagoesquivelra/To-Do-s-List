import React from 'react'

function TodoCounter({ total, completed}) {
  return (
      total === completed ? 
      <h1> Congrats! You have completed all the 🥳 To'Do's 🥳</h1>
      :
      <h1>You have completed <span>{completed}</span> of <span>{total}</span> To'Do's.</h1>
  );
}

export { TodoCounter };