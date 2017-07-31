import React from 'react';
import {Grid} from 'react-redux-grid';
import Toolbar from 'material-ui/Toolbar'
import Typography from 'material-ui/Typography';
import IconButton from 'material-ui/IconButton';

import AddIcon from 'material-ui-icons/Add';
import EditIcon from 'material-ui-icons/Edit';
import DeleteIcon from 'material-ui-icons/Delete';

class GridComponent extends React.Component {


  render() {
    let {gridDefinition, data, columndef, events, unitKey, selection, edit} = this.props;
    const pageSize = 5;

    const fEdit = ()=>{edit(selection,gridDefinition.edit)}

    return <div>

      <Toolbar>
        <div>
          <Typography type="title">{gridDefinition.title}</Typography>
        </div>
        <div className="grid_spacer"/>
        <div className="grid_actions">

          <IconButton aria-label="Filter list">
            <AddIcon />
          </IconButton>
          {gridDefinition.delete!=null && selection!=null && (
            <IconButton aria-label="Filter list">
              <DeleteIcon />
            </IconButton>)
          }
          {gridDefinition.edit!=null  && selection!=null && (
            <IconButton aria-label="Filter list" onTouchTap={fEdit}>
              <EditIcon />
            </IconButton>)
          }
        </div>
      </Toolbar>


      <Grid
        data={data}
        stateKey={unitKey}
        columns={columndef}
        events={events}
        pageSize={pageSize}
        height={false}
        plugins={{
          PAGER: {
            enabled: true,
            pagingType: 'local',
            toolbarRenderer: (pageIndex, pageSize, total, currentRecords, recordType) => {
              return `${pageIndex * pageSize} through ${pageIndex * pageSize + currentRecords} of ${total} ${recordType} Displayed`;
            },
            pagerComponent: false
          }
        }}/>
    </div>

  };
}
export default GridComponent;


