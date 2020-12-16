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
