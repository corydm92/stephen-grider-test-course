const dummyReducer = (state = 'not updated', action) => {
	switch (action.type) {
		case 'UPDATE_DUMMY': {
			return action.payload;
		}
		default:
			return state;
	}
};

export default dummyReducer;
