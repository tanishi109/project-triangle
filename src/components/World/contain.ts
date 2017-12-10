import {connect} from "react-redux";
import {compose} from "redux";
import {setScene} from "actions/views/world";

import {
  StateToProps,
  DispatchToProps,
} from "./d";

const mapStateToProps = (state) => {
  const props: StateToProps = {
    scene: state.views.world.scene,
  };

  return props;
};

const mapDispatchToProps = (dispatch) => {
  const props: DispatchToProps = {
    setScene(scene) {
      dispatch(setScene(scene));
    },
  };
  return props;
};

export default compose(
  connect(mapStateToProps, mapDispatchToProps),
);
