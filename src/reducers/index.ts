import {routerReducer} from "react-router-redux";
import {combineReducers} from "redux";

import views from "./views";

const reducers = combineReducers({
  router: routerReducer,
  views,
});

export default reducers;
