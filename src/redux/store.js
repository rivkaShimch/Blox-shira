import { Component } from "react";
import { createStore, combineReducers, applyMiddleware } from "redux";
import canvasDetails from './reducers/CanvasDetailsStore'
import displayComponents from './reducers/ComponentsDisplayStore'
import { composeWithDevTools } from 'redux-devtools-extension';

import {
    getImageFromServer
} from './middleware/crud';

const state = {
    Canvas:
    {
        canvasDetails: canvasDetails.canvasDetails,

    },
    Components:
    {
        displayComponents: displayComponents.displayComponents

    }

}


const reducer = combineReducers({ canvasDetails, displayComponents });

const store = createStore(
    reducer,
    composeWithDevTools(applyMiddleware(getImageFromServer))
)
window.store = store;
// store.dispatch(actions.getImageFromServer())

export default store;

// store.dispatch({ type: 'FIREBASE_INIT' });
