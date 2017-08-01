import {connect} from 'react-redux'
import SnackComponent from '../components/SnackComponent'
import {closeSnack} from "../actions/snack"

const mapStateToProps = (state) => {
    return Object.assign({}, state.snack);
};

const mapDispatchToProps = (dispatch) => {
    return {
        closeSnack: () => {
            dispatch(closeSnack())
        }
    }
};



let Snack = connect(
    mapStateToProps,
    mapDispatchToProps
)(SnackComponent);

export default Snack;
