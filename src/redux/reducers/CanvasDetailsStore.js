
import { OPERATE } from '../actions/canvasActions';

import produce from 'immer'

const initialState = {
  canvasDetails: {
    name: "Template Name",
    titles: "",
    dataURL: "",
    imageTemplates: [],

    canvas_width: 600,
    canvas_height: 400,
    background_img_name: '',
    background_img_path: '',
    title_size: '',
    title_color: '',
    title_type: '',
    title_position_x: 50,
    title_position_y: 50,
    element_img: '',
    element_position_x: '',
    element_position_y: '',
    element_width: '',
    element_height: ''
  }

};

export default produce((state, action) => {
  switch (action.type) {
    case 'IMAGE_TEMPLATE':
      state.canvasDetails.imageTemplates = state.canvasDetails.imageTemplates.slice();
      state.canvasDetails.imageTemplates.push(action.payload);
      break;
    case 'NAME_CANVAS':
      state.canvasDetails.name = action.payload;
      break;
    case 'TITLES_CANVAS':
      state.canvasDetails.titles = action.payload;
      break;
    case 'DATA_URL_CANVAS':
      state.canvasDetails.dataURL = action.payload;
      break;
    case 'CANVAS_WIDTH':
      state.canvasDetails.canvas_width = action.payload;
      break;

    case 'CANVAS_HEIGHT':
      state.canvasDetails.canvas_height = action.payload;
      break;
    case 'BACKGROUND_IMG_NAME_CANVAS':
      state.canvasDetails.background_img_name = action.payload;
      break;
    case 'BACKGROUND_IMG_PATH_CANVAS':
      state.canvasDetails.background_img_path = action.payload;
      break;
    case 'TITLE_SIZE_CANVAS':
      state.canvasDetails.title_size = action.payload;
      break;
    case 'TITLE_COLOR_CANVAS':
      state.canvasDetails.title_color = action.payload;
      break;
    case 'TITLE_TYPE_CANVAS':
      state.canvasDetails.title_type = action.payload;
      break;
    case 'TITLE_POSITION_X_CANVAS':
      state.canvasDetails.title_position_x = action.payload;
      break;
    case 'TITLE_POSITION_Y_CANVAS':
      state.canvasDetails.title_position_y = action.payload;
      break;
    case 'ELEMENT_IMG_CANVAS':
      state.canvasDetails.element_img = action.payload;
      break;
    case 'ELEMENT_POSITION_X_CANVAS':
      state.canvasDetails.element_position_x = action.payload;
      break;
    case 'ELEMENT_POSITION_Y_CANVAS':
      state.canvasDetails.element_position_y = action.payload;
      break;
    case 'ELEMENT_WIDTH_CANVAS':
      state.canvasDetails.element_width = action.payload;
      break;
    case 'ELEMENT_HEIGHT_CANVAS':
      state.canvasDetails.element_height = action.payload;
      break;
    default:
      return state;

  }
}, initialState);