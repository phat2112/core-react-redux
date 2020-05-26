import {all} from 'redux-saga/effects'
import userSaga from 'Stores/User/Sagas'

export default function* rootSaga(){
	yield all([
		userSaga(),
	])
}
