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

xit(`only displays active conditions`, () => {
  // 201 total conditions
  // 31 should be active
});

it(`each row displays appropriate text, dateRecorded, and a PubMed link that searches for the relevant condition`, () => {
  // get a reference to the <tr> in question TODO: row 0 right now
  // TODO: row is the row of the table
  const condition = document.querySelector('[data-testid="MUIDataTableBodyCell-0-0"]');
  const dateRecorded = document.querySelector('[data-testid="MUIDataTableBodyCell-1-0"]');
  const link = document.querySelector('[data-testid="MUIDataTableBodyCell-2-0"]');

  const activePatientConditions = filterToActiveConditions(PATIENT_CONDITIONS.entry);

  expect(condition.textContent).toBe(activePatientConditions[0].resource.code.text);
  expect(dateRecorded.textContent).toBe(activePatientConditions[0].resource.dateRecorded);
  expect(link.innerHTML).toBe(<a href={`https://www.ncbi.nlm.nih.gov/pubmed/?term=${activePatientConditions[0].resource.code.text}`}>{activePatientConditions[0].resource.code.text}</a>);

  // verify that that row contains the 3 items
    // text
    // dateRecorded
    // properly formatted PubMed search link
});