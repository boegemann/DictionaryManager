import React from 'react'
import Label from './LabelComponent'

const HeaderComponent = ({title}) => (
  <div className="header_bar">
    <Label className='app_title' text={title != null ? title : ""}/>
  </div>
);

export default HeaderComponent;
