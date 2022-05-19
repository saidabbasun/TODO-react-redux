import { todoTypes } from "../constants/todos"

export const addTodo=(todoItem)=>{
   
    return{
        type:to,
        payload:{
            ...todoItem
        }
    }
}

