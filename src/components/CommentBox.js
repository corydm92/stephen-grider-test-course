import React, { useState, useContext } from 'react';
import { store } from 'store';
import { saveComment, fetchComments } from 'actions';

export default function CommentBox() {
	const [comment, setComment] = useState('');

	const { apiDispatch } = useContext(store);

	const handleSubmit = (e) => {
		e.preventDefault();

		apiDispatch(saveComment(comment));
		setComment('');
	};

	const handleFetch = (e) => {
		e.preventDefault();
		apiDispatch(fetchComments(apiDispatch));
	};

	return (
		<form onSubmit={handleSubmit}>
			<h4>Add a Comment</h4>
			<textarea value={comment} onChange={(e) => setComment(e.target.value)} />
			<div>
				<button>Submit Comment</button>
				<button data-test="fetch-button" onClick={handleFetch}>
					Fetch Comments
				</button>
			</div>
		</form>
	);
}
