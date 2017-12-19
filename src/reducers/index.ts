import {routerReducer} from "react-router-redux";
import {combineReducers} from "redux";

import views from "./views";
import entities from "./entities";

const reducers = combineReducers({
  router: routerReducer,
  views,
  entities,
});

export default reducers;
