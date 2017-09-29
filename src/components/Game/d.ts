import {Commands} from "domains/Command";
import {IPlayer} from "domains/Player.d";

export interface StateToProps {
  currentCommand: Commands;
}

export interface DispatchToProps {
  setCurrentStrokes: (commands: Commands[], playerId: IPlayer["id"]) => void;
}

export interface Props extends React.Component {
  command?: any;
  setCurrentStrokes?: (commands: Commands[], playerId: IPlayer["id"]) => void;
}