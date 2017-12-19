import * as React from "react";
import OnlineLobby from "../OnlineLobby";
import Rules from "./Rules";

interface Props {
  scene: {
    set: (scene: () => JSX.Element) => void;
  };
}

export default class ModeSelect extends React.Component<Props, {}> {
  private canvas: HTMLCanvasElement | null;

  public render(): JSX.Element {
    const {scene} = this.props;

    return (
      <div>
        <h1>ゲームモード選択</h1>
        <ul>
          <li
            style={{
              textDecoration: "underline",
              color: "blue",
              cursor: "pointer",
            }}
            onClick={() => {
              scene.set(() => (React.createElement(OnlineLobby, this.props)));
            }}
            >
            オンライン対戦
          </li>
          {/* <li>
            <a
            href="https://tanishi109.github.io/four-fingers/"
            target="_blank"
            >
            ローカル対戦
            </a>
          </li> */}
        </ul>
        <Rules />
      </div>
    );
  }
}
