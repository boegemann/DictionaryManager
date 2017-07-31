import {connect} from 'react-redux';
import FormComponent from '../components/FormComponent';
import {callService} from '../actions/screen'


const mapStateToProps = (state, ownProps) => {
  return {formDefinition: state.screen[ownProps.unitIndex].form, unitKey: ownProps.unitKey, data: state.data};
};

const mapDispatchToProps = (dispatch) => {
  return {
    onSubmit: (params) => {
      dispatch(callService(params.service, params.submit))
    }
  }
};


const Form = connect(
  mapStateToProps,
  mapDispatchToProps
)(FormComponent);


export default Form;
