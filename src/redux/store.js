import { createStore, combineReducers, applyMiddleware } from "redux";
import canvasDetails from './reducers/CanvasDetailsStore'
import displayComponents from './reducers/CanvasDetailsStore'
// import playerDetails from './reducers/PlayerDetailsStore';
// import videosFromServer from './reducers/VideoDetailsStore';
// import {createStore,}

const state = {
    Canvas:
    {
        canvasDetails: canvasDetails.canvasDetails,
        displayComponents:displayComponents.displayComponents

    }

}


const reducer = combineReducers({ canvasDetails });
const store = createStore(reducer);
window.store = store;
export default store;

// store.dispatch({ type: 'FIREBASE_INIT' });

