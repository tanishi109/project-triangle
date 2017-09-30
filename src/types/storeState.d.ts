import {IPlayer} from "domains/Player.d";

export interface StoreState {
  router: any;
  player: {
    [id: string]: IPlayer;
  };
  selections: {
    players: number[];
  };
}
