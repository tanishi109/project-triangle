import {
  setScene,
} from "actions/views/world";
import {combineReducers} from "redux";
import {handleActions} from "redux-actions";

const scene = handleActions({
  [setScene.toString()]: (state, action) => {
    return action.payload;
  },
}, null);

export default combineReducers({
  scene,
});
