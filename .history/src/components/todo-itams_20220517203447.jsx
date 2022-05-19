import React from 'react'
import TodoItem from './todos-itam'
import { useSelector } from "react-redux";


export default function TodoItems() {
    const todos=useSelector(state=>state.todos);
    
  return (
    <ul className="list-group list-group-flush">
             {

                  todos.length>0? todos.map(item =>(
                    <TodoItem/>
                 )):(
                     
                 )
               }    
             
    </ul>
  )
}
