import React from 'react';
import { Grid } from 'react-redux-grid';





class GridComponent extends React.Component {

  render() {
    let {data,columndef}=this.props
    return <Grid
      data={data}
      stateKey="unitKey"
      columns={columndef}
      plugins={{}}/>
  };
}

export default GridComponent;
