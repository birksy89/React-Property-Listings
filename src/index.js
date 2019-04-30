/* eslint-disable react/no-render-return-value */
/* eslint-disable import/no-extraneous-dependencies */
import { AppContainer } from 'react-hot-loader';
import React from 'react';
import ReactDOM from 'react-dom';
// eslint-disable-next-line no-unused-vars
import css from './scss/app.scss';
import App from './js/App';

const rootEl = document.getElementById('root');
const render = Component =>
  ReactDOM.render(
    <AppContainer>
      <Component />
    </AppContainer>,
    rootEl
  );

render(App);
if (module.hot) module.hot.accept('./js/App', () => render(App));
