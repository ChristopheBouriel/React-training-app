import React from 'react';
import ReactDOM from 'react-dom';
import 'bootstrap/dist/css/bootstrap.min.css';

import App from './components/App';
import './css/toDo.css';

import { Provider } from 'react-redux';
import configureStore from './store/store';


const store = configureStore();

ReactDOM.render(
    <Provider store={store}>
        <App />
    </Provider>, document.getElementById('root'))

