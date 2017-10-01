import {connect} from "react-redux";
import {compose} from "redux";
import commandActions from "actions/command";
import playerActions from "actions/entities/player";
import {playerSelectionActions} from "actions/selection";

import {
  StateToProps,
  DispatchToProps,
} from "./d";

import {selectCurrentMove} from "selectors/player";

const mapStateToProps = (state) => {
  const currentMove = selectCurrentMove(state);
  console.log(": ", currentMove)
  const props: StateToProps = {
    currentMove,
  };

  return props;
};

const mapDispatchToProps = (dispatch) => {
  const props: DispatchToProps = {
  };
  return props;
};

export default compose(
  connect(mapStateToProps, mapDispatchToProps),
);
