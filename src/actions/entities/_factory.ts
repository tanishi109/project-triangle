import {createAction} from "redux-actions";
import {ActionFunction1} from "redux-actions";

// type
import {IPlayer} from "domains/Player.d";

export const getEntityActions = (suffix: string) => {
  return {
    upsert: createAction<{[id: number]: IPlayer}>(`ENTITY/UPSERT/${suffix}`),
  };
};
