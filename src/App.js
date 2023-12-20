import React from "react";
import { TodoCounter } from "./TodoCounter";
import { TodoSearch } from "./TodoSearch";
import { TodoList } from "./TodoList";
import { TodoItem } from "./TodoItem";
/* import { CreateTodoButton } from "./CreateTodoButton"; */
import { HideTask } from "./HideTasks";
import './css/app.css'

const defaultTodos = [
  { text: 'Estudiar programación', completed: true },
  { text: 'Terminan los cursos', completed: true },
  { text: 'Ser prodev', completed: false },
  { text: 'El almuerzo', completed: false },
];

function App() {
  return (
    <>
      <section class="layout">
        {/* <div class="right">
          <div class="space">
            <CreateTodoButton />
          <br></br>
          </div>
          <div class="image">
            <img src="https://i.pinimg.com/originals/90/dd/16/90dd16a3041c5aa28ec114106000aefc.gif" alt="berserk"></img>
          </div>
        </div> */}
        <div class="left">
          <TodoCounter completed={16} total={28} />
          <TodoSearch />
          <TodoList>
            {defaultTodos.map(todo => (
              <TodoItem
                key={todo.text}
                text={todo.text} />
            ))}
          </TodoList>
          <div class="hide">
            <HideTask />
          </div>
        </div>
      </section>
    </>
  );
}


export default App;