import React from 'react'
import { useSelector } from 'react-redux';

export default function TodosFooter() {
const todoItems=useSelector(state=>state.todos)
  const handleSava=()=>{
localStorage.setItem('todos',JSON.stringify(todoItems))
  }
  return (
    <div className=" card-footer">
    <button className="btn btn-primary " onClick={handleSava}>Save</button>
  </div>
  )
}
