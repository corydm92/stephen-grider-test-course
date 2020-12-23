import React from 'react';
import { mount } from 'enzyme';
import CommentBox from 'components/CommentBox';
import { StoreProvider } from 'store.js';

let wrapper;

beforeEach(() => {
	// Add StoreProvider to allow access to `const { state, dispatch } = useContext(store)` in our component.
	wrapper = mount(
		<StoreProvider>
			<CommentBox />
		</StoreProvider>
	);
});

afterEach(() => {
	// Unmount the component from the the DOM that JSDOM creates for us
	wrapper.unmount();
});

it('has a text area and a button', () => {
	// Good way to make sure you are on the right track is to console log some of the methods we might want to use in our assertion
	// console.log(wrapper.find('textarea').length);
	// console.log(wrapper.find('button').length);

	expect(wrapper.find('textarea').length).toEqual(1);
	expect(wrapper.find('button').length).toEqual(2); // One submits text, other fetches
});

describe('text area functionality', () => {
	beforeEach(() => {
		/** Simulating Events
		 * 1.) Find the textarea element
		 * 2.) Simulate a 'change' event
		 * 3.) Provide a fake event object
		 * 4.) Force the component to update
		 * 5.) Asert that the textareas value has changed
		 */

		// https://enzymejs.github.io/enzyme/docs/api/ShallowWrapper/simulate.html
		wrapper
			.find('textarea')
			.simulate('change', { target: { value: 'new comment' } }); // use HTML nomenclature, react uses the 'on' prefix for its events (ex: onChange, onClick)

		// This is step 4:
		// https://enzymejs.github.io/enzyme/docs/api/ShallowWrapper/update.html

		// wrapper.update(); // This actually doesn't seem necessary, able to find the value without the update() method.
	});

	// We do not need a second afterEach method, because after each test, the first method will run our cleanup. We create additional beforeEaches to start our tests with slightly different configuration
	afterEach(() => {});

	it('has a text area that users can type in', () => {
		// Instead of trying to figure out what the textarea value has, it makes more sense to test that the <textarea> component receives the correct value prop.
		// Documentation on prop() - Returns the prop value for the root node of the wrapper with the provided key. It must be a single-node wrapper.

		expect(wrapper.find('textarea').prop('value')).toEqual('new comment');
	});

	it('submits the form and clears the text area', () => {
		expect(wrapper.find('textarea').prop('value')).toEqual('new comment'); // Make sure that the textarea has a value (because it is '' by default)

		// Because the button does not have an onClick event, we want to simulate that to form is submit. That will trigger the correct event, not clicking on the button.
		wrapper.find('form').simulate('submit');

		expect(wrapper.find('textarea').prop('value')).toEqual('');
	});
});
