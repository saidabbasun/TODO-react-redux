import { act } from "react-dom/test-utils";
import {TODO}  from "../constants/todos";
const initialState = [];
const todos = (state = initialState, action) => {
  switch (action.type) {
    case TODO.ADD_TODO:
      return [
        ...state, 
        action.payload
      ];
      case TODO.REMOVE_TODO:
        return state.filter(item=> item.id !== action.payload.id)
        case TODO.MARK_TODO_DONE:
          return state.map(item=>{
           if(item.id ===action.payload.id){
              return {
                ...item,
                isDone: act
              } 
           }
          })
          else {
            return item
          }
    default:
      return state;
  }
};

export default todos;
