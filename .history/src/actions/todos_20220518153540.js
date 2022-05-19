import { TODO } from "../constants/todos"

export const addTodo=(todoItem)=>{
   
    return{
        type:TODO.ADD_TODO,
        payload:{
            ...todoItem
        }
    }
}

export const removeTodo=(id)=>{
   console.log(id)
    return{
        type:TODO.REMOVE_TODO,
        payload:{
            id,
        }
    }
}

export const removeTodo=(todoItem)=>{
    console.log(id)
     return{
         type:TODO.REMOVE_TODO,
         payload:{
             id,
         }
     }
 }
