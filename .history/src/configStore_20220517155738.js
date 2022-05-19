import {createStore}  from "redux";
import rootReducer from "./reducers";
import { composeWithDevTools } from "redux-devtools-extension";
impo
export const store = createStore(rootReducer);

