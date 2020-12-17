import React from 'react';
import { mount } from 'enzyme';
import CommentBox from 'components/CommentBox';

let wrapper;

beforeEach(() => {
	wrapper = mount(<CommentBox />);
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
	expect(wrapper.find('button').length).toEqual(1);
});

/** Simulating Events
 * 1.) Find the textarea element
 * 2.) Simulate a 'change' event
 * 3.) Provide a fake event object
 * 4.) Force the component to update
 * 5.) Asert that the textareas value has changed
 */

it('has a text area that users can type in', () => {
	// https://enzymejs.github.io/enzyme/docs/api/ShallowWrapper/simulate.html
	wrapper
		.find('textarea')
		.simulate('change', { target: { value: 'new comment' } }); // use HTML nomenclature, react uses the 'on' prefix for its events (ex: onChange, onClick)

	// This is step 4:
	// https://enzymejs.github.io/enzyme/docs/api/ShallowWrapper/update.html

	// wrapper.update(); // This actually doesn't seem necessary, able to find the value without the update() method.

	// Instead of trying to figure out what the textarea value has, it makes more sense to test that the <textarea> component receives the correct value prop.
	//Documentation on prop() - Returns the prop value for the root node of the wrapper with the provided key. It must be a single-node wrapper.

	expect(wrapper.find('textarea').prop('value')).toEqual('new comment');
});

it('submits the form and clears the text area', () => {
	wrapper
		.find('textarea')
		.simulate('change', { target: { value: 'new comment' } }); // use HTML nomenclature, react uses the 'on' prefix for its events (ex: onChange, onClick)

	expect(wrapper.find('textarea').prop('value')).toEqual('new comment');

	wrapper.find('form').simulate('submit');

	expect(wrapper.find('textarea').prop('value')).toEqual('');
});
