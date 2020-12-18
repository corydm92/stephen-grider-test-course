import commentsReducer from 'reducers/comments';
import dummyReducer from 'reducers/dummyReducer';

function combineReducers(reducers) {
	return (state = {}, action) => {
		const newState = {};
		for (let key in reducers) {
			newState[key] = reducers[key](state[key], action);
		}
		return newState;
	};
}

const rootReducer = combineReducers({
	comments: commentsReducer,
	dummy: dummyReducer,
});

export default rootReducer;
