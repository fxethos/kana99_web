export const login = (uuid) => ({
    type: 'LOGIN',
    uuid
});

export const logout = () => ({
    type:'LOGOUT'
});