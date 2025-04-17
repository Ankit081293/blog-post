import React, { useState } from 'react'
import { useSelector, useDispatch } from 'react-redux';
import {addTodo,updatetodoText,updateTodoRow, updateToDoId, updateBtnState} from '../features/todoSlice'

function AddToDo() {
    const [todo, setTodo] = useState(useSelector(state => state.todoText));
    const submitBtnTxt = useSelector(state => state.submitBtnState);
    const todoId = useSelector(state => state.toDoIdtoUpdate);
    const todoText = useSelector(state => state.todoText);
    const [btnText, setBtnText] = useState("Add Todo");
    const dispatch = useDispatch();
    const handleChange = (e) => {
        //setTodo(e.target.value);
        dispatch(updatetodoText(e.target.value));
    }
    const handleSubmit = (e)=>{
        e.preventDefault();
        if(todoId > 0){
          dispatch(updateTodoRow(todoId));
        }else{
          dispatch(addTodo(todoText));
        }
        dispatch(updateBtnState("Add Todo"));
        dispatch(updatetodoText(""));
        dispatch(updateToDoId(0));
    }
  return (
    <div>
<form class="row g-3" onSubmit={(event) => {handleSubmit(event)}}>
  <div class="col-auto">
    <label for="staticEmail2" class="visually-hidden">Email</label>
    <input type="text" readonly className="form-control-plaintext border p-2" onChange={(event) => {handleChange(event)}} id="staticEmail2" value={todoText}/>
  </div>
  <div class="col-auto">
    <button type="submit" class="btn btn-primary mb-3">{submitBtnTxt}</button>
  </div>
</form>
    </div> 
  )
}

export default AddToDo
