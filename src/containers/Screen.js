import {connect} from 'react-redux'
import Screen from '../components/Screen'


const mapStateToProps = (state, ownProps) => {
  console.log(state);
  console.log(ownProps);
  console.log(state.app.screens[ownProps.match.params.id]);
  return {text: state.app.screens[ownProps.match.params.screen].text}
};


let ScreenComponent = connect(
  mapStateToProps
)(Screen);


export default ScreenComponent;
