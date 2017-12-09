import * as React from "react";
import ModeSelect from "./ModeSelect";
import OnlineLobby from "./OnlineLobby";

export default class World extends React.Component<{}, {}> {
  private canvas: HTMLCanvasElement | null;

  public render(): JSX.Element {
    return this.renderByState();
  }

  private renderByState() {
    const states = [ModeSelect, OnlineLobby];
    const currentState = states[0];

    // TODO: change state
    // mode select
    // local match room
    // online lobby
    // online match room
    return React.createElement(currentState);
  }
}

// onlineLobbyからは「戻る」処理を実装したいので
// pushDownオートマトン(一つもどす)を使う

// class World {
//   constructor() {
//     this.state = new FirstState()
//   }
//   handleInput() {
//     this.state.handleInput(this)
//   }
// }

// class FirstState {
//   handleInput(world) {
//     addEventListener("click", () => {
//       world.state = AnotherState
//     })
//   }
// }


// web socket example
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
