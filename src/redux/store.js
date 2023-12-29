import {configureStore} from "@reduxjs/toolkit";
import todoReducer from "./todoSlice";
const store = configureStore({
    reducer:{
        myTodo: todoReducer
    }
});
export default store;