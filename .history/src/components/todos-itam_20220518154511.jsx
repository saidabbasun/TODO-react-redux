import React from "react";
 import { removeTodo ,markTodoDan} from "../actions/todos";
import { useDispatch } from "react-redux";

export default function TodoItem({id,title}) {
   const dispatch = useDispatch()
  const handleMarkTodo=(e)=>{
  markTodoDan({
    id,
    title,
    isDone: e.target.checked
  })
  }

  return (
    <div>
      
      <li className="list-group-item d-flex justify-content-between align-items-center ">
        <div>
          <input
             onChange={handleMarkTodo}
            className="form-check-input me-2"
            type="checkbox"
            value=""
            id="flexCheckDefault"
          />
          <label className="form-check-label" htmlFor="flexCheckDefault">
            {title}
          </label>
        </div>
        <button className="btn btn-danger" onClick={()=>dispatch(removeTodo(id))}>Remove</button>
      </li>
    </div>
  );
}
