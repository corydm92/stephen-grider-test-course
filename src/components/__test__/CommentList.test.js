import React from 'react';
import { mount } from 'enzyme';
import CommentList from 'components/CommentList';
import { StoreProvider } from 'store';

let wrapper;
beforeEach(() => {
	wrapper = mount(
		<StoreProvider>
			<CommentList />
		</StoreProvider>
	);
});

it('creates one LI per comment', () => {});
