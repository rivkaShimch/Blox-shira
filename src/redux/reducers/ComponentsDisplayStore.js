
import { OPERATE } from '../actions/componentsActions';

import produce from 'immer'

const initialState = {
    displayComponents: {
        display_title_editor: false,
        new_canva: false
    }

};

export default produce((state, action) => {
    switch (action.type) {
        case 'DISPLAY_TITLE_EDITOR':
            state.displayComponents.display_title_editor = action.payload;
            break;
        case 'NEW_CANVA':
            state.displayComponents.new_canva = action.payload;
            break;
        default:
            return state;

    }
}, initialState);