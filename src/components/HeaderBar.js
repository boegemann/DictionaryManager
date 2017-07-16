import React from 'react'
import Label from '../components/Label'

const HeaderComponent = ({titleClass,title}) => (
  <div className="header_bar">
    <Label className={titleClass} text={title}/>
  </div>
);

export default HeaderComponent;
