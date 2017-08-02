import {connect} from 'react-redux';
import FormComponent from '../components/FormComponent';
import {callService} from '../actions/screen'
import {createSnack} from '../actions/snack'
import {initiateServiceCall} from '../remote/services';


const mapStateToProps = (state, ownProps) => {
    return {
        formDefinition: state.screen[ownProps.unitIndex].form,
        unitKey: ownProps.unitKey,
        data: state.data,
        pausedPath: state.application.navigation.pausedPath,
    };
};

const mapDispatchToProps = (dispatch) => {
    return {
        onSubmit: (params) => {
            dispatch(callService(params.service, params.submit))
        },
        navigate:function(to){
            initiateServiceCall("navigation", {oldPath: window.location.pathname, newPath: to}, dispatch)
        },
        snack:function(text){
            dispatch(createSnack(text));
        }
    }
};


const Form = connect(
    mapStateToProps,
    mapDispatchToProps
)(FormComponent);


export default Form;
