import React from 'react';
import {Grid} from 'react-redux-grid';


class GridComponent extends React.Component {

  render() {
    let {data, columndef, events, unitKey} = this.props
    return <Grid
      data={data}
      stateKey={unitKey}
      columns={columndef}
      events={events}
      plugins={{}}/>
  };
}

export default GridComponent;
