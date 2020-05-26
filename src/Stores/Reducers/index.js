import {combineReducers} from 'redux'
import {userReducer} from 'Stores/User/Reducers'


const rootReducer = combineReducers({
    userCombineReducer:  userReducer.setUserList
})
export default rootReducer