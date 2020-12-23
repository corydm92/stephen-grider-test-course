import { SAVE_COMMENT, FETCH_COMMENTS } from 'actions/types';
import axios from 'axios';

// https://stackoverflow.com/questions/59438480/react-context-custom-middleware-instead-of-redux
export const applyApiMiddleware = (dispatch) => (action) => {
	switch (action.type) {
		case FETCH_COMMENTS:
			axios
				.get('https://jsonplaceholder.typicode.com/comments')
				.then((response) => {
					const comments = response.data
						.slice(0, 5)
						.map((comment) => comment.name);
					return dispatch({ type: FETCH_COMMENTS, payload: comments });
				})
				.catch((error) => console.warn(error));
			break;
		default:
			dispatch(action);
	}
};

export function saveComment(comment) {
	return { type: SAVE_COMMENT, payload: comment };
}

export const fetchComments = () => {
	return { type: FETCH_COMMENTS };
};
