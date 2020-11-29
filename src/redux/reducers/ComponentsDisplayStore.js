
import { OPERATE } from '../actions/componentsActions';

import produce from 'immer'

const initialState = {
    displayComponents: {
        display_image_editor: false,
        display_title_editor: false,
        display_shape_editor: false,
        display_button_editor: false,
        new_canva: false,
        display_setting_page: false,
        display_editor: '',
        display_main_option: ''
    }

};

export default produce((state, action) => {
    switch (action.type) {

        case 'DISPLAY_IMAGE_EDITOR':
            state.displayComponents.display_image_editor = action.payload;
            break;
        case 'DISPLAY_TITLE_EDITOR':
            state.displayComponents.display_title_editor = action.payload;
            break;
        case 'DISPLAY_SHAPE_EDITOR':
            state.displayComponents.display_shape_editor = action.payload;
            break;
        case 'DISPLAY_SETTING_PAGE':
            state.displayComponents.display_setting_page = action.payload;
            break;
        case 'NEW_CANVA':
            state.displayComponents.new_canva = action.payload;
            break;
        case 'DISPLAY_EDITOR':
            state.displayComponents.display_editor = action.payload;
            break;
        case 'DISPLAY_MAIN_OPTION':
            state.displayComponents.display_main_option = action.payload;
            break;
        default:
            return state;

    }
}, initialState);