import React from 'react';
import {render} from 'react-dom';
import {createStore, applyMiddleware} from 'redux';
import reducer from './reducers';
import thunkMiddleware from 'redux-thunk';
import {initiateServiceCall} from './remote/services';
import {Provider} from 'react-redux';
import {
    BrowserRouter,
    Route
} from 'react-router-dom'

import Application from './containers/ApplicationContainer';
import Header from './containers/HeaderContainer';
import Screen from './containers/ScreenContainer';

import Snack from './containers/SnackContainer'
import Alert from './containers/AlertContainer'
import Grid from 'material-ui/Grid';


import injectTapEventPlugin from 'react-tap-event-plugin';

// Needed for onTouchTap
// http://stackoverflow.com/a/34015469/988941
injectTapEventPlugin();


let createStoreWithMiddleware = applyMiddleware(thunkMiddleware)(createStore);

let store = createStoreWithMiddleware(reducer, {
        application: {
            title: "Loading ...",
            navigation: {
                currentUrl: window.location.pathname,
                targetUrl: ""
            }
        }
    }
);

render(
    <Provider store={store}>
        <BrowserRouter>
            <Route path="/:appname?/:screen?/:key?" render={(props) => (
                <Grid className="app" container spacing={24}>
                    <Application {...props}/>
                    <Header {...props}/>
                    <Screen {...props}>
                    </Screen>
                    <Alert/>
                    <Snack/>

                </Grid>
            )}/>
        </BrowserRouter>
    </Provider>,
    document.getElementById('root')
);


initiateServiceCall("navigation", {oldPath: "", newPath: window.location.pathname}, store.dispatch);




