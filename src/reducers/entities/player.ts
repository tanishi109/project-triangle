import defaultActions, {setToken} from "actions/entities/player";
import {getEntityReducer} from "./_factory";
import {combineReducers} from "redux";
import {handleActions} from "redux-actions";

export const myToken = handleActions({
  [setToken.toString()]: (state, action) => {
    return action.payload;
  },
}, null);

export default combineReducers({
  map: getEntityReducer(defaultActions),
  myToken,
});
