import {connect} from 'react-redux'
import ApplicationComponent from '../components/ApplicationComponent'

const mapStateToProps = (state) => {
  document.title = state.application.title;
  return Object.assign({}, state.application);
};

let Application = connect(
  mapStateToProps
)(ApplicationComponent);


export default Application;
