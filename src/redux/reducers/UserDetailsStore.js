
import { OPERATE } from '../actions/userAction';

import produce from 'immer'

const initialState = {
    user: '',
    checkPermission: '',
    onAutoStateChanged: ''

};

export default produce((state, action) => {
    switch (action.type) {
        case 'SET_USER':
            state.user = action.payload;
            break;
        case 'CHECK_PERMISSION':
            state.checkPermission = action.payload;
            break;
        case 'ON_AUTH_STATE_CHANGED':
            state.onAutoStateChanged = action.payload
            break;
        default:
            return state;

    }
}, initialState);