import { REQUEST_USER, CLEAR_USER } from './constants';

export function requestUser(user) {
	return { type: REQUEST_USER, user: user };
}
export function clearUser() {
	return { type: CLEAR_USER };
}
