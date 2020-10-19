
// import { OPERATE } from '../actions/canvasActions';
import { OPERATE } from '../actions/componentsActions';

import produce from 'immer'

const initialState = {
  canvasDetails: {

    name: "ll",
    title: "title01"
  },
  displayComponents: {
    display_title_editor: false
  }

};

export default produce((state, action) => {
  switch (action.type) {

    case 'NAME_CANVAS':
      state.canvasDetails.name = action.payload;
      break;
    case 'TITLE_CANVAS':
      state.canvasDetails.title = action.payload;
      break;
    case 'DISPLAY_TITLE_EDITOR':
      state.displayComponents.display_title_editor = action.payload;
      break;
    default:
      return state;

  }
}, initialState);