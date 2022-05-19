import React from "react";

export default function TodosForm() {
  return (
    <div className="card-body">
      <form className="mb-3 d-flex justify-content-between align-items-center">
        <div>
       
          <input
            type="text"
            className="form-control"
            id="exampleFormControlInput1"
            placeholder="e.g Buy eggs"
          />
        </div>
        <button className=" btn btn-success"> Add</button>
      </form>
    </div>
  );
}
