import {connect} from 'react-redux';
import GridComponent from '../components/GridComponent';


const mapStateToProps = (state, ownProps) => {
  return {gridDefinition: state.screen[ownProps.unitIndex].grid, unitKey:ownProps.unitKey};
};


const GridContainer = connect(
  mapStateToProps
)(GridComponent);

export default GridContainer;
