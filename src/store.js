import React, { createContext, useReducer } from 'react';
import rootReducer from 'reducers/';
import { applyApiMiddleware } from 'actions';

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
	let { initState, children } = props; // Used in testing, if we need to pass in some default state to test our reducers.

	const [state, dispatch] = useReducer(rootReducer, initState || initialState); // We do a || operator because we are exporting the initialStat value, and cant export it if we assign { initState = initialState, children } = props;

	const apiDispatch = applyApiMiddleware(dispatch);

	return <Provider value={{ state, apiDispatch }}>{children}</Provider>;
};

export { store, StoreProvider, initialState };
