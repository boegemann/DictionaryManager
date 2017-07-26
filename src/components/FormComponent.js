import React from 'react';
import Label from './LabelComponent';
import {Field, reduxForm} from 'redux-form';
import {exists} from '../util';

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
        return <input {...input} type={type} placeholder={placeholder}/>;
    }
  }

  return (
    <div className="field">
      {exists(label) && <label className="form_label">{label}</label>}
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
        case "heading":
          return <Label className={controlType} key={itemKey} text={control[controlType].text}/>;
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
    {rows}
    <button className="form_submit" type="submit">{formDefinition.submit.caption}</button>
  </form>;
};

const FormComponent = ({formDefinition, handleSubmit, data}) => {
  return constructForm(formDefinition, handleSubmit, data);
};


const Formed = reduxForm()(FormComponent);


export default Formed;

