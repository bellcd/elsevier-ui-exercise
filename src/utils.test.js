import utils from './utils';
const {
  filterToActiveConditions,
  updateActivePatient,
  updatePatientsAndConditions,
  havePatientAndConditions
} = utils;
import { PATIENT_CONDITIONS, PATIENTS, PATIENT_DEMOGRAPHICS } from './sample-data';

let state = {
  activePatientId: '',
  patients: {},
  conditions: {},
  isLoading: false,
  error: null
};

afterEach(() => {
  state = {
    activePatientId: '',
    patients: {},
    conditions: {},
    isLoading: false,
    error: null
  };
});

describe('filterToActiveConditions', () => {
  it(`only returns conditions with a status of 'active'`, () => {
    // 201 total conditions
    expect(PATIENT_CONDITIONS.entry.length).toBe(201);
    // 31 should be active
    expect(filterToActiveConditions(PATIENT_CONDITIONS.entry).length).toBe(31);
  });
});

describe('updateActivePatient', () => {
  it(`Returns an object with appropriate values for activePatientId, isLoading, and error`, () => {
    expect(updateActivePatient(PATIENTS[0].id, false)).toEqual({
      activePatientId: PATIENTS[0].id,
      isLoading: false,
      error: null
    });
  });
});

describe('updatePatientsAndConditions', () => {
  // TODO: this feels quite verbose ...
  it('Returns a new object, adding the given patient & conditions under keys of the given activePatientId under keys of patients & conditions, respectively', () => {
    const result = updatePatientsAndConditions(state, PATIENTS[0].id, PATIENT_DEMOGRAPHICS, PATIENT_CONDITIONS);

    expect(result).toEqual({
      patients: { [PATIENTS[0].id]: PATIENT_DEMOGRAPHICS },
      conditions: { [PATIENTS[0].id]: PATIENT_CONDITIONS },
      isLoading: false,
      error: null
    });
  });
});

describe('havePatientAndConditions', () => {
  const id = PATIENTS[0].id;

  it('returns a boolean', () => {
    expect(havePatientAndConditions(state, id)).toEqual(expect.any(Boolean));
  });

  it('returns true when both conditions & patients at the given key exist', () => {
    state = {
      ...state,
      patients: { [id]: PATIENT_DEMOGRAPHICS },
      conditions: { [id]: PATIENT_CONDITIONS },
    }

    expect(havePatientAndConditions(state, id)).toEqual(expect.any(Boolean));
  });

  it('returns false otherwise', () => {
    expect(havePatientAndConditions(state, id)).toEqual(false);
  });
});