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
    var controls = unit.map((control, itemIndex) => {
      let controlType = Object.getOwnPropertyNames(control)[0];
      let itemKey = rowKey + ":" + itemIndex;
      switch (controlType) {
        case "label":
          return <Label key={itemKey} text={control.label.text}></Label>;
        case "field":
          let field = control.field;
          return <Field key={field.property}
                        name={field.property}
                        type={field.type == null ? 'text' : field.type}
                        placeholder={field.placeholder}
                        component={renderField}
                        label={field.label}/>
        default:
          return <div/>;
      }
    });
    return <div key={rowKey} className="row">{controls}</div>;
  });
  let form = <form className="screen" onSubmit={handleSubmit}>
    {rows}
    <field key={formDefinition.name + ":url"} name="url" value={formDefinition.submit.url} type="hidden"/>
    <button className="form_submit" type="submit">{formDefinition.submit.caption}</button>
  </form>;
  return form
};


const FormComponent = ({formDefinition, handleSubmit}) => {
  let form = constructForm(formDefinition, handleSubmit);
  return form;
};

const Formed = reduxForm()(FormComponent);


export default Formed;
