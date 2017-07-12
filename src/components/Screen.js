import React from 'react'
import Label from '../components/Label'

const constructScreen = (layoutData) => {
  console.log(layoutData)
  let rows = layoutData.layout.map((unit, rowIndex) => {
    let rowKey = "r" + rowIndex;
    var controls = unit.map((control,itemIndex) => {
      let controlType = Object.getOwnPropertyNames(control)[0];
      let itemKey = "r" + rowIndex + ":" + itemIndex;
      switch (controlType) {
        case "label":
          return <Label key={itemKey} text={control.label.text}></Label>;
        case "input":
          let input= control.input;
          return <input
            key={itemKey}
            type={input.type==null?'text':input.type}
            ref={input.ref}
            className="form-control"
            placeholder={input.placeholder}/>
        default:
          return <div/>;
      }
    });
    return <div key={rowKey} className="row">{controls}</div>;
  });
  return <div className="screen">{rows}</div>;
};


const Screen = ({layoutData, appname, screenId, fetchScreenData}) => {

  if (layoutData.navigate === 'required') {
    fetchScreenData(appname, screenId);
    return null;
  } else if (layoutData.navigate === 'loading') {
    return <div className="screen">
      <Label text={layoutData.text}></Label>
    </div>
  } else if (layoutData.navigate === 'finished') {
    return constructScreen(layoutData);
  } else {
    return null;
  }
};


export default Screen;
