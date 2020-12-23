import { SAVE_COMMENT, FETCH_COMMENTS } from 'actions/types';
import axios from 'axios';

// https://stackoverflow.com/questions/59438480/react-context-custom-middleware-instead-of-redux
export const applyApiMiddleware = (dispatch) => (action) => {
	switch (action.type) {
		case 'TEST':
			console.log('test');
			dispatch({
				type: 'TEST',
				payload: {
					data: 'foo',
				},
			});
			break;
		case 'REQUEST_GET_USERS':
			fetch('/users', {
				method: 'GET',
			})
				.then((res) =>
					dispatch({
						type: 'REQUEST_GET_USERS_SUCCESS',
						payload: res.data,
					})
				)
				.catch((error) => console.warn(error));
			break;
		case FETCH_COMMENTS:
			break;
		default:
			console.log('DEFAULT');
			dispatch(action);
		//....
	}
};

export function saveComment(comment) {
	return { type: SAVE_COMMENT, payload: comment };
}

export async function fetchComments() {
	return { type: FETCH_COMMENTS };
}
