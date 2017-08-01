import React from 'react'
import AppBar from 'material-ui/AppBar';
import Toolbar from 'material-ui/Toolbar';
import Typography from 'material-ui/Typography';

const HeaderComponent = ({title}) => (
<AppBar position="fixed" color="default">
  <Toolbar>
    <Typography type="title" color="inherit">
      {title != null ? title : ""}
    </Typography>
  </Toolbar>
</AppBar>
);


export default HeaderComponent;
