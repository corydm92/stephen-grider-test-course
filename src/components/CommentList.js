import React, { useContext } from 'react';
import { store } from 'store';

export default function CommentList() {
	const { state } = useContext(store);

	const renderComments = () => {
		return state.comments.map((comment, index) => (
			<li key={index}>{comment}</li>
		));
	};

	return (
		<div>
			<ul>{renderComments()}</ul>
		</div>
	);
}
