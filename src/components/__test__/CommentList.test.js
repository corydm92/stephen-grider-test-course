import React from 'react';
import { mount } from 'enzyme';
import CommentList from 'components/CommentList';
import { StoreProvider } from 'store';

let wrapper;
beforeEach(() => {
	const initState = {
		comments: ['Comment 1', 'Comment 2'],
	};

	wrapper = mount(
		<StoreProvider initState={initState}>
			<CommentList />
		</StoreProvider>
	);
});

it('creates one LI per comment', () => {
	expect(wrapper.find('li').length).toEqual(2);
});

it('has correct comment text', () => {
	// Enzyme documentation says to stay away from the text() method, and to use render() instead
	// expect(wrapper.text()).toContain('Comment 1');

	// Cherio is a library similar to jQuery
	// render() Documentation - Returns a CheerioWrapper around the rendered HTML of the single node's subtree.
	// It must be a single-node wrapper.

	// You must do two tests for this, because you cannot run two toContain() methods in a single assertion.
	expect(wrapper.render().text()).toContain('Comment 1');
	expect(wrapper.render().text()).toContain('Comment 2');
});
