import * as React from "react";
import OnlineBattleRoom from "components/World/OnlineBattleRoom";
import {endpoint} from "constants/config";
import {Socket} from "phoenix";
import { replace } from "react-router-redux";

export default class OnlineLobby extends React.Component<{}, {}> {
  channel: any;
  socket: any;

  constructor(props) {
    super(props);

    this.enterRoom = this.enterRoom.bind(this);
  }

  public componentWillMount() {
    // init socket
    this.socket = new Socket(`ws://${endpoint}/socket`, {
      params: {},
    });
    this.socket.connect();

    const id = localStorage.getItem("id") || null;
    this.join(id);
  }

  public render(): JSX.Element {
    return (
      <div style={{position: "relative"}}>
        対戦相手を探しています。
      </div>
    );
  }

  private join(id: string | null = null) {
    const afterJoin = id === null ?
    (reply) => {
      localStorage.setItem("id", reply.id);
      this.join(reply.id);
    } :
    (reply) => {
      this.channel.push(`request_match`, {id});
    };

    this.channel = this.socket.channel(`lobby`, {id});
    this.channel.join()
      .receive("ok", afterJoin)
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

  private enterRoom(roomId, retryCount = 0) {
    const {scene} = this.props;

    this.channel.leave()
      .receive("ok", () => {
        // 画面遷移をdispatch
        scene.set(() => (React.createElement(OnlineBattleRoom, {
          ...this.props,
          roomId,
        })));
      })
      .receive("error", () => {
        if (retryCount > 10) {
          return alert("ロビーからの離脱に失敗しました");
        }
        this.enterRoom(roomId, retryCount++);
      });
  }
}
