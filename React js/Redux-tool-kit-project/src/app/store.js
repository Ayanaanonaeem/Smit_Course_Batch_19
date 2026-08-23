// 1 step configure store lekr ana hai 

import { configureStore } from "@reduxjs/toolkit";
import  todoReducer  from "../features/todo/todoSlice";

export const store = configureStore({
    reducer:todoReducer
})