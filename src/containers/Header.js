import {connect} from 'react-redux'
import HeaderBar from '../components/HeaderBar'

const deepFind = (obj, path) => {
  let paths = path.split('.')
    , current = obj;

  for (let i = 0; i < paths.length; ++i) {
    if (current[paths[i]] === undefined) {
      return undefined;
    } else {
      current = current[paths[i]];
    }
  }
  return current;
};


const mapStateToProps = (state, ownProps) => {
  return Object.assign({titleClass:ownProps.titleClass}, deepFind(state, ownProps.path))
};


let Header = connect(
  mapStateToProps
)(HeaderBar);


export default Header;
