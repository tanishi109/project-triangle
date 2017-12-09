import * as React from "react";

import {Socket} from "phoenix";

const socket = new Socket("ws://0.0.0.0:4000/socket", {
  params: {},
});

socket.connect();

const channel = socket.channel("room:lobby", {});

channel.join()
  .receive("ok", resp => { console.log("Joined successfully", resp) })
  .receive("error", resp => { console.log("Unable to join", resp) })

channel.push("new_msg", {body: "***hogehoge"});

export default class World extends React.Component<{}, {}> {
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
