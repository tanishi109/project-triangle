import * as React from "react";

export default class OnlineMatchRoom extends React.Component<{}, {}> {
  private canvas: HTMLCanvasElement | null;

  public render(): JSX.Element {
    return (
      <div style={{position: "relative"}}>
        ここはオンラインマッチルーム
        <canvas ref={(elm) => this.canvas = elm}>
        </canvas>
      </div>
    );
  }

  public componentDidMount() {
    const ctx = this.canvas.getContext("2d");

    ctx.rect(10, 10, 400, 400);
    ctx.stroke();
  }
}
