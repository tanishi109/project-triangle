import {
  playerSelectionActions,
} from "actions/selection";
import {combineReducers} from "redux";
import {handleActions} from "redux-actions";

const players = handleActions({
  [playerSelectionActions.select.toString()]: (state, action) => {
    return [action.payload];
  },
}, []);

export default combineReducers({
  players,
});
