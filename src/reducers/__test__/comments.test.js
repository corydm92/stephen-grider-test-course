import commentsReducer from 'reducers/comments';
import { SAVE_COMMENT } from 'actions/types';

it('handles actions of type SAVE_COMMENT', () => {
	const action = {
		type: SAVE_COMMENT,
		payload: 'test comment',
	};

	// Need to pass in initial state when testing, otherwise it will try to take action as it's first argument
	const newState = commentsReducer([], action);

	// A few different ways to handle this
	// expect(newState).toContain('test comment');
	expect(newState).toEqual(['test comment']);
});
