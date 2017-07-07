import {connect} from 'react-redux'
import AppComponent from '../components/App'


import {loginUser} from '../actions/authentication'

const mapStateToProps = (state, ownProps) => {
  let x =  Object.assign({}, state.auth);
  console.log (state);
  console.log ("->" )
  console.log (x)
  return x
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
