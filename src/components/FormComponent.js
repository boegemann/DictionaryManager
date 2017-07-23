import React from 'react';
import Label from './LabelComponent';
import {Field, reduxForm} from 'redux-form';
import {exists} from '../util';


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
    <div>
      {exists(label) && <label className="form_label">{label}</label>}
      {getInput()}
      {touched && error && <div className="error">{error}</div>}
    </div>
  )
};

const constructForm = (formDefinition, handleSubmit) => {
  let rows = formDefinition.content.map((unit, rowIndex) => {
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

const FormComponent = ({formDefinition, handleSubmit}) => {
  return constructForm(formDefinition, handleSubmit);
};


const Formed = reduxForm()(FormComponent);


export default Formed;

