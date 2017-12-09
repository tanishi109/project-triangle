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

  public componentDidMount() {
    const ctx = this.canvas.getContext("2d");
    const [x, y] = pos;

    ctx.beginPath();
    ctx.rect(x, y, 20, 20);
    ctx.stroke();
    ctx.closePath();
  }

  public componentDidUpdate() {
    const {currentMove} = this.props;

    if (currentMove === "punch") {
      this.drawP();
    }
  }

  private drawP() {
    const ctx = this.canvas.getContext("2d");
    const [x, y] = pos;
    const r = 10;

    ctx.clearRect(0, 0, 300, 300);

    ctx.beginPath();
    ctx.arc(x + r, y + r, r, 0, 360 / Math.PI * 2);
    ctx.stroke();
    ctx.closePath();
  }
}

import contain from "./contain";
export default contain(Player);
