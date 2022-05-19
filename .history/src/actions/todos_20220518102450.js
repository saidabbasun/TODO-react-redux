

export const addTodo=(todoItem)=>{
    console.log(todoItem);
    return{
        type:'ADD_TODO',
        payload:{
            ...todoItem
        }
    }
}

