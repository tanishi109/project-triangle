import * as React from "react";

import Player from "./Player";

export default class World extends React.Component<{}, {}> {
  private canvas: HTMLCanvasElement | null;

  public render(): JSX.Element {
    return (
      <div style={{position: "relative"}}>
        <canvas ref={(elm) => this.canvas = elm}>
        </canvas>
        <Player />
      </div>
    );
  }

  public componentDidMount() {
    const ctx = this.canvas.getContext("2d");

    ctx.rect(10, 10, 100, 100);
    ctx.stroke();
  }
}
