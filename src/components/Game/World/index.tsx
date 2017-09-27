import * as React from "react";

export default class World extends React.Component<{}, {}> {
  private canvas: HTMLCanvasElement | null;

  public render(): JSX.Element {
    return (
      <canvas ref={(elm) => this.canvas = elm} />
    );
  }

  private componentDidMount() {
    const ctx = this.canvas.getContext("2d");

    ctx.rect(10, 10, 100, 100);
    ctx.stroke();
  }
}
