import { TODO } from "../constants/todos"

export const addTodo=(todoItem)=>{
   
    return{
        type:TODO.ADD_TODO,
        payload:{
            ...todoItem
        }
    }
}

