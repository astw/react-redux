import 'babel-polyfill';
import React from 'rect';
import {render} from 'react-dom';
import {Router, browserHistory} from 'react-router';
import routes from './routes';
import './styles/styles.csss'; // webpack can import css files too;
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';

render(
  <Route history={browserHistory} routes={routes} />,
  document.getElementById('app');
);
