import 'babel-polyfill';  // some es6 can not be transferred to es5.
import React from 'react';
import {render} from 'react-dom';
import {Route, browserHistory} from 'react-router';
import routes from './routes';
import './styles/styles.css'; // webpack can import css files too;
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';

render(
  <Route history={browserHistory} routes={routes} />,
  document.getElementById('app')
);
