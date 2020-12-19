import React, { useState, useContext } from 'react';
import { store } from 'store';
import { saveComment } from 'actions';

export default function CommentBox() {
	const [comment, setComment] = useState('');

	const { dispatch } = useContext(store);

	const handleSubmit = (e) => {
		e.preventDefault();
		dispatch(saveComment(comment));
		setComment('');
	};

	return (
		<form onSubmit={handleSubmit}>
			<h4>Add a Comment</h4>
			<textarea value={comment} onChange={(e) => setComment(e.target.value)} />
			<div>
				<button>Submit Comment</button>
			</div>
		</form>
	);
}
