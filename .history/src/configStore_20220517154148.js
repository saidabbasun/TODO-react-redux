import {createStore}  from "redux";
import rootReducer from "./reducers";

const storen= createStore(rootReducer);

export default store;