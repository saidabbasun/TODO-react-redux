import React from 'react'
import { useSelector } from 'react-redux'
export default function TodosFooter() {
const todoItems=useSelector(state=>state.items)
  const handleSava=()=>{

  }
  return (
    <div className=" card-footer">
    <button className="btn btn-primary " onClick={handleSave}>Save</button>
  </div>
  )
}
