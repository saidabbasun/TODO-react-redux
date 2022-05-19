import React from "react";
import { useRef } from "react";
import


export default function TodosForm() {
  const inputRef = useRef();
  const handleSubmit = (e) => {
    const 
  //  e.perventDefault();
alert(inputRef.current.value)  
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
