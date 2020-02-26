import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import * as serviceWorker from './serviceWorker';

import { BrowserRouter } from 'react-router-dom';
import {Provider} from 'react-redux';
import {createBrowserHistory} from 'history'

import store from './redux/store'

import WebSite from './WebSite.component.jsx'

const customHistory = createBrowserHistory();

ReactDOM.render(
  <Provider store={store} >
    <BrowserRouter  >
      <WebSite />
    </BrowserRouter>
  </Provider>
, document.getElementById('root'));

// serviceWorker.register();
