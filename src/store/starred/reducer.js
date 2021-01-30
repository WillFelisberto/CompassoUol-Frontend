import {
	FAILURE_STARRED,
	REQUEST_STARRED,
	SUCCESS_STARRED,
	CLEAR_STARRED,
} from './constants';

const INITIAL_STATE = {
	data: [],
	loading: false,
	error: false,
	loaded: false,
	message: '',
};

export default function starredReducer(state = INITIAL_STATE, action) {
	switch (action.type) {
		case REQUEST_STARRED:
			return { ...state, loading: true };
		case SUCCESS_STARRED:
			return {
				...state,
				data: action.payload.data,
				loading: false,
				loaded: true,
				error: false,
			};
		case FAILURE_STARRED:
			return {
				...state,
				data: [],
				loading: false,
				loaded: true,
				error: true,
				message: action.payload.message,
			};

		case CLEAR_STARRED:
			return {
				...state,
				data: [],
				loading: false,
				loaded: false,
				error: false,
			};
		default:
			return state;
	}
}
