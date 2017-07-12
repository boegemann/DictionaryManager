import {connect} from 'react-redux';
import Screen from '../components/Screen';
import {fetchScreenData} from '../actions/screen'


const mapStateToProps = (state, ownProps) => {
  return {layoutData: state.app.screen, appname:state.app.name, screenId:ownProps.match.params.screen}
};


const mapDispatchToProps = (dispatch) => {
  return {
    fetchScreenData: (appname, screen) => {
      dispatch(fetchScreenData(appname, screen));
    }
  }
};

let ScreenComponent = connect(
  mapStateToProps,
  mapDispatchToProps
)(Screen);


export default ScreenComponent;
