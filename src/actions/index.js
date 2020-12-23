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

export async function fetchComments(dispatch) {
	const response = await axios.get(
		'https://jsonplaceholder.typicode.com/comments'
	);

	console.log(response);

	// const comments = response.data.slice(0, 5);

	const comments = [1, 2, 3, 4, 5, 6].slice(0, 5);

	// console.log(comments);
	return dispatch({ type: FETCH_COMMENTS, payload: comments });
}
