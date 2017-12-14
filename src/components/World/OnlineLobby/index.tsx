import * as React from "react";
import OnlineBattleRoom from "components/World/OnlineBattleRoom";
import {Socket} from "phoenix";

export default class OnlineLobby extends React.Component<{}, {}> {
  channel: any;

  constructor(props) {
    super(props);

    this.enterRoom = this.enterRoom.bind(this);
  }

  public componentWillMount() {
    // init socket
    const socket = new Socket("ws://0.0.0.0:4000/socket", {
      params: {},
    });
    socket.connect();

    const id = location.href.split("?")[1];
    this.channel = socket.channel(`lobby`, {id});

    this.channel.join()
      .receive("ok", () => {
        this.channel.push(`request_match`, { id });
      })
      .receive("error", () => {
        alert("ロビーへの接続に失敗しました。");
      });

    this.channel.on("matched", (msg) => {
      const roomId = msg.roomkey_map[id];
      if (roomId) {
        this.enterRoom(roomId);
      }
    });
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

  private enterRoom(roomId, retryCount = 0) {
    const {scene} = this.props;

    this.channel.leave()
      .receive("ok", () => {
        // 画面遷移をdispatch
        scene.set(() => (React.createElement(OnlineBattleRoom, this.props)));
        // TODO: 以下はBattleRoomでやる
        // const roomChannel = socket.channel(`room:${key}`, {id});
        // roomChannel.join()
        //   .receive("ok", resp => { console.log("Room successfully", resp) })
        //   .receive("error", resp => { console.log("Unable to Room", resp) })
      })
      .receive("error", () => {
        if (retryCount > 10) {
          return alert("ロビーからの離脱に失敗しました");
        }
        this.enterRoom(roomId, retryCount++);
      });
  }
}
