import * as React from "react";
import {Socket} from "phoenix";
// game classes
import Stage from "./gameClass/Stage";
import Hand from "./gameClass/Hand/Hand";
import HP from "./gameClass/HP";
import Judge from "./gameClass/Judge";
import inputHandler from "./gameClass/inputHandler";
// types
import {Props} from "./d";

// self
class BattleField extends React.Component<Props, {}> {
  private canvas: HTMLCanvasElement | null;
  private channel: any;

  public render(): false | JSX.Element {
    return (
      <div
        id="wrapper"
        style={{
          height: "500px",
          width: "500px",
        }}
        >
        <canvas
          id="field"
          ref={(elm) => this.canvas = elm}
          >
        </canvas>
      </div>
    );
  }

  public componentWillMount() {
    const socket = new Socket("ws://0.0.0.0:4000/socket", {
      params: {},
    });
    socket.connect();
    const id = location.href.split("?")[1];
    const {roomKey} = this.props;
    this.channel = socket.channel(`room:${roomKey}`, {id});
    this.channel.join()
      .receive("ok", resp => { console.log("Room successfully", resp) })
      .receive("error", resp => { console.log("Unable to Room", resp) })
  }

  public componentDidMount() {
    const stage = initStage();
    updateStage(stage);

    this.channel.on("tick", (msg) => {
      const {id, key_map: keyMap} = msg;
      if (id !== location.href.split("?")[1]) {
        Object.keys(keyMap).forEach((k) => {
          const isKeyDown = keyMap[k];
          inputHandler.setMap(`v${k}`, isKeyDown);
        });
      }
    });

    window.addEventListener("keydown", (e) => {
      const keyName = event.key;

      this.channel.push("input", {
        key_map: {
          [keyName]: true,
        },
        id: location.href.split("?")[1],
      });
      inputHandler.setMap(keyName, true);
    });
    window.addEventListener("keyup", (e) => {
      const keyName = event.key;

      this.channel.push("input", {
        key_map: {
          [keyName]: false,
        },
        id: location.href.split("?")[1],
      });
      inputHandler.setMap(keyName, false);
    });
  }
}

const initStage = () => {
  const canvas = document.getElementById("field");
  const ctx = canvas.getContext("2d");
  const width = document.getElementById("wrapper").clientWidth;
  const height = document.getElementById("wrapper").clientHeight;

  canvas.setAttribute("width", width);
  canvas.setAttribute("height", height);

  const stage = new Stage(width, height, ctx);
  const hand1 = new Hand(80, 80, ["a", "s", "d"]);
  const hand2 = new Hand(300, 80, ["va", "vs", "vd"]); // virtual key
  const judge = new Judge([hand1, hand2]);
  const hp1 = new HP(hand1);
  const hp2 = new HP(hand2);
  stage.entities = [hand1, hand2, judge, hp1, hp2];

  return stage;
};

const updateStage = (stage) => {
  stage.update();

  requestAnimationFrame(() => {
    updateStage(stage);
  });
};


/*
ここでsocket接続してレスポンスごとにdispatchする。
- 相手のキー入力
- 相手の指の長さ
- 自他のHP
BattleFieldに与えるpropsがMapStateToPropsにより変化して描画が更新される

その他クライアント側の変更によってもdispatchされる
- 自分のキー入力

*/


// wrap & export
import contain from "./contain";
export default contain(BattleField);
