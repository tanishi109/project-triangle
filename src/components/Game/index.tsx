import * as React from "react";
import {Observable, Subject} from 'rxjs/Rx';

import World from "./World";

import contain from "./contain";
@contain
export default class Game extends React.Component<{}, {}> {
  keyEvents = new Subject();

  public render(): JSX.Element {
    return (
      <div>
        hello game
        <World />
      </div>
    );
  }

  public componentDidMount() {
    this.keyEvents
      .filter((keyCode: number) => {
        return [37, 38, 39, 40, 90].includes(keyCode);
      })
      .timeout(100)
      .retry()
      .buffer(Observable.interval(100))
      .map((keyCodes: number[]) => {
        return keyCodes;
      }).subscribe((n) => {
        console.log(n)
      })

    window.addEventListener("keydown", (e) => {
      const {keyCode} = e;
      this.keyEvents.next(keyCode);
    });
  }
}
