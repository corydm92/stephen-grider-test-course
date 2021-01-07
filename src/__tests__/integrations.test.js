import React from 'react';
import { mount } from 'enzyme';
import { StoreProvider } from 'store';
import App from 'components/App';
import { act } from 'react-dom/test-utils'; // NECESSARY TO SPECIFY IMPORT

import moxios from 'moxios';

// Its sole purpose is to fake out requests. We can tell this library to watch for an axios request, and if it gets one we will trick axios into thinking it instantly gets a response. No network request will be created, so the instance axios trys to make an http request moxios is going to axe that and say "nope, youre not allowed to make network requests", and instead of denying it or failing the request, moxios will turn around and say "Hey, dont worry about it the request didn't actually get issued but here is some data that you should use in place of the response"

beforeEach(() => {
	moxios.install(); // Sets up moxios, intercept axios requests (stops them)

	/**
	 * 1st arg - whole network request path
	 * 2nd arg - object that is returned to axios
	 */
	moxios.stubRequest('https://jsonplaceholder.typicode.com/comments', {
		status: 200,
		response: [{ name: 'Fetched 1' }, { name: 'Fetched 2' }],
	});
});

afterEach(() => {
	moxios.uninstall(); // If left open, this stubRequest may persist into other test files
});

// https://stackoverflow.com/questions/55388587/how-should-i-test-react-hook-useeffect-making-an-api-call-with-typescript#answer-64403563
const waitForComponentToPaint = async (wrapper) => {
	// Not in course, gets arround any act() errors. See below for invocation on wrapper.
	await act(async () => {
		await new Promise((resolve) => setTimeout(resolve, 0));
		wrapper.update();
	});
};

it('can fetch a list of comments and display them', (done) => {
	// Attempt to render the entire app
	const wrapper = mount(
		<StoreProvider>
			<App />
		</StoreProvider>
	);

	waitForComponentToPaint(wrapper);

	// Find the 'fetchComments' button and click it

	wrapper.find('[data-test="fetch-button"]').simulate('click');

	// Introduce a 'tiny' pause, to allow the action through to our store, and into the CommentBox component. Without this pause, we make our assertion before the request has had a change to run its course.

	// When our test runs, it does not care about sleeping or waiting for a function to run. It executes each function, line by line, and once it gets to the end of the it segment, it says "Ok well nothing failed, I guess youre good to go". That is where the done method comes in. When done is supplied to the test, it will only end once you call the done method.
	setTimeout(() => {
		// Remember, when there are changes to JSDOM we may need to update the wrapper to see those changes. This is an example of where update() is needed.
		// wrapper.update(); // This is being done in waitForComponentToPaint, but is useful information.

		expect(wrapper.find('li').length).toEqual(2);
		done();
	}, 100);

	// // Expect to find a list of comments
	// // Trying to simulate an api call inside the console (without the use of moxios, or another ajax test library) will cause the test to break. That is because the JSDOM API is a 'fake' browser we are runing our components in, so when we try to make an axios request to the outside world it fails because we are working in a fake environment. We dont have the ability to make ajax requests from inside our test suite when we are making use of JSDOM.
});
