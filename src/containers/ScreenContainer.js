import {connect} from 'react-redux';
import ScreenComponent from '../components/ScreenComponent';

const mapStateToProps = (state, ownProps) => {
  return {
    layoutData: state.screen, appname: ownProps.match.params.appname,
    screenId: ownProps.match.params.screen,
    application: {...state.application}
  }
};

const mapDispatchToProps = (dispatch) => {
  return {}
};

let Screen = connect(
  mapStateToProps,
  mapDispatchToProps
)(ScreenComponent);

export default Screen
