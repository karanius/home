import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

import * as serviceWorker from './serviceWorker';

import {Provider} from 'react-redux';

import store from './redux/store'

import WebSite from './WebSite.component.jsx'


ReactDOM.render(
  <Provider store={store} >
    <WebSite />
  </Provider>
, document.getElementById('root'));

serviceWorker.unregister();
