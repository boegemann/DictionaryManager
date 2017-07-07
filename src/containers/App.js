import {connect} from 'react-redux'
import AppComponent from '../components/App'


import {loginUser} from '../actions/authentication'

const mapStateToProps = (state, ownProps) => {
  document.title = state.app.title;
  return Object.assign({}, state.auth);
};

const mapDispatchToProps = (dispatch) => {
  return {
    onLoginClick: (creds) => {
      dispatch(loginUser(creds))
    }
  }
};

let App = connect(
  mapStateToProps,
  mapDispatchToProps
)(AppComponent);


export default App;
