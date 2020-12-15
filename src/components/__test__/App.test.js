import React from 'react';
import ReactDOM from 'react-dom';
import App from 'components/App';
import { shallow } from 'enzyme';
import CommentBox from 'components/CommentBox';
import CommentList from 'components/CommentList';

/**
 * App Test
 * @function it > Global Function, able to be called without an import. Can contain 0 to tons of Expectations. In general, you will see one or two expecations in an 'it' statement.
 * @param {string} > Describes what the test does
 * @param {function} > Block of code to execute your test
 */

let wrapper; // Define any common methods within the scope of both the beforeEach() and it() blocks.

beforeEach(() => {
	wrapper = shallow(<App />);
});

// With Enzyme
it('shows a comment box', () => {
	// find() returns an array, which is why we measure the length of our expect statement.
	expect(wrapper.find(CommentBox)).toHaveLength(1);

	// You should always try to break your test to make sure you aren't receiviing a false positive (the test below should fail and tell us the received length is 1)
	// expect(wrapper.find(CommentBox)).toHaveLength(9);

	// Second way to get the length
	expect(wrapper.find(CommentBox).length).toEqual(1);
});

it('shows a comment list', () => {
	expect(wrapper.find(CommentList)).toHaveLength(1);
});

// *****************************************************************************************************************************************************************************************************************************

// Test without Enzyme
it('shows a comment box (legacy)', () => {
	const div = document.createElement('div'); // document is making use of the JSDOM library to create a fake browser environment for react to run inside of.

	ReactDOM.render(<App />, div);

	/**
	 * @function expect > Global Function (Called an Expectation)
	 * @param {Element} > Value that we are inspecting / Thing we want to verify
	 * @param {function} > Matcher statement / Designates how we want to inspect the 'subject'
	 * @param {value} > Value that we expect to see / Expected value, its what we want our 'subject' to be
	 */

	// Below is a bad test, this file is dedicated to making sure we are looking at a single layer that the app component is responsible for rendering. The test below is making an assertion inside our CommentBox component. This is wrong, because if we begin to change the value (or values) inside the CommentBox, this test will break. As the app scales, if we are asserting more than one layer deep into our component, one change may break many test files, causing us to run around and change values all over the place.

	// expect(div.innerHTML).toContain('CommentBox');

	ReactDOM.unmountComponentAtNode(div); // If we dont preform cleanup, this component will stay around for as long as the test suite remains running
});
