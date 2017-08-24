import React from 'react';
import Form from '../containers/FormContainer';
import GridComponent from '../containers/GridContainer';
import {exists} from '../util';

import {withRouter} from "react-router-dom";

import Paper from 'material-ui/Paper';

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
                    let propNamePath = propName.split(":");
                    let lastProp = propNamePath.pop();
                    let destRoot = values;
                    propNamePath.forEach((path) => {
                        if (!exists(destRoot[path])) {
                            destRoot[path] = {}
                        }
                        destRoot = destRoot[path];
                    });
                    // overlay objects to allow multiple defintions into the same root
                    if (exists(destRoot[lastProp]) && typeof destRoot[lastProp] === "object" && exists(value) && typeof(value) === "object") {
                        destRoot[lastProp] = Object.assign(destRoot[lastProp], value);
                    } else {
                        destRoot[lastProp] = value;
                    }
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
                return <Paper key={"P" + unit.form.name} className="screen_unit"><Form enableReinitialize="true"
                                                                                       initialValues={getInitialValues(unit, application, data)}
                                                                                       key={unit.form.name}
                                                                                       form={unit.form.name}
                                                                                       unitIndex={unitIndex}/></Paper>;
            case "grid":
                return <Paper key={"P" + unit.grid.name} className="screen_unit">
                    <GridComponent
                        events={unit.grid.events}
                        key={unit.grid.name}
                        unitKey={unit.grid.name}
                        unitIndex={unitIndex}
                        colDefAndData={getInitialValues(unit, application, data)}/>
                </Paper>;
            default:
                return <div/>;
        }
    });
    return <div className="screen">
        <div className="content">{units}</div>
    </div>;


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

