import React from "react";

function CreateTodoButton() {
    return (
        <>
            {/* <h1>Create a new task</h1>
            <h3>Task Name</h3>
            <div class="webflow-style-input">
                <input class="search-input" type="email" placeholder="Deploy the projects..."></input>
                <button type="submit"></button>
            </div>
            <br></br> */}
            <button className="button-input" onClick={() => console.log('Le diste click al botón')}>Create Task</button>
        </>
    );
}

export { CreateTodoButton }