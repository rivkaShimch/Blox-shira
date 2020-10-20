import { Component } from "react";
import { createStore, combineReducers, applyMiddleware } from "redux";
import canvasDetails from './reducers/CanvasDetailsStore'
import displayComponents from './reducers/ComponentsDisplayStore'
// import playerDetails from './reducers/PlayerDetailsStore';
// import videosFromServer from './reducers/VideoDetailsStore';
// import {createStore,}

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


const reducer = combineReducers({ displayComponents });
const store = createStore(reducer);
window.store = store;
export default store;

// store.dispatch({ type: 'FIREBASE_INIT' });

