import config from './config';

const options = {
  headers: {
    'Accept': 'application/json'
  }
}

// TODO: add tests

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