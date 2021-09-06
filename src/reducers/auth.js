const uuid = localStorage.getItem('uuid');
const defaultState = uuid ? {uuid} : {};

const authReducer = (state = defaultState, action) => {
    switch (action.type) {
        case 'LOGIN':
            localStorage.setItem('uuid', `${action.uuid}`);
            return {...state, uuid: action.uuid};
        case 'LOGOUT':
            localStorage.removeItem('uuid');
            return {};
        default:
            return state;
    }
}

export default authReducer;