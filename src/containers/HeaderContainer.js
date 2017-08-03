import {connect} from 'react-redux'
import HeaderComponent from '../components/HeaderComponent';
import {initiateServiceCall} from '../remote/services';
import {exists} from '../util';

const mapStateToProps = (state) => {
    return Object.assign({}, state.header);
};

const mapDispatchToProps = (dispatch) => {
    return {
        isLoggedIn: () =>{
            let token = localStorage.getItem("access_token");
            return exists(token)&&token.length>0 && token!=="null";
        },
        logout: ()=>{
            localStorage.removeItem("access_token");
            initiateServiceCall("navigation", {oldPath: "", newPath: window.location.pathname}, dispatch);
        }
    }
};

let Header = connect(
    mapStateToProps,
    mapDispatchToProps
)(HeaderComponent);

export default Header;
