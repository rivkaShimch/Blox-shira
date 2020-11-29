export function setTempElementImg(img) {

    return {
        type: 'TEMP_ELEMENT_IMG',
        payload: img

    };
}
export function setTempFd(fd) {

    return {
        type: 'TEMP_FD',
        payload: fd
    };
}
export function addTemplateImage(data) {

    return {
        type: 'IMAGE_TEMPLATE',
        payload: data
    };
}
export function setName(name) {

    return {
        type: 'NAME_CANVAS',
        payload: name
    };
}
export function setElementsICanvas(i) {

    return {
        type: 'ELEMENTS_I_CANVAS',
        payload: i
    };
}
export function setElementsCanvasServer(element) {

    return {
        type: 'SET_ELEMENTS_CANVAS',
        payload: element
    };
}
export function addElementsCanvas(element) {


    return {
        type: 'ADD_ELEMENTS_CANVAS',
        payload: element
    };
}
export function updateElementsCanvas(element, i) {

    return {
        type: 'UPDATE_ELEMENTS_CANVAS',
        payload: element,
        counter: i
    };
}
export function setTitlesICanvas(i) {

    return {
        type: 'TITLES_I_CANVAS',
        payload: i
    };
}
export function setTitlesTextCanvas(title, i) {

    return {
        type: 'TITLES_TEXT_CANVAS',
        payload: title,
        i: i
    };
}
export function setTitlesCanvasServer(title) {

    return {
        type: 'SET_TITLES_CANVAS',
        payload: title
    };
}
export function setTitlesCanvas(title) {

    return {
        type: 'TITLES_CANVAS',
        payload: title
    };
}
export function removedTitlesCanvas(i) {

    return {
        type: 'REMOVE_TITLES_CANVAS',
        // payload: title,
        counter: i
    };
}
export function setUpdateTitlesCanvas(title, i) {

    return {
        type: 'UPDATE_TITLES_CANVAS',
        payload: title,
        counter: i
    };
}
export function setButtonsICanvas(i) {

    return {
        type: 'BUTTONS_I_CANVAS',
        payload: i
    };
}
export function setShapesICanvas(i) {

    return {
        type: 'SHAPES_I_CANVAS',
        payload: i
    };
}
export function setShapePoints(shape_points) {

    return {
        type: 'SHAPES_POINTS',
        payload: shape_points
    };
}
export function setButtonsCanvasServer(button) {

    return {
        type: 'SET_BUTTONS_CANVAS',
        payload: button
    };
}
export function setButtonsCanvas(button) {

    return {
        type: 'BUTTONS_CANVAS',
        payload: button
    };
}
export function removedButtonsCanvas(i) {

    return {
        type: 'REMOVE_BUTTONS_CANVAS',
        // payload: button,
        counter: i
    };
}
export function setUpdateButtonsCanvas(button, i) {

    return {
        type: 'UPDATE_BUTTONS_CANVAS',
        payload: button,
        counter: i
    };
}
export function setUpdateShapesCanvas(shape, i) {

    return {
        type: 'UPDATE_SHAPES_CANVAS',
        payload: shape,
        counter: i
    };
}


export function setDataUrl(url) {

    return {
        type: 'DATA_URL_CANVAS',
        payload: url
    };
}
export function setCanvasWidth(width) {
    return {
        type: 'TYPE_CANVAS',
        payload: width
    };
}
export function setCanvasHeight(height) {

    return {
        type: 'TYPE_CANVAS',
        payload: height
    };
}
export function setBackgroundImgName(back_img_n) {

    return {
        type: 'BACKGROUND_IMG_NAME_CANVAS',
        payload: back_img_n
    };
}
export function setBackgroundImgPath(back_img_p) {

    return {
        type: 'BACKGROUND_IMG_PATH_CANVAS',
        payload: back_img_p
    };
}
export function setTitleAlign(title_align, i) {

    return {
        type: 'TITLE_ALIGN_CANVAS',
        payload: title_align,
        id: i
    };
}
export function setTitleSize(title_size, i) {

    return {
        type: 'TITLE_SIZE_CANVAS',
        payload: title_size,
        id: i
    };
}
export function setTitleWidth(title_width, i) {

    return {
        type: 'TITLE_WIDTH_CANVAS',
        payload: title_width,
        id: i
    };
}
export function setTitleHeight(title_height, i) {
    return {
        type: 'TITLE_HEIGHT_CANVAS',
        payload: title_height,
        id: i
    };
}
export function setTitleColor(title_color, i) {
    return {
        type: 'TITLE_COLOR_CANVAS',
        payload: title_color,
        id: i

    };
}
export function setTitleType(title_type) {

    return {
        type: 'TITLE_TYPE_CANVAS',
        payload: title_type
    };
}
export function setTitlePositionX(title_position_x) {

    return {
        type: 'TITLE_POSITION_X_CANVAS',
        payload: title_position_x
    };
}
export function setTitlePositionY(title_position_y) {
    return {
        type: 'TITLE_POSITION_Y_CANVAS',
        payload: title_position_y
    };
}






export function setButtonWidth(button_width, i) {

    return {
        type: 'BUTTON_WIDTH',
        payload: button_width,
        id: i
    };
}
export function setButtonHeight(button_height, i) {
    return {
        type: 'BUTTON_HEIGHT_CANVAS',
        payload: button_height,
        id: i
    };
}
export function setButtonColor(button_color, i) {
    return {
        type: 'BUTTON_FILL',
        payload: button_color,
        id: i

    };
}
export function setShapeColor(shape_color, i) {
    return {
        type: 'SHAPE_FILL',
        payload: shape_color,
        id: i

    };
}
// shadowBlur: 10,
export function setButtonCorners(button_cornerRadius, i) {
    return {
        type: 'BUTTON_CORNERS',
        payload: button_cornerRadius,
        id: i

    };
}
export function setButtonStroke(button_stroke, i) {
    return {
        type: 'BUTTON_STROKE_COLOR',
        payload: button_stroke,
        id: i

    };
}
export function setButtonStrokeWidth(button_strokeWidth, i) {
    return {
        type: 'BUTTON_STROKE_WIDTH',
        payload: button_strokeWidth,
        id: i

    };
}
export function setButtonShadowBlur(shadowBlur, i) {
    return {
        type: 'BUTTON_SHADOW_BLUR',
        payload: shadowBlur,
        id: i

    };
}
export function setShapeShadowBlur(shadowBlur, i) {
    return {
        type: 'SHAPE_SHADOW_BLUR',
        payload: shadowBlur,
        id: i

    };
}
export function setButtonPositionX(button_position_x) {

    return {
        type: 'BUTTON_POSITION_X_CANVAS',
        payload: button_position_x
    };
}
export function setButtonPositionY(button_position_y) {
    return {
        type: 'BUTTON_POSITION_Y_CANVAS',
        payload: button_position_y
    };
}
export function setElementImg(element_img) {

    return {
        type: 'ELEMENT_IMG_CANVAS',
        payload: element_img
    };
}
export function setElementPositionX(element_position_x) {
    return {
        type: 'ELEMENT_POSITION_X_CANVAS',
        payload: element_position_x
    };
}
export function setElementPositionY(element_position_y) {
    return {
        type: 'ELEMENT_POSITION_Y_CANVAS',
        payload: element_position_y
    };
}
export function setElementWidth(element_width) {

    return {
        type: 'ELEMENT_WIDTH_CANVAS',
        payload: element_width
    };
}
export function setElementHeight(element_height) {

    return {
        type: 'ELEMENT_WIDTH_CANVAS',
        payload: element_height
    };
}
export function setBackgroundColor(background_color) {

    return {
        type: 'BACKGROUND_CANVAS',
        payload: background_color
    };
}
export function setCounterTitles(counter) {

    return {
        type: 'COUNTER_TITELS',
        payload: counter
    };
}
export function updateTextPreHistory(i, updateField) {

    return {
        type: 'UPDATE_TEXT_PRE_HISTORY',
        payload: i,
        updateField: updateField
    };
}
export function updateTextFollowingHistory(i, fieldType, updateField) {

    return {
        type: 'UPDATE_TEXT_FOLLOWING_HISTORY',
        payload: i,
        fieldType: fieldType,
        updateField: updateField
    };
}
export function getTextPreHistory() {

    return {
        type: 'GET_TEXT_PRE_HISTORY'
    };
}
export function getTextFollowingHistory() {

    return {
        type: 'GET_TEXT_FOLLOWING_HISTORY'
    };
}
export function addPreHistory(item) {

    return {
        type: 'ADD_PRE_HISTORY',
        payload: item
    };
}
export function getFirstItem() {

    return {
        type: 'GET_FIRST_ITEM'
    };
}
export function uploadImageTofileServer(fd) {

    return {
        type: 'UPLOAD_IMAGE',
        fd: fd
    };
}
export function setCounterButtons(counter) {

    return {
        type: 'COUNTER_BUTTONS',
        payload: counter
    };
}
export function setCounterShapes(counter) {

    return {
        type: 'COUNTER_SHAPES',
        payload: counter
    };
}
export function setShapesCanvas(shape) {

    return {
        type: 'SHAPES_CANVAS',
        payload: shape
    };
}
export function setShapeStrokeWidth(shape_strokeWidth, i) {
    return {
        type: 'SHAPE_STROKE_WIDTH',
        payload: shape_strokeWidth,
        id: i

    };
}
export function setShapeStroke(shape_stroke, i) {
    return {
        type: 'SHAPE_STROKE_COLOR',
        payload: shape_stroke,
        id: i
    };
}



