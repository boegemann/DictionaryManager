import {connect} from 'react-redux';
import FormComponent from '../components/Form';


const mapStateToProps = (state, ownProps) => {
  return {formDefinition: state.app.screen.layout[ownProps.unitIndex].form, unitKey:ownProps.unitKey};
};

const mapDispatchToProps = (dispatch) => {
  return {
    onSubmit: (data) => {
      console.log(data);
    }
  }
};


const Form = connect(
  mapStateToProps,
  mapDispatchToProps
)(FormComponent);


export default Form;
