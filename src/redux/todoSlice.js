import {createSlice} from "@reduxjs/toolkit";
const localTodos = localStorage.getItem('todos');
const initialState = {
    isAddForm:true,
    editVal:""
}
try{
    initialState.todo = localTodos ? JSON.parse(localTodos):[];
}catch(err){
    initialState.todo = [];
}
const todoslice = createSlice({
    name:"my-todo",
    initialState,
    reducers:{
        addTodo: (state,action) => {
            state.todo.push(action.payload);
            localStorage.setItem('todos',JSON.stringify(state.todo));
        },
        updtTodo: (state,action) => {
            state.todo = state.todo.map((val) => val == state.editVal ? action.payload:val);
            state.isAddForm = true;
            state.editVal = "";
            localStorage.setItem('todos',JSON.stringify(state.todo));
        },
        delTodo: (state,action) => {
            state.todo = state.todo.filter((val) => val != action.payload);
            localStorage.setItem('todos',JSON.stringify(state.todo));
        },
        toggleForm: (state,action) => {
            state.isAddForm = action.payload.isAddForm;
            state.editVal = action.payload.val;
        }
    }
})
export const {addTodo,updtTodo,delTodo,toggleForm} = todoslice.actions;
export default todoslice.reducer;