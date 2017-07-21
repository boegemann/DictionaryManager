import {connect} from 'react-redux'
import HeaderComponent from '../components/HeaderComponent'

const mapStateToProps = (state) => {
  return Object.assign({}, state.header);
};

let Header = connect(
  mapStateToProps
)(HeaderComponent);

export default Header;
