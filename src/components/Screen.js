import React from 'react'
import Label from '../components/Label'

const Screen = ({screenData, appname, screenId, fetchScreenData}) => {
  console.log(screenData.navigate)
  if (screenData.navigate === 'required') {
    fetchScreenData(appname, screenId);
    return null;
  } else if (screenData.navigate === 'loading') {
    return <div className="screen">
      <Label text={screenData.text}></Label>
    </div>
  } else if (screenData.navigate === 'finished') {
    return <div className="screen">
      <Label text={screenData.text}></Label>
    </div>
  } else {
    return null;
  }
};


export default Screen;
