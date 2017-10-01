import {Commands} from "domains/Command";
import {IPlayer} from "domains/Player.d";

export interface StateToProps {
  currentCommand: Commands | "";
}

export interface DispatchToProps {
  initPlayer: (id: number) => void;
  updatePlayer: (params: IPlayer, playerId: IPlayer["id"]) => void;
}

export interface Props extends React.Component {
  currentCommand: Commands;

  initPlayer: (id: number) => void;
  updatePlayer: (params: IPlayer, playerId: IPlayer["id"]) => void;
}
