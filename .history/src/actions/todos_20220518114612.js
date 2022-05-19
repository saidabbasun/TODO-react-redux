import { todoTypes } from "../constants/todos"

export const addTodo=(todoItem)=>{
   
    return{
        type:'ADD_TODO',
        payload:{
            ...todoItem
        }
    }
}

