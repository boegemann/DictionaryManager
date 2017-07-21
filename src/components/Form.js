import React from 'react';
import Label from '../components/Label';
import {Field, reduxForm} from 'redux-form';

const renderField = ({input, label, type, placeholder, meta: {touched, error}}) => {
  return (
    <div>
      <label>{label}</label>
      <input {...input} type={type} placeholder={placeholder}/>
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
          return <Label key={itemKey} text={control.label.text}/>;
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
  return <form className="screen" onSubmit={handleSubmit}>
    {rows}
    <button className="form_submit" type="submit">{formDefinition.submit.caption}</button>
  </form>;
};


const FormComponent = ({formDefinition, handleSubmit}) => {
  return constructForm(formDefinition, handleSubmit);
};


const Formed = reduxForm()(FormComponent);


export default Formed;

