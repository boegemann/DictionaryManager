import React from 'react';
import { Grid } from 'react-redux-grid';


let  data = [
  {
    name: 'Michael Jordan',
    age: 'Shooting Guard'
  },
  {
    name: 'Charles Barkley',
    age: 'Power Forward'
  }
];
const columns = [
  {
    name: 'Name',
    dataIndex: 'name',
    width: '50%'
  },{
    name: 'Age',
    dataIndex: 'age',
    width: '50%'
  }
]


class GridComponent extends React.Component {

  render() {
    return <Grid
      data={data}
      stateKey="unitKey"
      columns={columns}
      plugins={{}}/>
  };
}


export default GridComponent
