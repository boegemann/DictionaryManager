import React from 'react';
import Label from './LabelComponent';
import {Field, reduxForm} from 'redux-form';
import {exists} from '../util';


import Button from 'material-ui/Button';
import TextField from 'material-ui/TextField';
import Typography from 'material-ui/Typography';
import Toolbar from 'material-ui/Toolbar'
import Divider from 'material-ui/Divider'
import {withStyles} from 'material-ui/styles';

const styles = theme => ({
    textField: {
        marginLeft: theme.spacing.unit,
        marginRight: theme.spacing.unit,
        width: 200
    },
});

const validate = (values, {data, formDefinition}) => {
    const errors = {}
    expandDynamic(formDefinition.content, data).forEach((row) => {
        if (Array.isArray(row)) {
            row.filter((item) => {
                let type = Object.getOwnPropertyNames(item)[0];
                return exists(type) && type === "field" && exists(item.field.validate)
            }).forEach((validatedField) => {
                let propertyName = validatedField.field.property;
                let propertyPath = propertyName.split(".");
                let value = values;
                propertyPath.forEach((pathElement) => {
                    if (exists(value)) value = value[pathElement]
                });

                validatedField.field.validate.forEach((validation) => {
                    let type = validation.type;
                    switch (type) {
                        case "required":
                            if (!exists(value) || (exists(value.trim) && value.trim() === "")) {
                                addError(errors, propertyPath, validation.message)
                            }
                            break;
                        case "regex":
                            let regex = new RegExp(validation.regex)
                            if (!regex.test(value)) {
                                addError(errors, propertyPath, validation.message)
                            }
                            break;
                        default:
                    }
                });

            });
        }
    });
    return errors
};

function addError(errors, propPath, message) {
    let propertyPath = Array.from(propPath);
    const lastProp = propertyPath.pop();
    let curLevel = errors;
    propertyPath.forEach((pathElement) => {
        if (!exists(curLevel[pathElement])) {
            curLevel[pathElement] = {}
        }
        curLevel = curLevel[pathElement];
    });
    curLevel[lastProp] = message;
}

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


const renderField = ({input, label, type, placeholder, meta: {touched, error}, classes}) => {

    const getInput = () => {
        switch (type) {
            case "label" :
                return <Label className={type} text={input.value}/>;
            case "message":
            case "error":
            case "warning":
                return <span className={type}>{input.value}</span>
            default:
                let helperText = touched && error ? error : null;
                return <TextField
                    margin="normal"
                    className={classes.textField}
                    label={label}
                    error={touched && error} {...input}
                    helperText={helperText}
                    type={type}
                    placeholder={placeholder}/>;
        }
    }

    return (
        <div className="field">
            {getInput()}
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
                    let dynamic = getRowDefs(row.dynamic, data);
                    // Not sure about it, seems form hangs around during async execution and still get events
                    // also new data might already be set
                    if (exists(dynamic)) {
                        dynamic.forEach((d) => newContent.push(d));
                    }
                }
            }
        }
    });
    return newContent;
};

const constructForm = (formDefinition, handleSubmit, data, pristine, submitting, invalid, navigate, pausedPath, classes) => {
    let content = expandDynamic(formDefinition.content, data)
    let rows = content.map((unit, rowIndex) => {
        let rowKey = formDefinition.name + ":r" + rowIndex;
        let controls = unit.map((control, itemIndex) => {
            let controlType = Object.getOwnPropertyNames(control)[0];
            let itemKey = rowKey + ":" + itemIndex;
            switch (controlType) {
                case "divider":
                    return <Divider inset/>
                case "label":
                    return <Label className={controlType} key={itemKey} text={control[controlType].text}/>;
                case "heading":
                    return <label className={controlType} key={itemKey}><Typography key={"t" + itemKey}
                                                                                    type="subheading">{control[controlType].text}</Typography></label>;
                case "field":
                    let field = control.field;
                    return <Field key={field.property}
                                  name={field.property}
                                  type={(field.type === null || field.type === undefined) ? 'text' : field.type}
                                  placeholder={field.placeholder}
                                  component={renderField}
                                  classes={classes}
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
                {exists(formDefinition.cancel) && <Button onClick={() => {
                    navigate(pausedPath)
                }}>{formDefinition.cancel}</Button>}
                <Button disabled={pristine || submitting || invalid}
                        type="submit">{formDefinition.submit.caption}</Button>
            </div>
        </Toolbar>
    </form>;
};

class FormComponent extends React.Component {


    componentWillReceiveProps({pausedPath, navigate, snack, data: {saved, message}}) {
        if (saved === true) {
            if (exists(message) && message.length > 0) {
                snack(message);
            }
            navigate(pausedPath);
        }
    }

    render() {
        let {formDefinition, handleSubmit, data, pristine, submitting, invalid, navigate, pausedPath, classes} = this.props;
        return constructForm(formDefinition, handleSubmit, data, pristine, submitting, invalid, navigate, pausedPath, classes);
    }
}


const Formed = reduxForm({validate})(FormComponent);


export default withStyles(styles)(Formed);

