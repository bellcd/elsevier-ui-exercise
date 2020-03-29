import React from 'react';
import { render, unmountComponentAtNode } from 'react-dom';
import { act } from 'react-dom/test-utils';

import { Widget } from './widget';

let container = null;
beforeEach(() => {
  container = document.createElement('div');
  document.body.appendChild(container);
});

afterEach(() => {
  unmountComponentAtNode(container);
  container.remove();
  container = null;
});

it('renders the message', () => {
  act(() => {
    render(<Widget message={'Loading...'}/>, container);
  });
  expect(container.querySelector('.widget').textContent).toBe('Loading...');

  act(() => {
    render(<Widget message={'There was an error, please try again'}/>, container);
  });
  expect(container.querySelector('.widget').textContent).toBe('There was an error, please try again');
});