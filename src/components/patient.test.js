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
  render(<Patient patient={PATIENTS[0]} />, container);
  const button = document.querySelector('[data-testid=change-active-patient]');
  expect(button.textContent).toBe(PATIENTS[0].name);
});

// TODO: is this redundant??
xit(`TODO: button works correctly???!!`, () => {
  const changeActivePatient = jest.fn();
  act(() => {
    render(<Patient patient={PATIENTS[0]} changeActivePatient={changeActivePatient} />, container);
  });

  act(() => {
    button.dispatchEvent(new MouseEvent('click', { bubbles: true }));
  });

  expect(changeActivePatient).toHaveBeenCalledTimes(1);
});