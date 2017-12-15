import * as React from "react";

// types
import {Props} from "./d";

const pos = [20, 20];

class Player extends React.Component<Props, {}> {
  private canvas: HTMLCanvasElement | null;

  public render(): JSX.Element {
    return (
      <canvas style={{
        position: "absolute",
        left: 0,
        top: 0,
      }} width={300} height={300} ref={(elm) => this.canvas = elm}>
      </canvas>
    );
  }
}

import contain from "./contain";
export default contain(Player);
