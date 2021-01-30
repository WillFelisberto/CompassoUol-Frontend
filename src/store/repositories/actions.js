import { REQUEST_REPOSITORIES, CLEAR_REPOSITORIES } from './constants';

export function requestRepositories(user) {
	return { type: REQUEST_REPOSITORIES, user: user };
}
export function clearRepositories() {
	return { type: CLEAR_REPOSITORIES };
}
