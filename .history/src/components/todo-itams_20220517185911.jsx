import React from 'react'
import TodoItem from './todos-itam'

export default function TodoItems() {
    const todos=useSelector(state=>state.todos);
    console.log(todos);
  return (
    <ul className="list-group list-group-flush">
               <TodoItem/> 
    </ul>
  )
}
