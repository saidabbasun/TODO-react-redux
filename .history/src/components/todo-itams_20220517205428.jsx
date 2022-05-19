import React from 'react'
import TodoItem from './todos-itam';
import { useSelector } from "react-redux";

 const TodoItems =() =>{
    const todos=useSelector(state=> state.todos);
    
  return (
    <ul className="list-group list-group-flush">
             { 
             todos.length > 0 ? todos.map(item =>(
                    <TodoItem/>
                 )):(
                     <h4>Todos not created yet</h4>
                 )
               }    
             
    </ul>
  )
}
export default TodoItems;