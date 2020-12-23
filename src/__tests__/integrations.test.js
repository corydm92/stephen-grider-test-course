import React from 'react';
import { mount } from 'enzyme';
import { StoreProvider } from 'store';
import App from 'components/App';

it('can fetch a list of comments and display them', () => {
	const wrapper = mount(
		<StoreProvider>
			<App />
		</StoreProvider>
	);

	// Attempt to render the entire app
	// Find the 'fetchComments' button and click it
	// Expect to find a list of comments
});
