export function addTemplateImage(image, name) {

    return {
        type: 'IMAGE_TEMPLATE',
        image: image,
        name: name
    };
}
export function setName(name) {

    return {
        type: 'NAME_CANVAS',
        payload: name
    };
}
export function setTitlesCanvas(title) {

    return {
        type: 'TITLES_CANVAS',
        payload: title
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
export function setTitleSize(title_size) {

    return {
        type: 'TITLE_SIZE_CANVAS',
        payload: title_size
    };
}
export function setTitleColor(title_color) {

    return {
        type: 'TITLE_COLOR_CANVAS',
        payload: title_color
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