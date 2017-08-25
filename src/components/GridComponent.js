import React from 'react';
// import {Grid} from 'react-redux-grid';
import Toolbar from 'material-ui/Toolbar'
import Typography from 'material-ui/Typography';
import IconButton from 'material-ui/IconButton';

import AddIcon from 'material-ui-icons/Add';
import EditIcon from 'material-ui-icons/Edit';
import DeleteIcon from 'material-ui-icons/Delete';

import {
    Grid,
    TableView,
    TableSelection,
    TableHeaderRow,
} from '@devexpress/dx-react-grid-material-ui';
import {
    SortingState,
    LocalSorting,
    SelectionState
} from '@devexpress/dx-react-grid';

class GridComponent extends React.Component {


    render() {
        let {gridDefinition, data, columndef, selection, edit, add, remove, onSelectionChange, getRowId} = this.props;
        // const pageSize = 5;

        const fEdit = () => {
            edit(selection, gridDefinition.edit)
        };
        const fAdd = () => {
            add(gridDefinition.add)
        };
        const fRemove = () => {
            remove(selection, gridDefinition.remove)
        };

        return <div>

            <Toolbar>
                <div>
                    <Typography type="title">{gridDefinition.title}</Typography>
                </div>
                <div className="grid_spacer"/>
                <div className="grid_actions">

                    {gridDefinition.add != null && (
                        <IconButton aria-label="Add Item" onTouchTap={fAdd}>
                            <AddIcon/>
                        </IconButton>)
                    }
                    {gridDefinition.edit != null && selection != null && selection.length === 1 && (
                        <IconButton aria-label="Edit Item" onTouchTap={fEdit}>
                            <EditIcon/>
                        </IconButton>)
                    }
                    {gridDefinition.remove != null && selection != null && selection.length > 0 && (
                        <IconButton aria-label="Delete Item" onTouchTap={fRemove}>
                            <DeleteIcon/>
                        </IconButton>)
                    }
                </div>
            </Toolbar>


            <Grid
                rows={data}
                columns={columndef}
                getRowId={getRowId}>
                <SortingState/>
                <LocalSorting/>
                <SelectionState
                    onSelectionChange={(selected) => {
                        onSelectionChange(this.props.data.filter(r => selected.indexOf(r.id) >= 0))
                    }}
                    selection={selection.map(s => s.id)}
                />

                <TableView/>
                <TableHeaderRow allowSorting/>
                <TableSelection showSelectAll={false} selectByRowClick={true}/>
            </Grid>
        </div>

    };
}

export default GridComponent;


