import {  } from "../constants/todos"

export const addTodo=(todoItem)=>{
   
    return{
        type:todoTypes.ADD_TODO,
        payload:{
            ...todoItem
        }
    }
}

