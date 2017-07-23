import {connect} from 'react-redux';
import GridComponent from '../components/GridComponent';


const mapStateToProps = (state, ownProps) => {
  return {gridDefinition: state.screen[ownProps.unitIndex].grid, unitKey:ownProps.unitKey, data:ownProps.colDefAndData.data, columndef:ownProps.colDefAndData.columndef};
};


const GridContainer = connect(
  mapStateToProps
)(GridComponent);

export default GridContainer;
