import React from 'react'
import todoTypes  from "../constants/todos";
const initialState = [];
const todos = (state = initialState, action) => {
  switch (action.type) {
    case todoTypes:
      return [
        ...state, 
        action.payload
      ];
    default:
      return state;
  }
};

export default todos;
