import { put, call, takeLatest } from 'redux-saga/effects';
import { api } from '../../api/services';
import { FAILURE_USER, REQUEST_USER, SUCCESS_USER } from './constants';

async function userStarred(user) {
	try {
		const data = await api.get(`users/${user}`);
		return data.data;
	} catch (error) {
		throw error;
	}
}

function* getUser(action) {
	try {
		const response = yield call(userStarred, action.user);
		yield put({ type: SUCCESS_USER, payload: { data: response } });
	} catch (err) {
		yield put({ type: FAILURE_USER, payload: { message: err.message } });
	}
}

// eslint-disable-next-line import/no-anonymous-default-export
export default function* () {
	yield takeLatest(REQUEST_USER, getUser);
}
