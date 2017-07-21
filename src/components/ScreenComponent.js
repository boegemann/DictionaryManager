import React from 'react';
import Form from '../containers/Form';

import {withRouter} from "react-router-dom";

const constructScreen = (layoutData, screenId, appname) => {

  let units = layoutData.map((unit, unitIndex) => {
    let unitType = Object.getOwnPropertyNames(unit)[0];
    switch (unitType) {
      case "form":
        return <Form initialValues={{service: unit.form.submit.service, appname: appname, screen: screenId}}
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
    console.log(this.props)
    let {layoutData, appname, screenId} = this.props;
    if (layoutData.length) {
      return constructScreen(layoutData, appname, screenId);
    }else{
      return <div/>
    }
  };
}

export default withRouter(ScreenComponent);

