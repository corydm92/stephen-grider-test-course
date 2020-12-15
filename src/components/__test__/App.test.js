import React from 'react';
import ReactDOM from 'react-dom';
import App from '../App';

/**
 * App Test
 * @function it > Global Function, able to be called without an import. Can contain 0 to tons of Expectations. In general, you will see one or two expecations in an 'it' statement.
 * @param {string} > Describes what the test does
 * @param {function} > Block of code to execute your test
 */

it('shows a comment box', () => {
	const div = document.createElement('div'); // document is making use of the JSDOM library to create a fake browser environment for react to run inside of.

	ReactDOM.render(<App />, div);

	/**
	 * @function expect > Global Function (Called an Expectation)
	 * @param {Element} > Value that we are inspecting / Thing we want to verify
	 * @param {function} > Matcher statement / Designates how we want to inspect the 'subject'
	 * @param {value} > Value that we expect to see / Expected value, its what we want our 'subject' to be
	 */

	expect(div.innerHTML).toContain('CommentBox');

	ReactDOM.unmountComponentAtNode(div); // If we dont preform cleanup, this component will stay around for as long as the test suite remains running
});
