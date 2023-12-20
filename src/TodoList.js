import React from 'react'


function TodoList(props) {
  return (
    <ul class="custom-list">
      {props.children}
    </ul>
  )
}

export { TodoList };