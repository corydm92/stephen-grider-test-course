import commentsReducer from 'reducers/comments';
import dummyReducer from 'reducers/dummyReducer';

// https://stackoverflow.com/questions/59200785/react-usereducer-how-to-combine-multiple-reducers#answer-60221796
// "REF: Redux source/code" apparantly
// TODO - Try to find a good combineReducer library for react context

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
