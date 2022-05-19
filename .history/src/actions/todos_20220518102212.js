

const addTodo=()=>{
    console.log(todoItem);
    return{
        type:ADD_TODO,
        payload:{
            ...item
        }
    }
}

