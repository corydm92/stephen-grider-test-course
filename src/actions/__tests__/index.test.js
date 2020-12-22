// We want to try to stick to convention with naming. Because we are testing the index file of actions, we name our test index.test.js
import { saveComment } from 'actions/';
import { SAVE_COMMENT } from 'actions/types';

// We want to create a describe block for actions, because we will end up with many actions and grouping them together is a clear way to
// handle multiple tests per action
describe('saveComment', () => {
	let action;
	let comment = 'Test Comment';
	beforeEach(() => {
		action = saveComment(comment);
	});

	it('has the correct type', () => {
		expect(action.type).toEqual(SAVE_COMMENT);
	});

	it('has the correct payload', () => {
		expect(action.payload).toEqual(comment);
	});
});

// It's also useful to create a sort of template for our tests, so when we want to add another action test we just use the format below

// describe('', () => {
// 	let action;
// 	beforeEach(() => {});

// 	it('has the correct type', () => {
// 		expect().toEqual();
// 	});

// 	it('has the correct payload', () => {
// 		expect().toEqual();
// 	});
// });
