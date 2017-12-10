import * as React from "react";
import {Props} from "./d";

import ModeSelect from "./ModeSelect";

export class World extends React.Component<Props, {}> {
  public render(): JSX.Element {
    return this.renderScene();
  }

  public createScene(scene) {
    const {setScene} = this.props;
    const sceneProps = {
      scene: {
        set: setScene,
      },
    };

    return React.createElement(scene, sceneProps);
  }

  private renderScene() {
    // const states = [ModeSelect, OnlineLobby];
    // const currentState = states[0];
    const {scene} = this.props;

    // TODO: FIXME
    // sceneをconst にしないか、sceneを即時関数で決める
    if (scene === null) {
      return this.createScene(ModeSelect);
    }

    // TODO: change state
    // mode select
    // local match room
    // online lobby
    // online match room
    return this.createScene(scene);
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

// wrap & export
import contain from "./contain";
export default contain(World);
