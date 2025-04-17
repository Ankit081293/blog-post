import { createSlice, nanoid } from "@reduxjs/toolkit";

const initialState = {
    todos : [{id: 1, text: "Hello world"}], 
    submitBtnState: "Add Todo",
    toDoIdtoUpdate:0,
    todoText:""
}

export const todoSlice = createSlice({
    name: 'todo',
    initialState,
    reducers: {
        addTodo: (state, action)=>{
            const lastId = state.todos.length > 0 ? state.todos[state.todos.length - 1].id : 0;

            const todo = {
                id: lastId + 1,
                text: action.payload
            }
            state.todos.push(todo);
        },
        removeTodo:(state, action)=>{
            state.todos = state.todos.filter((todo)=>{
                return todo.id !== action.payload
            })
        },
        updateBtnState:(state, action)=>{
            state.submitBtnState = action.payload
        },
        updateToDoId:(state, action)=>{
            state.toDoIdtoUpdate = action.payload
        },
        updatetodoText:(state, action)=>{
            state.todoText = action.payload
        },
        updateTodoRow:(state, action)=>{
            const text = state.todoText;
            state.todos = state.todos.map(todo =>
                todo.id === action.payload ? { ...todo, text } : todo
            );
        }
    }
})

export const{addTodo, removeTodo, updateBtnState, updateToDoId, updatetodoText,updateTodoRow} = todoSlice.actions

export default todoSlice.reducer