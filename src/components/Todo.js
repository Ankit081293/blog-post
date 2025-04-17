import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { removeTodo, updateBtnState, updateToDoId, updatetodoText } from '../features/todoSlice'

function Todo() {
    const dispatch = useDispatch();
    const todos = useSelector(state => state.todos);
    const todoId = useSelector(state => state.toDoIdtoUpdate);
    console.log(todos, "valll");
    const removeTodoFromList = (id)=>{
        console.log(id, "this id's item will deleted");
        dispatch(removeTodo(id));
        console.log(todos,"latest todoossss");
    }
    const updateTodoFromList = (id, message) => {
        dispatch(updateBtnState("Update Todo"));
        dispatch(updatetodoText(message));
        dispatch(updateToDoId(id));
    }
  return (
    <div>
      <table class="table">
  <thead>
    <tr>
      <th scope="col">TODO</th>
      <th scope="col">Actions</th>
    </tr>
  </thead>
  <tbody>
    {todos.map((todo) => {
       return <tr key={todo.id}>
      <td>{todo.text}</td>
      <td><button class="btn btn-primary" onClick={() => {updateTodoFromList(todo.id, todo.text)}}>Update</button> <button class="btn btn-danger" onClick={() => {removeTodoFromList(todo.id)}}>Delete</button></td>
    </tr>
    })}
    
  </tbody>
</table>
    </div>
  )
}

export default Todo
