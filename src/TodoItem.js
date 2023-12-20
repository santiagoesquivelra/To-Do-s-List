import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircleCheck } from '@fortawesome/free-solid-svg-icons';

function TodoItem(props) {
  return (
    <li>
      <FontAwesomeIcon icon={faCircleCheck} style={{color: "#5e0ea0",}} /> {props.text}
    </li>
  );
}

export { TodoItem };  