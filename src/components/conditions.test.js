import React from 'react';
import { render, unmountComponentAtNode } from 'react-dom';
import { act } from 'react-dom/test-utils';
import { PATIENT_CONDITIONS } from '../sample-data';

import { Conditions } from './conditions';
import { filterToActiveConditions } from '../utils';

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

it(`each row displays appropriate text, dateRecorded, and a PubMed link that searches for the relevant condition`, () => {
  act(() => {
    render(<Conditions conditions={PATIENT_CONDITIONS} />, container);
  });

  const activePatientConditions = filterToActiveConditions(PATIENT_CONDITIONS.entry);


  // only testing the first 10 because that's the default pagination for MUIDataTables
  for (let i = 0; i < 10; i++) {
    const condition = activePatientConditions[i];

    const conditionContainer = document.querySelector(`[data-testid=MuiDataTableBodyCell-0-${i}]`);
    const dateRecorded = document.querySelector(`[data-testid=MuiDataTableBodyCell-1-${i}]`);
    const link = document.querySelector(`[data-testid=MuiDataTableBodyCell-2-${i}]`).childNodes[0];

    const conditionText = conditionContainer.textContent;

    expect(conditionText).toBe(condition.resource.code.text);
    expect(dateRecorded.textContent).toBe(condition.resource.dateRecorded);

    expect(link.tagName).toBe('A');
    expect(link.href).toBe(encodeURI(`https://www.ncbi.nlm.nih.gov/pubmed/?term=${conditionText}`));
    expect(link.textContent).toBe(conditionText);
  }
});