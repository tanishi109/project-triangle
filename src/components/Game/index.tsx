import * as React from "react";
import {Observable, Subject} from "rxjs/Rx";

// components
import World from "./World";

// domain
import GamepadDomain from "domains/Gamepad";

// types
import {Props} from "./d";

// self
class Game extends React.Component<Props, {}> {
  private keyEvents = new Subject();

  public render(): false | JSX.Element {
    return (
      <div>
        hello game
        <World />
      </div>
    );
  }

  public componentDidMount() {
    const {initPlayer, setCurrentStrokes} = this.props;
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

        setCurrentStrokes(strokes, playerId);

        return this.props.currentCommand;
      }).subscribe((n) => {
        console.log(n)
      })

    window.addEventListener("keydown", (e) => {
      const {keyCode} = e;
      this.keyEvents.next(keyCode);
    });
  }
}

// wrap & export
import contain from "./contain";
export default contain(Game);
