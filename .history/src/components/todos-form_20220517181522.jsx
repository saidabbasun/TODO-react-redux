import React from 'react'

export default function todosForm() {
  return (
    <form className="mb-3 d-flex justify-content-between align-items-center">
    <div>
      
      <label
        htmlFor="exampleFormControlInput1"
        className="form-label"
      >
        Email address
      </label>
      <input
        type="text"
        className="form-control"
        id="exampleFormControlInput1"
        placeholder="e.g Buy eggs"
      />
    </div>
    <button className=" btn btn-success"> Add</button>
  </form>
  )
}
