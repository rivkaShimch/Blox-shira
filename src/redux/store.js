import { Component } from "react";
import { createStore, combineReducers, applyMiddleware } from "redux";
import canvasDetails from './reducers/CanvasDetailsStore'
import displayComponents from './reducers/ComponentsDisplayStore'

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
const store = createStore(reducer);
window.store = store;
export default store;

// store.dispatch({ type: 'FIREBASE_INIT' });

