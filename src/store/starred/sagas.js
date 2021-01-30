import { put, call, takeLatest } from 'redux-saga/effects';
import { api } from '../../api/services';
import { FAILURE_STARRED, REQUEST_STARRED, SUCCESS_STARRED } from './constants';

async function searchStarred(user) {
	try {
		const data = await api.get(`users/${user}/starred`);
		return data.data;
	} catch (error) {
		throw error;
	}
}

function* getStarred(action) {
	try {
		const response = yield call(searchStarred, action.user);
		yield put({ type: SUCCESS_STARRED, payload: { data: response } });
	} catch (err) {
		yield put({ type: FAILURE_STARRED, payload: { message: err.message } });
	}
}

// eslint-disable-next-line import/no-anonymous-default-export
export default function* () {
	yield takeLatest(REQUEST_STARRED, getStarred);
}
