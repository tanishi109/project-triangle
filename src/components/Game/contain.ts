import {connect} from "react-redux";
import {compose} from "redux";
import commandActions from "actions/command";
import playerActions from "actions/entities/player";
import {playerSelectionActions} from "actions/selection";

import {
  StateToProps,
  DispatchToProps,
} from "./d";

import {selectCurrentCommand} from "selectors/player";

const mapStateToProps = (state) => {
  const currentCommand = selectCurrentCommand(state);
  const props: StateToProps = {
    currentCommand,
  };

  return props;
};

const mapDispatchToProps = (dispatch) => {
  const props: DispatchToProps = {
    initPlayer(id) {
      dispatch(playerActions.upsert({
        [id]: {},
      }));
      dispatch(playerSelectionActions.select(id));
    },
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
