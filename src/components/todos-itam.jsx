import React from "react";
 import { removeTodo ,markTodoDan} from "../actions/todos";
import { useDispatch } from "react-redux";

export default function TodoItem({id,title,isDone}) {
   const dispatch = useDispatch()
  const handleMarkTodo=(e)=>{
 dispatch(markTodoDan({
    id,
    title,
    isDone: e.target.checked
  }))
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
          <label className={`form-check-label ${isDone ? 'text-decoration-line-through' : ''}`} htmlFor="flexCheckDefault">
            {title}
          </label>
        </div>
        <button className="btn btn-danger" onClick={()=>dispatch(removeTodo(id))}>Remove</button>
      </li>
    </div>
  );
}
