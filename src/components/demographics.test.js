import React from 'react';
import { render, unmountComponentAtNode } from 'react-dom';
import { act } from 'react-dom/test-utils';
import { PATIENT_DEMOGRAPHICS } from '../sample-data';

import { Demographics } from './demographics';

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

it('renders with or without a valid patient', () => {
  act(() => {
    render(<Demographics />, container);
  });
  expect(container.querySelector('.demographics').textContent).toBe('Please select a patient first');

  act(() => {
    render(<Demographics patient={PATIENT_DEMOGRAPHICS} />, container);
  });
  expect(container.querySelector('.patient-name-official').textContent).toBe('Smart, Valerie S');
  expect(container.querySelector('.patient-gender').textContent).toBe('female');
  expect(container.querySelector('.patient-birth-date').textContent).toBe('1984-04-15');
});