import React from 'react'
// import Label from './LabelComponent'
import AppBar from 'material-ui/AppBar';

const HeaderComponent = ({title}) => (
  <AppBar title={title != null ? title : ""}/>
);

export default HeaderComponent;
