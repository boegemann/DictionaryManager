import {connect} from 'react-redux';
import GridComponent from '../components/GridComponent';
import {callService} from '../actions/screen'

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    events: {
      HANDLE_CELL_CLICK: () => {
      },
      HANDLE_CELL_DOUBLE_CLICK: () => {
      },
      HANDLE_BEFORE_ROW_CLICK: () => {
      },
      HANDLE_ROW_CLICK: () => {
      },
      HANDLE_ROW_DOUBLE_CLICK: ({row}, event) => {
        if (ownProps.hasOwnProperty("events") && ownProps.events.hasOwnProperty("row:doubleClick")) {
          let service=ownProps.events["row:doubleClick"].service;
          let params = {rowData:{...row},eventInfo:{...ownProps.events["row:doubleClick"]}};
          delete params.eventInfo.service;
          dispatch(callService(service, params));
        }
      },
      HANDLE_BEFORE_SELECTION: () => {
      },
      HANDLE_AFTER_SELECTION: () => {
      },
      HANDLE_BEFORE_INLINE_EDITOR_SAVE: () => {
      },
      HANDLE_AFTER_INLINE_EDITOR_SAVE: () => {
      },
      HANDLE_BEFORE_BULKACTION_SHOW: () => {
      },
      HANDLE_AFTER_BULKACTION_SHOW: () => {
      },
      HANDLE_BEFORE_SORT: () => {
      },
      HANLE_BEFORE_EDIT: () => {
      },
      HANDLE_AFTER_SELECT_ALL: () => {
      },
      HANDLE_AFTER_DESELECT_ALL: () => {
      },
      HANDLE_AFTER_ROW_DROP: () => {
      },
      HANDLE_BEFORE_TREE_CHILD_CREATE: () => {
      },
      HANDLE_EDITOR_FOCUS: () => {
      },
      HANDLE_EDITOR_BLUR: () => {
      }
    }
  }
};

const mapStateToProps = (state, ownProps) => {
  return {
    gridDefinition: state.screen[ownProps.unitIndex].grid,
    unitKey: ownProps.unitKey,
    data: ownProps.colDefAndData.data,
    columndef: ownProps.colDefAndData.columndef
  };
};


const GridContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(GridComponent);

export default GridContainer;
