import {IPlayer} from "./Player.d";
import {Commands} from "./Command";

export default class Player implements IPlayer {
  public currentStrokes = [];

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

  public update(params) {
    Object.keys(params).forEach((k) => {
      this[k] = params[k];
    });

    return this;
  }
}
