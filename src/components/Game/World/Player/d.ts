import {Commands} from "domains/Command";
import {IPlayer} from "domains/Player.d";

export interface StateToProps {
  currentMove: string;
}

export interface DispatchToProps {
}

export interface Props extends React.Component {
  currentMove: string;
}
