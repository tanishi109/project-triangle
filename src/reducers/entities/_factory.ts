import {handleActions, ActionFunction1} from "redux-actions";

export const getEntityReducer = (actions: {[key: string]: ActionFunction1<{}, {}>}, Entity) => {
  return handleActions({
    [actions.upsert.toString()]: (state, action) => {
      const entities = (() => {
        const map = action.payload;

        Object.keys(map).forEach((k) => {
          const entity = state[k];
          const upserted = entity instanceof Entity ? entity.update(map[k]) : new Entity(map[k]);

          map[k] = upserted;
        });

        return map;
      })();

      return Object.assign({}, state, entities);
    },
  }, {});
};
