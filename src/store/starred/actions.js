import { REQUEST_STARRED, CLEAR_STARRED } from './constants';

export function requestStarred(user) {
	return { type: REQUEST_STARRED, user: user };
}
export function clearStarred() {
	return { type: CLEAR_STARRED };
}
