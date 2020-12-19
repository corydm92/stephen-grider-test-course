import React from 'react';
import ReactDOM from 'react-dom';
import App from 'components/App';
import { StoreProvider } from 'store.js';

const app = (
	<StoreProvider>
		<App />
	</StoreProvider>
);

ReactDOM.render(app, document.querySelector('#root'));
