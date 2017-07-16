import {connect} from 'react-redux';
import FormComponent from '../components/Form';
import {loginUser} from '../actions/authentication'


const mapStateToProps = (state, ownProps) => {
  return {formDefinition: state.app.screen.layout[ownProps.unitIndex].form, unitKey:ownProps.unitKey};
};

const mapDispatchToProps = (dispatch) => {
  return {
    onSubmit: (data) => {
      dispatch(loginUser(data))
    }
  }
};


const Form = connect(
  mapStateToProps,
  mapDispatchToProps
)(FormComponent);


export default Form;
