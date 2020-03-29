import React from 'react';
import { render, unmountComponentAtNode } from 'react-dom';
import { act } from 'react-dom/test-utils';
import { PATIENTS } from '../sample-data';

import { Patients } from './patients';

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

it('renders a list of patient buttons', () => {
  act(() => {
    render(<Patients />, container);
  });
  const patientList = container.querySelector('.patient-list');
  expect(patientList.childElementCount).toBe(PATIENTS.length);
  patientList.childNodes.forEach((node) => {
    const button = node.querySelector('.patient-button');
    expect(button.tagName).toBe('BUTTON');
  });
});