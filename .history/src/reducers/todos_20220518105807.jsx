const initialState = [];

const todos = (state = initialState, action) => {
  switch (action.type) {
    case "ADD_TODO":
      return {
        ...state,
        action.payload
      };
    default:
      return state;
  }
};

export default todos;
