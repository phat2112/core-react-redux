import * as userAction from './Actions'
import {UserService} from 'Services/UserServices'
import {takeLatest, put, call} from 'redux-saga/effects'

function* getUserList(page){
    try{
        console.log('page', page)
        const res = yield call(UserService.userList, page)
        console.log('resss', res)
        yield put(userAction.setUser(res))
    }
    catch(err) {
        console.log('err')
    }
}
export default function* watcher() {
    yield takeLatest(userAction.USER_LIST, getUserList)
}