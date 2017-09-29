import {connect} from "react-redux";
import {compose} from "redux";
import commandActions from "actions/command";

const mapStateToProps = (state) => {
  const command = state.command;

  return {
    command,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    setCommand(keyCode) {
      dispatch(commandActions.setCommand(keyCode));
    },
  };
};

export default compose(
  connect(mapStateToProps, mapDispatchToProps)
);