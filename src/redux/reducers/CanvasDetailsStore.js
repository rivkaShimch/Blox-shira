
import { OPERATE } from '../actions/canvasActions';

import produce from 'immer'

const initialState = {
  canvasDetails: {
    name: "",
    titles: [],
    titles_i: 0,
    counter_titles: 0,
    dataURL: "FFFFFFFFF",
    imageTemplates: [],
    removed_titles: [],
    //history:
    preHistory: [],
    followHistory: [],
    updateItem: '',
    firstItem: '',

    buttons: [],
    buttons_i: 0,
    counter_buttons: 0,

    shapes: [],
    shapes_i: 0,
    counter_shapes: 0,

    canvas_width: 630,
    canvas_height: 394,
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
    element_height: '',

    button_position_x: 20,
    button_position_y: 20,
    button_width: 100,
    button_height: 50,
    button_fill: '',
    button_stroke: '',
    button_strokeWidth: 1,
    button_cornerRadius: 0,
    button_shadowBlur: 0,


    shape_position_x: 20,
    shape_position_y: 20,
    shape_fill: '',
    shape_stroke: '',
    shape_strokeWidth: 1,
    shape_cornerRadius: 0,
    shape_shadowBlur: 0,
    shape_points: [],
    shape_tension: 1,


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
      state.canvasDetails.element_img = state.canvasDetails.element_img.concat(action.payload);
      break;
    case 'ELEMENTS_I_CANVAS':
      state.canvasDetails.element_img_i = action.payload;
      break;

    case 'REMOVE_TITLES_CANVAS':
      // const titles = state.canvasDetails.titles.slice();
      // const removed_item = titles.splice(action.counter, 1);

      // // state.canvasDetails.removed_titles = state.canvasDetails.removed_titles.slice()
      // state.canvasDetails.removed_titles.push(removed_item[0]);
      // state.canvasDetails.titles_i -= state.canvasDetails.titles_i
      // state.canvasDetails.titles = (titles);
      // console.log("removed array" + state.canvasDetails.removed_titles)
      const titles = state.canvasDetails.titles.slice();
      titles[action.counter].display = false;
      state.canvasDetails.titles = (titles);
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
      break;
    case 'TITLES_CANVAS':
      debugger
      state.canvasDetails.titles = state.canvasDetails.titles.concat(action.payload);
      break;
    case 'TITLES_I_CANVAS':
      state.canvasDetails.titles_i = action.payload;
      break;
    case 'TITLES_TEXT_CANVAS':

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
    case 'TITLE_POSITION_X_CANVAS'://///////
      state.canvasDetails.title_position_x = action.payload;
      break;
    case 'TITLE_POSITION_Y_CANVAS'://///////
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
    case 'UPDATE_TEXT_PRE_HISTORY':
      if (state.canvasDetails.titles[action.payload].preText === undefined) {
        state.canvasDetails.titles[action.payload].preText = []
      }
      state.canvasDetails.titles[action.payload].preText = state.canvasDetails.titles[action.payload].preText.concat(action.updateField);
      break;

    case 'UPDATE_TEXT_FOLLOWING_HISTORY':
      state.canvasDetails.element_height = action.payload;
      break;
    case 'ADD_PRE_HISTORY':
      state.canvasDetails.preHistory = state.canvasDetails.preHistory.slice();
      state.canvasDetails.preHistory.push(action.payload);
      break;
    case 'GET_LAST_PRE_HISTORY':
      state.canvasDetails.preHistory = state.canvasDetails.preHistory.slice();
      state.canvasDetails.preHistory.push(action.payload);
      break;

    case 'GET_FIRST_ITEM':
      debugger
      if ((state.canvasDetails.preHistory.length) === 0) {
        state.canvasDetails.firstItem = null
        return
      }
      const firstItemArr = state.canvasDetails.preHistory[state.canvasDetails.preHistory.length - 1]
      state.canvasDetails.preHistory = state.canvasDetails.preHistory.slice(0, state.canvasDetails.preHistory.length - 1)
      const lengthPreText = state.canvasDetails.titles[firstItemArr.text].preText.length - 1
      if (lengthPreText + 1 === 0) {
        state.canvasDetails.firstItem = null
      }
      else {
        state.canvasDetails.firstItem = state.canvasDetails.titles[firstItemArr.text].preText[lengthPreText]
      }
      break;
    case 'UPLOAD_IMAGE':
      break;



    case 'BUTTONS_I_CANVAS':
      state.canvasDetails.buttons_i = action.payload;
      break;
    case 'SHAPES_I_CANVAS':
      state.canvasDetails.shapes_i = action.payload;
      break;
    case 'SHAPES_POINTS':
      state.canvasDetails.shape_points = action.payload;
      break;
    case 'BUTTONS_CANVAS':
      state.canvasDetails.buttons = state.canvasDetails.buttons.slice();
      state.canvasDetails.buttons.push(action.payload);
      break;
    case 'COUNTER_BUTTONS':
      state.canvasDetails.counter_buttons = action.payload;
      break;


    case 'BUTTON_X':
      state.canvasDetails.button_position_x = action.payload;
      break;
    case 'BUTTON_Y':
      state.canvasDetails.button_position_y = action.payload;
      break;
    case 'BUTTON_WIDTH':
      state.canvasDetails.button_width = action.payload;
      break;
    case 'BUTTON_HEIGHT':
      state.canvasDetails.button_height = action.payload;
      break;
    case 'BUTTON_FILL':
      state.canvasDetails.buttons[action.id].fill = action.payload;
      break;
    case 'BUTTON_STROKE_COLOR':
      state.canvasDetails.buttons[action.id].stroke = action.payload;
      break;
    case 'BUTTON_STROKE_WIDTH':
      state.canvasDetails.buttons[action.id].strokeWidth = action.payload;
      break;
    case 'BUTTON_CORNERS':

      state.canvasDetails.buttons[action.id].cornerRadius = action.payload;
      break;
    case 'BUTTON_SHADOW_BLUR':

      state.canvasDetails.buttons[action.id].shadowBlur = action.payload;
      break;
    case 'SHAPE_SHADOW_BLUR':

      state.canvasDetails.shapes[action.id].shadowBlur = action.payload;
      break;
    case 'BUTTON_POSITION_X_CANVAS'://///////
      state.canvasDetails.buttons[action.id].button_position_x = action.payload;
      break;
    case 'BUTTON_POSITION_Y_CANVAS'://///////
      state.canvasDetails.buttons[action.id].button_position_y = action.payload;
      break;

    case 'SHAPES_CANVAS':

      state.canvasDetails.shapes = state.canvasDetails.shapes.concat(action.payload);
      // state.canvasDetails.shapes.push(action.payload);
      break;
    case 'SHAPE_FILL':
      state.canvasDetails.shapes[action.id].fill = action.payload;
      break;

    case 'SHAPE_STROKE_WIDTH':
      state.canvasDetails.shapes[action.id].strokeWidth = action.payload;
      break;
    case 'SHAPE_STROKE_COLOR':
      state.canvasDetails.shapes[action.id].stroke = action.payload;
      break;
    case 'COUNTER_SHAPES':
      state.canvasDetails.counter_shapes = action.payload;
      break;
    case 'REMOVE_BUTTONS_CANVAS':

      const buttons = state.canvasDetails.buttons.slice();
      buttons[action.counter].display = false;
      state.canvasDetails.buttons = (buttons);
      console.log("new array" + state.canvasDetails.buttons)
      break;
    case 'UPDATE_BUTTONS_CANVAS':
      const buttons_ = state.canvasDetails.buttons.slice();
      buttons_[action.counter] = action.payload;
      console.log("newattrs " + action.payload)
      state.canvasDetails.buttons = (buttons_);
      break;
    case 'REMOVE_SHAPES_CANVAS':
      const shapes = state.canvasDetails.shapes.slice();
      shapes[action.counter].display = false;
      state.canvasDetails.shapes = (titles);
      console.log("new array" + state.canvasDetails.shapes)
      break;
    case 'UPDATE_TITLES_CANVAS':
      const shapes_ = state.canvasDetails.shapes.slice();
      shapes_[action.counter] = action.payload;
      console.log("newattrs " + action.payload)
      state.canvasDetails.shapes = (shapes_);
      break;
    default:
      return state;

  }
}, initialState);