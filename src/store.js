import React, { createContext, useReducer } from 'react';
import rootReducer from 'reducers/';

// This file is what drives our app state, the brain of our store logic. So this is a very important file,
// some things we may want to extract like initial state but defining our store and defining our provider
// done here is a good way to pass this not only to index.js but also to our tests (to have perfect symmetry
// with our app state configuration).

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
