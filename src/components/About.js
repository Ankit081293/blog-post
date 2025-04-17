import React from 'react'
import AddToDo from './AddToDo'
import Todo from './Todo'

function About() {
  
  return (   
    <div className="container p-4">
      <h2>React Redux Feature</h2>
      <h2>React Redux Feature 2</h2>
      <h2 className="mb-4">Todo App</h2>
      <div>
          <AddToDo/>
          <br/>
          <Todo/>
      </div>
    </div>
  )
}

export default About;
