import { Provider } from 'react-redux';
import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import store from './store';

ReactDOM.render(
	<Provider store={store}>
		{/* <Header /> */}
		<App />
		{/* <Footer /> */}
	</Provider>,
	document.getElementById('root')
);
