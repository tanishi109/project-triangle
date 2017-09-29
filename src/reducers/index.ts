import {routerReducer} from "react-router-redux";
import {combineReducers} from "redux";

import command from "./command";

const reducers = combineReducers({
  router: routerReducer,
  command,
});

export default reducers;
