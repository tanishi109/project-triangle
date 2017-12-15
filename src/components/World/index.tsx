import * as React from "react";
import {Props} from "./d";

// import ModeSelect from "./ModeSelect";
import OnlineBattleRoom from "./OnlineBattleRoom";

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
    const {scene} = this.props;

    // TODO: FIXME
    // sceneをconst にしないか、sceneを即時関数で決める
    if (scene.length === 0) {
      return this.createScene(OnlineBattleRoom);
    }

    // TODO: change state
    // mode select
    // local match room
    // online lobby
    // online match room
    return this.createScene(scene[0]);
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



// wrap & export
import contain from "./contain";
export default contain(World);
