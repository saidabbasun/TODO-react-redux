import React from "react";
 import { removeTodo } from "../actions/todos";
import { useDispatch } from "react-redux";

export default function TodoItem(props) {
   const dispatch = useDispatch()
  const handleMarkTodo=()=>{

  }

  return (
    <div>
      
      <li className="list-group-item d-flex justify-content-between align-items-center ">
        <div>
          <input
          onChange={hand}
            className="form-check-input me-2"
            type="checkbox"
            value=""
            id="flexCheckDefault"
          />
          <label className="form-check-label" htmlFor="flexCheckDefault">
            {props.title}
          </label>
        </div>
        <button className="btn btn-danger" onClick={()=>dispatch(removeTodo(props.id))}>Remove</button>
      </li>
    </div>
  );
}
