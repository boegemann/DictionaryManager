import {connect} from 'react-redux';
import GridComponent from '../components/GridComponent';
import {callService} from '../actions/screen'
import {rowsSelected} from '../actions/grid'
import {createAlert} from '../actions/alert'

const mapDispatchToProps = (dispatch, ownProps) => {
    return {
        edit: (selection, editDef) => {
            let service = editDef.service;
            delete editDef.service;
            let params = {rowData: selection[0], eventInfo: editDef};
            dispatch(callService(service, params));
        },
        add: (addDef) => {
            let service = addDef.service;
            delete addDef.service;
            let params = {eventInfo: addDef};
            dispatch(callService(service, params));
        },
        remove: (selection, removeDef) => {
            const doRemove = () => {
                let service = removeDef.service;
                delete removeDef.service;
                let params = {rowData: selection, eventInfo: removeDef};
                dispatch(callService(service, params));
            };


            dispatch(createAlert({
                title: "Remove Item?",
                contentText: "This will remove the selected item permanently",
                actionOK: doRemove
            }))
        },

        onSelectionChange: (selected) => {
            dispatch(rowsSelected(ownProps.unitKey, selected));
        },

        getRowId: (row) => {
            return row.id;
        }
    }
};

const mapStateToProps = (state, ownProps) => {
    let selection = state.gridSelection;
    let unitKey = ownProps.unitKey;
    let selectedIds = (selection != null && selection[unitKey]!=null) ? selection[unitKey] : [];

    console.log(selectedIds)

    return {
        gridDefinition: state.screen[ownProps.unitIndex].grid,
        unitKey: ownProps.unitKey,
        data: ownProps.colDefAndData.data,
        columndef: ownProps.colDefAndData.columndef,
        selection: selectedIds
    };
};

const GridContainer = connect(
    mapStateToProps,
    mapDispatchToProps
)(GridComponent);

export default GridContainer;
