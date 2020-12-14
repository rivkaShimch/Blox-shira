export function setUser(user) {
    return {
        type: 'SET_USER',
        payload: user
    };
}
export function setCheckPermission(data) {
    return {
        type: 'CHECK_PERMISSION',
        payload: data
    };
}
export function auth_state(data) {
    return {
        type: 'ON_AUTH_STATE_CHANGED',
        payload: data
    };
}
