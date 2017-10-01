import * as React from "react";
import {Observable, Subject} from "rxjs/Rx";

// components
import World from "./World";

// domain
import GamepadDomain from "domains/Gamepad";

// types
import {Props} from "./d";
import {Commands} from "domains/Command";

// self
class Game extends React.Component<Props, {}> {
  private keyEvents = new Subject();
  private commandEvents = new Subject();

  public render(): false | JSX.Element {
    return (
      <div>
        hello game
        <World />
      </div>
    );
  }

  public componentDidMount() {
    const {initPlayer, updatePlayer} = this.props;
    const playerId = 1;

    initPlayer(playerId);

    this.keyEvents
      .filter((keyCode: number) => {
        return [37, 38, 39, 40, 90].includes(keyCode);
      })
      .timeout(100)
      .retry()
      .buffer(Observable.interval(100))
      .filter((keyCodes: number[]) => keyCodes.length > 0)
      .map((keyCodes: number[]) => {
        const strokes = keyCodes.map((c) => {
          return GamepadDomain.getCommandFromKeyCode(c);
        });

        updatePlayer({currentStrokes: strokes}, playerId);

        return this.props.currentCommand;
      })
      .filter((command: string) => !!command)
      .subscribe((command) => {
        this.commandEvents.next(command);
      });

    this.commandEvents
      .scan((acc: string[], value: string) => {
        const commands = acc.concat(value);

        if (commands.length < 4) {
          return commands;
        }
        return commands.slice(commands.length - 4, commands.length);
      }, [])
      .timeout(1000) // TODO: 20f
      .retry()
      .subscribe((commands: Commands[]) => {
        updatePlayer({commandsLog: commands}, playerId);
        // if (playerApp.isEq(this.player, commands) && this.isGameBegin) {
        //   this.animate();
        //   playerApp.doneTask(this.player);
        // }
        // this.player.commands = commands;
      });

    window.addEventListener("keydown", (e) => {
      const {keyCode} = e;
      this.keyEvents.next(keyCode);
    });
  }
}

// wrap & export
import contain from "./contain";
export default contain(Game);
