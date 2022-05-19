import React from "react";
 

export default function TodoItem(id,text) {
   
  return (
    <div>
      
      <li className="list-group-item d-flex justify-content-between align-items-center ">
        <div>
          <input
            className="form-check-input me-2"
            type="checkbox"
            value=""
            id="flexCheckDefault"
          />
          <label className="form-check-label" htmlFor="flexCheckDefault">
            {text}
          </label>
        </div>
        <button className="btn btn-danger">Remove</button>
      </li>
    </div>
  );
}
