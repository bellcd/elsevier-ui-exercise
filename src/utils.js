import config from './config';

const options = {
  headers: {
    'Accept': 'application/json'
  }
}

// TODO: add proper comments

// get a patient's info
export const getPatientInfo = (patientId) => {
  return fetch(`${config.serviceRootUrl}/Patient/${patientId}`, options);
};

// fetch the conditions for a particular person
export const getConditions = (patientId) => {
  return fetch(`${config.serviceRootUrl}/Condition/?patient=${patientId}`, options);
};

export const filterToActiveConditions = (conditionsList) => {
  return conditionsList.filter((condition) => condition.resource.clinicalStatus === 'active');
};

export const updateActivePatient = (activePatientId, isLoading) => {
  return {
    activePatientId,
    isLoading,
    error: null
  }
};

export const updatePatientsAndConditions = (state, activePatientId, patient, conditions) => {
  return {
    patients: {...state.patients, ...{ [activePatientId]: patient }},
    conditions: {...state.conditions, ...{ [activePatientId]: conditions }},
    isLoading: false,
    error: null
  }
};

export const havePatientAndConditions = (state, activePatientId) => {
  return !!(state.patients[activePatientId] && state.conditions[activePatientId]);
};