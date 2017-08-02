import {connect} from 'react-redux'
import AlertDialog from '../components/AlertDialog'

const mapStateToProps = (state) => {
    return Object.assign({}, state.alert);
};




let Alert = connect(
    mapStateToProps
)(AlertDialog);

export default Alert;
