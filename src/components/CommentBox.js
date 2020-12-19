import React, { useState } from 'react';

export default function CommentBox() {
	const [state, setState] = useState({ comment: '' });

	const handleSubmit = (e) => {
		e.preventDefault();

		// TODO - Call an action creator
		// Save comment

		setState({ comment: '' });
	};

	return (
		<form onSubmit={handleSubmit}>
			<h4>Add a Comment</h4>
			<textarea
				value={state.comment}
				onChange={(e) => setState({ ...state, comment: e.target.value })}
			/>
			<div>
				<button>Submit Comment</button>
			</div>
		</form>
	);
}
