import {connect} from 'react-redux'
import HeaderComponent from '../components/HeaderComponent';
import {initiateServiceCall} from '../remote/services';
import {exists} from '../util';

const mapStateToProps = (state) => {
    let token = localStorage.getItem("access_token");
    let isLoggedIn = exists(token) && token.length > 0 && token !== "null";
    let canChangeLocale = exists(state.locale) && exists(state.locale.locales) && exists(state.locale.locales.available) && state.locale.locales.available.length > 0
    return Object.assign({}, state.header, {
        locale: state.locale,
        isLoggedIn: isLoggedIn,
        canChangeLocale: canChangeLocale
    });
};

const mapDispatchToProps = (dispatch) => {
    return {
        logout: () => {
            localStorage.removeItem("access_token");
            initiateServiceCall("navigation", {oldPath: "", newPath: window.location.pathname}, dispatch);
        },
        chooseLocale: (currentLocale, newLocale) => {
            if (newLocale !== currentLocale) {
                localStorage.setItem("locale", newLocale);
                initiateServiceCall("navigation", {oldPath: "", newPath: window.location.pathname}, dispatch);
            }
        }
    }
};

let Header = connect(
    mapStateToProps,
    mapDispatchToProps
)(HeaderComponent);

export default Header;
