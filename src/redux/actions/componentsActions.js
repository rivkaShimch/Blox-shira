export function setLoginStatus(status) {
    return {
        type: 'SET_LOGIN_STATUS',
        payload: status
    };
}
export function setDisplayTitleEditor(title) {
    return {
        type: 'DISPLAY_TITLE_EDITOR',
        payload: title
    };
}
export function setDisplaySettingPage(setting) {
    return {
        type: 'DISPLAY_SETTING_PAGE',
        payload: setting
    };
}
export function setNewCanva(canva) {
    return {
        type: 'NEW_CANVA',
        payload: canva
    };
}
export function setDisplayImageEditor(image) {
    return {
        type: 'DISPLAY_IMAGE_EDITOR',
        payload: image
    };
}


export function setDisplayEditor(image) {
    return {
        type: 'DISPLAY_EDITOR',
        payload: image
    };
}
export function setDisplayMainOption(opt) {
    return {
        type: 'DISPLAY_MAIN_OPTION',
        payload: opt
    };
}