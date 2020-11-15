
import { OPERATE } from '../actions/canvasActions';

import produce from 'immer'

const initialState = {
  canvasDetails: {
    name: "",
    titles: [],
    titles_i: 0,
    counter_titles: 0,
    dataURL: "",
    imageTemplates: [],
    removed_titles: [],

    canvas_width: 500,
    canvas_height: 400,
    background_color: '',
    temp_element_img: '',
    temp_fd: '',
    // background_img_path: '',

    title_align: '',
    title_size: '24',
    title_width: '100',
    title_height: '50',
    title_color: '',
    title_type: '',
    title_position_x: 200,
    title_position_y: 50,

    element_img: [],
    element_img_i: 0,
    element_position_x: '',
    element_position_y: '',
    element_width: '',
    element_height: ''
  }

};

export default produce((state, action) => {
  switch (action.type) {
    case 'TEMP_FD':
      state.canvasDetails.temp_fd = action.payload;
      break;
    case 'TEMP_ELEMENT_IMG':
      state.canvasDetails.temp_element_img = action.payload;
      break;
    case 'IMAGE_TEMPLATE':
      state.canvasDetails.imageTemplates = state.canvasDetails.imageTemplates.slice();
      state.canvasDetails.imageTemplates.push(action.payload);
      break;
    case 'COUNTER_TITELS':
      state.canvasDetails.counter_titles = action.payload;
      break;
    case 'NAME_CANVAS':
      state.canvasDetails.name = action.payload;
      break;
    case 'UPDATE_ELEMENTS_CANVAS':
      const elements = state.canvasDetails.element_img.slice();
      elements[action.counter] = action.payload;
      console.log("newattrs " + action.payload)
      state.canvasDetails.element_img = (elements);
      break;
    case 'SET_ELEMENTS_CANVAS':
      state.canvasDetails.element_img = action.payload;
      break;
    case 'ADD_ELEMENTS_CANVAS':
      state.canvasDetails.element_img = state.canvasDetails.element_img.slice();
      state.canvasDetails.element_img.push(action.payload);
      break;
    case 'ELEMENTS_I_CANVAS':
      state.canvasDetails.element_img_i = action.payload;
      break;
    case 'REMOVE_TITLES_CANVAS':
      const titles = state.canvasDetails.titles.slice();
      const removed_item = titles.splice(action.counter, 1);
      debugger
      // state.canvasDetails.removed_titles = state.canvasDetails.removed_titles.slice()
      state.canvasDetails.removed_titles.push(removed_item[0]);
      state.canvasDetails.titles_i -= state.canvasDetails.titles_i
      state.canvasDetails.titles = (titles);
      console.log("removed array" + state.canvasDetails.removed_titles)
      console.log("new array" + state.canvasDetails.titles)
      break;
    case 'UPDATE_TITLES_CANVAS':
      const texts = state.canvasDetails.titles.slice();
      texts[action.counter] = action.payload;
      console.log("newattrs " + action.payload)
      state.canvasDetails.titles = (texts);
      break;
    case 'SET_TITLES_CANVAS':
      state.canvasDetails.titles = action.payload;
      // state.canvasDetails.titles.push(action.payload);
      break;
    case 'TITLES_CANVAS':
      state.canvasDetails.titles = state.canvasDetails.titles.slice();
      state.canvasDetails.titles.push(action.payload);
      break;
    case 'TITLES_I_CANVAS':
      state.canvasDetails.titles_i = action.payload;
      break;
    case 'TITLES_TEXT_CANVAS':
      // debugger
      console.log("text id " + action.i)
      state.canvasDetails.titles[action.i].text = action.payload;
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
    case 'BACKGROUND_CANVAS':
      state.canvasDetails.background_color = action.payload;
      break;
    case 'BACKGROUND_IMG_PATH_CANVAS':
      state.canvasDetails.background_img_path = action.payload;
      break;
    case 'TITLE_ALIGN_CANVAS':
      state.canvasDetails.titles[action.id].align = action.payload;
      break;

    case 'TITLE_SIZE_CANVAS':
      state.canvasDetails.titles[action.id].fontSize = action.payload;
      break;
    case 'TITLE_WIDTH_CANVAS':
      state.canvasDetails.titles[action.id].width = action.payload;
      break;
    case 'TITLE_HEIGHT_CANVAS':
      state.canvasDetails.titles[action.id].height = action.payload;
      break;
    case 'TITLE_COLOR_CANVAS':
      state.canvasDetails.titles[action.id].fill = action.payload;
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