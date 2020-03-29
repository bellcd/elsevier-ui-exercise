import React from 'react';
import { render, unmountComponentAtNode } from 'react-dom';
import App from './app';

let container = null;
beforeEach(() => {
  container = document.createElement('.div');
  document.body.appendChild(container);
});
afterEach(() => {
  unmountComponentAtNode(container);
  container.remove();
  container = null;
});

xit('', () => {

});
