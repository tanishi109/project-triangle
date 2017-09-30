import {routerReducer} from "react-router-redux";
import {combineReducers} from "redux";

import command from "./command";
import player from "./entities/player";
import selection from "./selection";

const reducers = combineReducers({
  router: routerReducer,
  command,
  player,
  selections: selection,
});

export default reducers;
