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