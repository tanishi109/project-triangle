import * as React from "react";

export default class ModeSelect extends React.Component<{}, {}> {
  private canvas: HTMLCanvasElement | null;

  public render(): JSX.Element {
    return (
      <div style={{position: "relative"}}>
        <canvas ref={(elm) => this.canvas = elm}>
        </canvas>
      </div>
    );
  }

  public componentDidMount() {
    const ctx = this.canvas.getContext("2d");

    ctx.rect(10, 10, 100, 100);
    ctx.stroke();
  }
}
