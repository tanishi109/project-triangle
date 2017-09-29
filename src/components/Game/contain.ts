import {connect} from "react-redux";
import {compose} from "redux";
import commandActions from "actions/command";
import playerActions from "actions/entities/player";

import {
  StateToProps,
  DispatchToProps,
} from "./d";

const mapStateToProps = (state) => {
  const currentCommand = state.command;
  const props: StateToProps = {
    currentCommand,
  };

  return props;
};

const mapDispatchToProps = (dispatch) => {
  const props: DispatchToProps = {
    setCurrentStrokes(commands, playerId) {
      dispatch(playerActions.upsert({
        [playerId]: {
          currentStrokes: commands,
        },
      }));
    },
  };
  return props;
};

export default compose(
  connect(mapStateToProps, mapDispatchToProps),
);
