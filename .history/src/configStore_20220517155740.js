import {createStore}  from "redux";
import rootReducer from "./reducers";
import { composeWithDevTools } from "redux-devtools-extension";
import 
export const store = createStore(rootReducer);

