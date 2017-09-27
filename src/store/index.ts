import {isDev} from "constants/config";
import createHistory from "history/createBrowserHistory";
import {routerMiddleware} from "react-router-redux";
import rootReducer from "reducers";
import {applyMiddleware, compose, createStore} from "redux";

export const history = createHistory();
const routeMiddleware = routerMiddleware(history);
const devTool = (() => {
  if (isDev && window.devToolsExtension) {
    return window.devToolsExtension();
  }

  return (f) => {
    return f;
  };
})();

const store = createStore(rootReducer, compose(
  applyMiddleware(routeMiddleware),
  devTool,
));

export default store;
