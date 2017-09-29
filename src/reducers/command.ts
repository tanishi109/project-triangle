import actions from "actions/command";
import {combineReducers} from "redux";
import {handleActions, ActionFunction0} from "redux-actions";

const command = handleActions({
  [actions.setCommand.toString()]: (state, action) => {
    const {keyCode} = action.payload;

    return [
      ...state,
      keyCode,
    ];
  },
}, []);

export default combineReducers({
  command,
});
