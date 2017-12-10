import {connect} from "react-redux";
import {compose} from "redux";
import {playerSelectionActions} from "actions/selection";

import {
  StateToProps,
  DispatchToProps,
} from "./d";

const mapStateToProps = (state) => {
  const props: StateToProps = {
  };

  return props;
};

const mapDispatchToProps = (dispatch) => {
  const props: DispatchToProps = {
    // initPlayer(id) {
    //   dispatch(playerActions.upsert({
    //     [id]: {},
    //   }));
    //   dispatch(playerSelectionActions.select(id));
    // },
    // updatePlayer(params, playerId) {
    //   dispatch(playerActions.upsert({
    //     [playerId]: params,
    //   }));
    // },
  };
  return props;
};

export default compose(
  connect(mapStateToProps, mapDispatchToProps),
);
