import {fromJS} from 'immutable'

const userList = state => {
    console.log('selector', state['userCombineReducer'].get('userList'))
    return state['userCombineReducer'].get('userList')
}

export const UserSelector = {
    userList
}