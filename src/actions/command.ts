import {createAction} from "redux-actions";

export const setCommand = createAction("COMMAND/SET_CURRENT_KEY",
(keyCode: number) => {
  return {keyCode};
});

export default {
  setCommand,
};