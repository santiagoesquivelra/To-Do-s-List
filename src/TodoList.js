import React from 'react'

function TodoList(props) {
  return (
    <ul className="custom-list">
      {props.children}
    </ul>
  )
}

export { TodoList };