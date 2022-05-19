

export const addTodo=(todoItem)=>{
   
    return{
        type:'ADD_TODO',
        payload:{
            ...todoItem
        }
    }
}

