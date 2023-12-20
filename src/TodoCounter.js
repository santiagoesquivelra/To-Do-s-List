import React from 'react'

function TodoCounter({ total, completed}) {
  return (
    <>
      <div class="large-text"><h1>Your tasks</h1></div>
      <h2>Haz completado {completed} de {total} TODOS</h2>
    </>
  );
}

export { TodoCounter };