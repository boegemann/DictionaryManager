import {connect} from 'react-redux'
import ApplicationComponent from '../components/ApplicationComponent'
import {initiateServiceCall} from '../remote/services';

const mapStateToProps = (state) => {
  document.title = state.application.title;
  return Object.assign({}, state.application);
};

const mapDispatchToProps = (dispatch) => {
  return {
    navigate:function(from,to){
      initiateServiceCall("navigation", {oldPath: from, newPath: to}, dispatch)
    }
  }
};

let Application = connect(
  mapStateToProps,
  mapDispatchToProps
)(ApplicationComponent);


export default Application;
