import * as React from "react";
import {Provider} from "react-redux";
import {Redirect, Route, Switch} from "react-router";
import {ConnectedRouter} from "react-router-redux";

import store from "store";
import {history} from "store";

// import "styles/base";

import App from "components/App";
import Game from "components/Game";

export default () => (
  <Provider store={store}>
    <ConnectedRouter history={history}>
      <Switch>
        <App>
          <Route path="/" component={Game} />
        </App>
        <Redirect to="/" />
      </Switch>
    </ConnectedRouter>
  </Provider>
);
