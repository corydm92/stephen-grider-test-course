import { initialState } from 'store';

const dummyReducer = (state = initialState.dummy, action) => {
	switch (action.type) {
		case 'UPDATE_DUMMY': {
			return action.payload;
		}
		default:
			return state;
	}
};

export default dummyReducer;
