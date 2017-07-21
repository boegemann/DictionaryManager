import React from 'react';
import Form from '../containers/Form';
import {exists} from '../util';

import {withRouter} from "react-router-dom";


const getInitialValues = (unit, application, data) => {
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
          let dataType = descriptorPaths[0];
          switch (dataType) {
            case "app":
              let value = application;
              let pathElements = descriptorPaths[1].split(".");
              pathElements.forEach((path) => {
                if (exists(value)) {
                  value = value[path];
                }
              });
              values[propName] = value;
              break;
            default:
          }
        }
      }
    )
  }

  return values;
};


const constructScreen = (layoutData, screenId, appname, application, data) => {

  let units = layoutData.map((unit, unitIndex) => {
    let unitType = Object.getOwnPropertyNames(unit)[0];
    switch (unitType) {
      case "form":
        return <Form initialValues={getInitialValues(unit, application, data)}
                     key={unit.form.name}
                     form={unit.form.name} unitIndex={unitIndex}/>;
      default:
        return <div/>;
    }
  });
  return <div className="screen">{units}</div>;
};


class ScreenComponent extends React.Component {


  render() {
    let {layoutData, appname, screenId, application} = this.props;
    if (layoutData.length) {
      return constructScreen(layoutData, appname, screenId, application);
    } else {
      return <div/>
    }
  };
}

export default withRouter(ScreenComponent);

