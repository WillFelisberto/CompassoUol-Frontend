import {
	FAILURE_REPOSITORIES,
	REQUEST_REPOSITORIES,
	SUCCESS_REPOSITORIES,
	CLEAR_REPOSITORIES,
} from './constants';

const INITIAL_STATE = {
	data: [],
	loading: false,
	error: false,
	loaded: false,
	message: '',
};

export default function repositoriesReducer(state = INITIAL_STATE, action) {
	switch (action.type) {
		case REQUEST_REPOSITORIES:
			return { ...state, loading: true };
		case SUCCESS_REPOSITORIES:
			return {
				...state,
				data: action.payload.data,
				loading: false,
				loaded: true,
				error: false,
			};
		case FAILURE_REPOSITORIES:
			return {
				...state,
				data: [],
				loading: false,
				loaded: true,
				error: true,
				message: action.payload.message,
			};

		case CLEAR_REPOSITORIES:
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
