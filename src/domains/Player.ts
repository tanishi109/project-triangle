import {IPlayer} from "./Player.d";
import {Commands} from "./Command";
import {isEqual} from "lodash";

export default class Player implements IPlayer {
  public currentStrokes = [];
  public commandsStream = [];

  constructor(params) {
    this.update(params);
  }

  public getCurrentCommands() {
    if (
      this.currentStrokes.includes(Commands.Left) &&
      this.currentStrokes.includes(Commands.Down)
    ) {
      return Commands.LeftDown;
    }
    if (
      this.currentStrokes.includes(Commands.Right) &&
      this.currentStrokes.includes(Commands.Down)
    ) {
      return Commands.RightDown;
    }
    if (
      this.currentStrokes.includes(Commands.Left) &&
      this.currentStrokes.includes(Commands.Up)
    ) {
      return Commands.LeftUp;
    }
    if (
      this.currentStrokes.includes(Commands.Right) &&
      this.currentStrokes.includes(Commands.Up)
    ) {
      return Commands.RightUp;
    }

    return this.currentStrokes[0];
  }

  public getCurrentMove() {
    if (isEqual(this.commandsStream, ["p"])) {
      return "punch";
    }

    return "";
  }

  public update(params) {
    Object.keys(params).forEach((k) => {
      this[k] = params[k];
    });

    return this;
  }
}
