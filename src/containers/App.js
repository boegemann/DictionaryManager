import {connect} from 'react-redux'
import AppComponent from '../components/App'

const mapStateToProps = (state) => {
  document.title = state.app.title;
  return Object.assign({}, state.auth);
};

let App = connect(
  mapStateToProps
)(AppComponent);


export default App;
