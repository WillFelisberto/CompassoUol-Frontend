import { put, call, takeLatest } from 'redux-saga/effects';
import { api } from '../../api/services';

import {
	FAILURE_REPOSITORIES,
	REQUEST_REPOSITORIES,
	SUCCESS_REPOSITORIES,
} from './constants';

async function searchRepositories(user) {
	try {
		const data = await api.get(`users/${user}/repos`);
		return data.data;
	} catch (error) {
		throw error;
	}
}

function* getRespositories(action) {
	try {
		const response = yield call(searchRepositories, action.user);
		yield put({ type: SUCCESS_REPOSITORIES, payload: { data: response } });
	} catch (err) {
		yield put({
			type: FAILURE_REPOSITORIES,
			payload: { message: err.message },
		});
	}
}

// eslint-disable-next-line import/no-anonymous-default-export
export default function* () {
	yield takeLatest(REQUEST_REPOSITORIES, getRespositories);
}
