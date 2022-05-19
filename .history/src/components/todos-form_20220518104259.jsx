import React from "react";
import { useRef } from "react";
import { useDispatch } from "react-redux";
import { addTodo } from "../actions/todos";
import { v4 as uuidv4 } from 'uuid';

const TodosForm = () =>{
  const inputRef = useRef();
  const  dispatch=useDispatch()
  const handleSubmit = (e) => {
   
    e.perventDefault();
  dispatch(addTodo({
    title:inputRef.current.value,
    id:uuidv4(),
    isDone:false
  }))
// alert(inputRef.current.value)  
  };
  return (
    <div className="card-body">
      <form
          onSubmit={ handleSubmit}
        className="mb-3 d-flex justify-content-between align-items-center"
      >
        <input
      
          ref={inputRef}
          type="text"
          className="form-control "
          id="exampleFormControlInput1"
          placeholder="e.g Buy eggs"
        />

        <button className=" btn btn-success"> Add</button>
      </form>
    </div>
  );
}
export default TodosForm
