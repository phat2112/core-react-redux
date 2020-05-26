export const USER_LIST = 'USER_LIST'
export const SET_USER = 'SET_USER'

export const getUserList = (page) => ({
    type: USER_LIST,
    page
})
export const setUser = userList => ({
    type: SET_USER,
    userList,
})