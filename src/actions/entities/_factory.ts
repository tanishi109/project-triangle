import {createAction} from "redux-actions";

export const getEntityActions = (suffix: string) => {
  return {
    upsert: createAction(`ENTITY/UPSERT/${suffix}`),
  };
};
