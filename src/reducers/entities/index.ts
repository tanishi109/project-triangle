import {combineReducers} from "redux";
import playerActions from "./player";

export default combineReducers({
  players: playerActions,
});
