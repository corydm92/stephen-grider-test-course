import { initialState } from 'store';
import { SAVE_COMMENT, FETCH_COMMENTS } from 'actions/types';

export default function commentsReducer(state = initialState.comments, action) {
	console.log('inside reducer', action);
	switch (action.type) {
		case SAVE_COMMENT:
			return [...state, action.payload];
		case FETCH_COMMENTS:
			return [...state, ...action.payload];
		default:
			return state;
	}
}
