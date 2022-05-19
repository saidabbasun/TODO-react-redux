const initialState = [];

const todos = (state = initialState, action) => {
  switch (action.type) {
    case "ADD_TODO":
      return {
        ...state,
        action.pay
      };
    default:
      return state;
  }
};

export default todos;
