
import { createStore, combineReducers, applyMiddleware } from "redux";
import canvasDetails from './reducers/CanvasDetailsStore'
import displayComponents from './reducers/ComponentsDisplayStore'
import loginStatus from './reducers/ComponentsDisplayStore'

import user from './reducers/UserDetailsStore'
import { composeWithDevTools } from 'redux-devtools-extension';
import { auth_state } from './actions/userAction'
import {
    getImageFromServer,
    onAuthStateChanged,
    checkPermission,
    sendTemplateImageToServer
} from './middleware/crud';

const state = {
    Canvas:
    {
        canvasDetails: canvasDetails.canvasDetails,

    },
    Components:
    {
        displayComponents: displayComponents.displayComponents,
        loginStatus: loginStatus.loginStatus

    },
    User:
    {
        user: user.user
    }

}


const reducer = combineReducers({ canvasDetails, displayComponents, user, loginStatus });

const store = createStore(
    reducer,
    composeWithDevTools(applyMiddleware(getImageFromServer, sendTemplateImageToServer, onAuthStateChanged, checkPermission))
)
window.store = store;
store.dispatch(auth_state())

export default store;

// store.dispatch({ type: 'FIREBASE_INIT' });
