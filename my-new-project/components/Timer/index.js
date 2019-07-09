import { connect } from "react-redux";
import Timer from "./presenter";
import { bindActionCreators } from "redux";
import { actionCreators as tomatoActions } from "../../reducer";

function mapStateToProps(state) {
  const { isPlaying, elapsedTime, timeDuration } = state;
  return {
    isPlaying,
    elapsedTime,
    timeDuration
  };
}

function mapDispatchToProps(dispatch) {
  return {
    startTimer: bindActionCreators(tomatoActions.startTimer, dispatch),
    restartTimer: bindActionCreators(tomatoActions.restartTimer, dispatch),
    addSecond: bindActionCreators(tomatoActions.addSecond, dispatch)
  };
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Timer);
