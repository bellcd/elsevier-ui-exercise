import { filterToActiveConditions } from './utils';
import { PATIENT_CONDITIONS } from './sample-data';


describe('filterToActiveConditions', () => {
  it(`only returns conditions with a status of 'active'`, () => {
    // 201 total conditions
    expect(PATIENT_CONDITIONS.entry.length).toBe(201);
    // 31 should be active
    expect(filterToActiveConditions(PATIENT_CONDITIONS.entry).length).toBe(31);
  });
});