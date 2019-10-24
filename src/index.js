import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import '../public/index.css';

import {Provider} from 'react-redux';

import configureStore from './store';

ReactDOM.render(
    <Provider store={configureStore()}>
      <App />
    </Provider>,
    document.getElementById('root')
);
