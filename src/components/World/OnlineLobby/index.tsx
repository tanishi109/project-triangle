import * as React from "react";
import OnlineMatchRoom from "components/World/OnlineMatchRoom";

export default class OnlineLobby extends React.Component<{}, {}> {
  constructor(props) {
    super(props);

    this.enterRoom = this.enterRoom.bind(this);
  }

  public render(): JSX.Element {
    return (
      <div style={{position: "relative"}}>
        ここはロビーだよ
        <button
          onClick={this.enterRoom}
          >
          参加！
        </button>
      </div>
    );
  }

  private enterRoom() {
    const {scene} = this.props;

    scene.set(() => (React.createElement(OnlineMatchRoom, this.props)));
  }
}
