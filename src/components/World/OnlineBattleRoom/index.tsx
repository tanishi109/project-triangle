import * as React from "react";
import BattleField from "components/BattleField";

export default class OnlineBattleRoom extends React.Component<{}, {}> {
  public render(): JSX.Element {
    return (
      <div style={{position: "relative"}}>
        ここはオンラインバトルルーム
        <BattleField
          roomKey={this.props.roomKey}
          />
      </div>
    );
  }
}
