import React from 'react';
import ReactDOM from 'react-dom';
import App from '../App';

/**
 * App Test
 * @function it > Global Function, able to be called without an import
 * @param {string} > Describes what the test does
 * @param {function} > Block of code to execute your test
 */

it('shows a comment box', () => {
	const div = document.createElement('div'); // document is making use of the JSDOM library to create a fake browser environment for react to run inside of.

	ReactDOM.render(<App />, div);

	// Looks inside the div
	// Checks to see if comment box is in there
	expect(div.innerHTML).toContain('Comment Box');

	ReactDOM.unmountComponentAtNode(div); // If we dont preform cleanup, this component will stay around for as long as the test suite remains running
});
