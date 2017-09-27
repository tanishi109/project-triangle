import * as React from "react";
import World from "./World";

export default class Game extends React.Component<{}, {}> {
  public render(): JSX.Element {
    return (
      <div>
        hello game
        <World />
      </div>
    );
  }
}
