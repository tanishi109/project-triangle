import * as React from "react";

export default class App extends React.Component<{}, {}> {
  public render(): JSX.Element {
    return (
      <div>
        {this.props.children}
      </div>
    );
  }
}
