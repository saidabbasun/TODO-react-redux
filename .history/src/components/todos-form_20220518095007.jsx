import React from "react";
import { useRef } from "react";
export default function TodosForm() {

  const inputRef
  return (
    <div className="card-body">
      <form className="mb-3 d-flex justify-content-between align-items-center">
     
       
          <input
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
