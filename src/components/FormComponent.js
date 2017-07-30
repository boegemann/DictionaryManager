import React from 'react';
import Label from './LabelComponent';
import {Field, reduxForm} from 'redux-form';
import {exists} from '../util';
// import {
//   TextField,
// } from 'redux-form-material-ui'

import Button from 'material-ui/Button';
import TextField from 'material-ui/TextField';
import Typography from 'material-ui/Typography';
import Toolbar from 'material-ui/Toolbar'

const getRowDefs = (propDescriptor, data) => {

  const getRootValue = (dataType) => {
    switch (dataType) {
      case "app":
        return []; // TODO
      case "data":
        return data;
      default:
        return null;
    }
  };

  if (exists(propDescriptor)) {
    let descriptorPaths = propDescriptor.split(":", 2);
    let value = getRootValue(descriptorPaths[0]);
    let pathElements = descriptorPaths[1].split(".");
    pathElements.forEach((path) => {
      if (exists(value)) {
        value = value[path];
      }
    });
    return value;
  }

  return [];
};


const renderField = ({input, label, type, placeholder, meta: {touched, error}}) => {

  const getInput = () => {
    switch (type) {
      case "label" :
        return <Label className={type} text={input.value}/>;
      case "message":
      case "error":
      case "warning":
        return <span className={type}>{input.value}</span>
      default:
        return <TextField {...input} type={type} placeholder={placeholder}/>;
    }
  }

  return (
    <div className="field">
      {exists(label) && <label className="form_label"><Typography  type="caption">{label}</Typography></label>}
      {getInput()}
      {touched && error && <div className="error">{error}</div>}
    </div>
  )
};

const expandDynamic = (content, data) => {
  let newContent = [];
  content.forEach((row) => {
    if (exists(row)) {
      if (Array.isArray(row)) {
        newContent.push(row)
      } else {
        if (exists(row.dynamic)) {
          let dynamic = getRowDefs(row.dynamic,data);
          dynamic.forEach((d)=>newContent.push(d));
        }
      }
    }
  });
  return newContent;
};

const constructForm = (formDefinition, handleSubmit, data) => {
  let content = expandDynamic(formDefinition.content, data)
  let rows = content.map((unit, rowIndex) => {
    let rowKey = formDefinition.name + ":r" + rowIndex;
    let controls = unit.map((control, itemIndex) => {
      let controlType = Object.getOwnPropertyNames(control)[0];
      let itemKey = rowKey + ":" + itemIndex;
      switch (controlType) {
        case "label":
          return <Label className={controlType} key={itemKey} text={control[controlType].text}/>;
        case "heading":
          return <label className={controlType} key={itemKey}><Typography key={"t" + itemKey} type="subheading">{control[controlType].text}</Typography></label>;
        case "field":
          let field = control.field;
          return <Field key={field.property}
                        name={field.property}
                        type={(field.type === null || field.type === undefined) ? 'text' : field.type}
                        placeholder={field.placeholder}
                        component={renderField}
                        label={field.label}/>;
        default:
          return <div/>;
      }
    });
    return <div key={rowKey} className="row">{controls}</div>;
  });
  return <form onSubmit={handleSubmit}>
    <Toolbar>
      <div>
        <Typography type="title">{formDefinition.title}</Typography>
      </div>
    </Toolbar>
    {rows}
    <Toolbar>
      <div className="grid_spacer"/>
      <div className="grid_actions">
        <Button className="form_submit" type="submit">{formDefinition.submit.caption}</Button>
      </div>
    </Toolbar>
  </form>;
};


const FormComponent = ({formDefinition, handleSubmit, data}) => {
  return constructForm(formDefinition, handleSubmit, data);
};


const Formed = reduxForm()(FormComponent);


export default Formed;

