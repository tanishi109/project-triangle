import {connect} from "react-redux";
import {compose} from "redux";

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
  };
  return props;
};

export default compose(
  connect(mapStateToProps, mapDispatchToProps),
);
