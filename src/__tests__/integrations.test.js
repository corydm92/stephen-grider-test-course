import React from 'react';
import { mount } from 'enzyme';
import { StoreProvider } from 'store';
import App from 'components/App';

import moxios from 'moxios';
// Its sole purpose is to fake out requests. We can tell this library to watch for an axios request, and if it gets one we will trick axios into thinking it instantly gets a response. No network request will be created, so the instance axios trys to make an http request moxios is going to axe that and say "nope, youre not allowed to make network requests", and instead of denying it or failing the request, moxios will turn around and say "Hey, dont worry about it the request didn't actually get issued but here is some data that you should use in place of the response"

it('can fetch a list of comments and display them', () => {
	// Attempt to render the entire app
	const wrapper = mount(
		<StoreProvider>
			<App />
		</StoreProvider>
	);

	console.log(wrapper.debug());
	// Find the 'fetchComments' button and click it
	wrapper.find('[data-test="fetch-button"]').simulate('click');

	// Expect to find a list of comments
	expect(wrapper.find('li').length).toEqual(5);

	// Trying to simulate an api call inside the console will cause the test to break. That is because the JSDOM API is a 'fake' browser we are runing our components in, so when we try to make an axios request to the outside world it fails because we are working in a fake environment. We dont have the ability to make ajax requests from inside our test suite when we are making use of JSDOM.
});
