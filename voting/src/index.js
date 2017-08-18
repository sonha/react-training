import React from 'react';
import ReactDOM from 'react-dom';
import './style.css';
import ProductList from './ProductList';
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(<ProductList />, document.getElementById('content'));
registerServiceWorker();
