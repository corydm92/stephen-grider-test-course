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

it('creates one LI per comment', () => {});
