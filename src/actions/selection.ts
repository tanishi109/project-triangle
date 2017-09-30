import {createAction} from "redux-actions";

const getSelectionActions = (suffix) => {
  return {
    select: createAction<number>(`SELECT/${suffix}`),
  };
};

export const playerSelectionActions = getSelectionActions("PLAYER");
