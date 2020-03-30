import React from 'react';
import { render, unmountComponentAtNode } from 'react-dom';
import App from './app';
import { act } from '@testing-library/react';

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

it('does not render a Widget by default', () => {
  act(() => {
    render(<App />, container);
  });
  expect(document.querySelector('.widget-wrapper')).toEqual(null);
});

it('contains welcome text', () => {
  act(() => {
    render(<App />, container);
  });

  expect(document.querySelector('.welcome-message').textContent).toBe('Select a Patient to get details about them');
});