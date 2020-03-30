import config from './config';

const options = {
  headers: {
    'Accept': 'application/json'
  }
}

// TODO: add proper comments

export default {
  // get a patient's info
  getPatientInfo: (patientId) => {
    return fetch(`${config.serviceRootUrl}/Patient/${patientId}`, options);
  },

  // fetch the conditions for a particular person
  getConditions: (patientId) => {
    return fetch(`${config.serviceRootUrl}/Condition/?patient=${patientId}`, options);
  },

  filterToActiveConditions: (conditionsList) => {
    return conditionsList.filter((condition) => condition.resource.clinicalStatus === 'active');
  },

  updateActivePatient: (activePatientId, isLoading) => {
    return {
      activePatientId,
      isLoading,
      error: null
    }
  },

  updatePatientsAndConditions: (state, activePatientId, patient, conditions) => {
    return {
      patients: {...state.patients, ...{ [activePatientId]: patient }},
      conditions: {...state.conditions, ...{ [activePatientId]: conditions }},
      isLoading: false,
      error: null
    }
  },

  havePatientAndConditions: (state, activePatientId) => {
    return !!(state.patients[activePatientId] && state.conditions[activePatientId]);
  }
};