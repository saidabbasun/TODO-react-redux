import {createStore}  from "redux";
import rootReducer from "./reducers";
import { composeWithDevTools } from "redux-devtools-extension";
import logger from "redux-logger";
import rootReducer  from "./reducers";
export const store = createStore(rootReducer,composeWithDevTools(log));

