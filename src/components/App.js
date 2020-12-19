import React, { useContext, useEffect } from 'react';
import { store } from '../store';
import CommentBox from 'components/CommentBox';
import CommentList from 'components/CommentList';

export default function App() {
	const { state, dispatch } = useContext(store);

	useEffect(() => {
		// dispatch({}); // TODO - Why do we need to dispatch to get our initial state?
	}, [dispatch]);

	useEffect(() => console.log(state));
	return (
		<div>
			<CommentBox />
			<CommentList />
		</div>
	);
}
