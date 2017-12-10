import * as React from "react";
import OnlineLobby from "../OnlineLobby";

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
        <ul>
          <li onClick={() => {
            scene.set(() => (React.createElement(OnlineLobby, this.props)));
          }}>
            online match
          </li>
          <li>
            local match
          </li>
        </ul>
      </div>
    );
  }
}
