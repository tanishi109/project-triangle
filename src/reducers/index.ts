import {routerReducer} from "react-router-redux";
import {combineReducers} from "redux";

import command from "./command";
import player from "./entities/player";

const reducers = combineReducers({
  router: routerReducer,
  command,
  player,
});

export default reducers;
