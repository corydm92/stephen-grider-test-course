import React, { createContext, useReducer } from 'react';
import rootReducer from 'reducers/';

const initialState = {
	comments: [],
	dummy: '',
};

const store = createContext({});

const { Provider } = store;

const StoreProvider = (props) => {
	const [state, dispatch] = useReducer(rootReducer, initialState);

	return <Provider value={{ state, dispatch }}>{props.children}</Provider>;
};

export { store, StoreProvider, initialState };
