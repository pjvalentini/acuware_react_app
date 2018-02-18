import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import routes from './routes.jsx';

ReactDOM.render(
	<BrowserRouter>{routes}</BrowserRouter>,
	document.getElementById('app')
);
