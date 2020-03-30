import React from 'react';
import { render, unmountComponentAtNode } from 'react-dom';
import { act } from 'react-dom/test-utils';
import { PATIENTS } from '../sample-data';

import { Patient } from './patient';

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

it(`button contains the patient's name`, () => {
  act(() => {
    render(<Patient patient={PATIENTS[0]} />, container);
  });
  const button = document.querySelector('[data-testid=change-active-patient]');
  expect(button.textContent).toBe(PATIENTS[0].name);
});