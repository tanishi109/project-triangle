import {handleActions, ActionFunction0} from "redux-actions";

export const getEntityReducer = (actions: {[key: string]: ActionFunction0<{}>}) => {
  return handleActions({
    [actions.upsert.toString()]: (state, action) => {
      const entities = action.payload;

      return Object.assign({}, state, entities);
    },
  }, {});
};
