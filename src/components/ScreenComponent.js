import React from 'react';
import Form from '../containers/FormContainer';
import GridComponent from '../containers/GridContainer';
import {exists} from '../util';

import {withRouter} from "react-router-dom";


const getInitialValues = (unit, application, data) => {

  const getRootValue = (dataType) => {
    switch (dataType) {
      case "app":
        return application;
      case "data":
        return data;
      default:
        return null;
    }
  };

  let values = {};
  let unitType = Object.getOwnPropertyNames(unit)[0];
  let unitDefintion = unit[unitType];
  switch (unitType) {
    case "form":
      values.service = unitDefintion.submit.service;
      break;
    default:
  }
  if (exists(unitDefintion.data)) {
    Object.getOwnPropertyNames(unitDefintion.data).forEach(
      (propName) => {
        let propDescriptor = unitDefintion.data[propName];
        if (exists(propDescriptor)) {
          let descriptorPaths = propDescriptor.split(":", 2);
          let value = getRootValue(descriptorPaths[0]);
          let pathElements = descriptorPaths[1].split(".");
          pathElements.forEach((path) => {
            if (exists(value)) {
              value = value[path];
            }
          });
          values[propName] = value;
        }
      });

    return values;
  }
};


const constructScreen = (layoutData, screenId, appname, application, data) => {

  let units = layoutData.map((unit, unitIndex) => {
    let unitType = Object.getOwnPropertyNames(unit)[0];
    switch (unitType) {
      case "form":
        return <Form enableReinitialize="true" initialValues={getInitialValues(unit, application, data)}
                     key={unit.form.name}
                     form={unit.form.name} unitIndex={unitIndex}/>;
      case "grid":
        return <GridComponent events={unit.grid.events} key={unit.grid.name} unitKey={unit.grid.name} unitIndex={unitIndex} colDefAndData={getInitialValues(unit, application, data)}/>;
      default:
        return <div/>;
    }
  });
  return <div className="screen"><div className="content">{units}</div></div>;
};



class ScreenComponent extends React.Component {


  render() {
    let {layoutData, appname, screenId, application, data} = this.props;
    if (layoutData.length) {
      return constructScreen(layoutData, appname, screenId, application, data);
    } else {
      return <div/>
    }
  };
}

export default withRouter(ScreenComponent);

