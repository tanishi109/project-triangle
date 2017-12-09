import * as React from "react";

// components
import World from "../World";

// types
import {Props} from "./d";

// self
class Game extends React.Component<Props, {}> {
  public render(): false | JSX.Element {
    return (
      <div>
        hello game
        <World />
      </div>
    );
  }
}

// wrap & export
import contain from "./contain";
export default contain(Game);
