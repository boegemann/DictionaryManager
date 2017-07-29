// import React from 'react';
// import {Grid} from 'react-redux-grid';
//
//
// class GridComponent extends React.Component {
//
//   render() {
//     let {data, columndef, events, unitKey} = this.props
//     return <Grid
//       data={data}
//       stateKey={unitKey}
//       columns={columndef}
//       events={events}
//       plugins={{}}/>
//   };
// }
//
// export default GridComponent;
import React from 'react';

import {
  SortingState,
  LocalSorting,
} from '@devexpress/dx-react-grid';

import {
  Grid, TableView, TableHeaderRow
} from '@devexpress/dx-react-grid-material-ui';

class GridComponent extends React.Component {

  render() {
    let {data, columndef, events, unitKey} = this.props
    console.log(columndef)

    let coldef = columndef.map((cd) => {
      return {
        name: Array.isArray(cd.dataIndex)?cd.dataIndex.join("."):cd.dataIndex,
        title: cd.name
      }
    });

    console.log(coldef)

    return <Grid
      rows={data}
      columns={coldef}>
      <SortingState />
      <LocalSorting />
      <TableView />
      <TableHeaderRow  allowSorting />
    </Grid>
  };

}
export default GridComponent;
