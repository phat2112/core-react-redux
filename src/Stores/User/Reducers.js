import INITIAL_STATE from './InitialState'
import { fromJS } from 'immutable'
import * as userAction from './Actions'

const setUserList = ( state = INITIAL_STATE, action) => {
    console.log('action', action)
       switch(action.type){
           case userAction.SET_USER:
            return state.merge(
                fromJS({
                    userList: action.userList,
                })
            )
            default: 
                return state
       }
}
export const userReducer = {
    setUserList
}