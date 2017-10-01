import {createSelector} from "reselect";
import Player from "domains/Player";

// types
import {StoreState} from "types/storeState.d";

export const selectMap = createSelector(
  (state) => state,
  (state: StoreState) => {
    return state.player;
  },
);

export const getFirstId = createSelector(
  (state) => state,
  (state: StoreState) => {
    return state.selections.players[0];
  },
);

export const selectById = createSelector(
  selectMap,
  (map) => {
    return (id: number) => {
      return map[id];
    };
  },
);

export const selectCurrentCommand = createSelector(
  selectMap,
  getFirstId,
  (map, id) => {
    const player = map[id];

    return player ? player.getCurrentCommands() : "";
  },
);

export const selectCurrentMove = createSelector(
  selectMap,
  getFirstId,
  (map, id) => {
    const player = map[id];

    return player ? player.getCurrentMove() : "";
  },
);
