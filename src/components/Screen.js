import React from 'react';
import Label from '../components/Label';
import Form from '../containers/Form';


const constructScreen = (layoutData, screenId, appname) => {
  console.log(layoutData)
  let units = layoutData.layout.map((unit, unitIndex) => {
    let unitType = Object.getOwnPropertyNames(unit)[0];
    switch (unitType) {
      case "form":
        console.log(unit)
        return <Form initialValues={{url: unit.form.submit.url, appname: appname, screen: screenId}} key={unit.form.name}
                     form={unit.form.name} unitIndex={unitIndex}></Form>
      default:
        return <div/>;
    }
  });
  console.log(units)
  return <div className="screen">{units}</div>;
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
    return constructScreen(layoutData, appname, screenId);
  } else {
    return null;
  }
};

export default Screen;
