import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircleCheck, faTrash } from '@fortawesome/free-solid-svg-icons';
import './css/TodoItem.css';

function TodoItem(props) {
  const completedClass = props.completed ? "TodoItem-p--complete" : "";
  const iconCheckClass = props.completed ? "Icon-check--active" : "";

  return (
    <li className="TodoItem">
      <p className={`TodoItem-p ${completedClass}`}>
        <span className={`Icon-check ${iconCheckClass}`} onClick={props.onComplete}>
          <FontAwesomeIcon icon={faCircleCheck} />
        </span>
        {props.text}
        <span className="trash" onClick={props.onDelete}>
          <span>
            <FontAwesomeIcon icon={faTrash} />
          </span>
        </span>
      </p>
    </li>
  );
}

export { TodoItem };
