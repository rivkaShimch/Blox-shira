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
export function setTitlesTextCanvas(title, id) {

    return {
        type: 'TITLES_TEXT_CANVAS',
        payload: title,
        id: id
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
export function setUpdateTitlesCanvas(title, i) {

    return {
        type: 'UPDATE_TITLES_CANVAS',
        payload: title,
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