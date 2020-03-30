import config from './config';

const options = {
  headers: {
    'Accept': 'application/json'
  }
}

export default {
  /**
   *
   * Get a patient's demographic info
   * @param {String} patientId
   * @returns {Promise}
   */
  getPatientInfo: (patientId) => {
    return fetch(`${config.serviceRootUrl}/Patient/${patientId}`, options);
  },

  /**
   *
   * Get conditions for a particular patient
   * @param {String} patientId
   * @returns {Promise}
   */
  getConditions: (patientId) => {
    return fetch(`${config.serviceRootUrl}/Condition/?patient=${patientId}`, options);
  },

  /**
   *
   * Filters an array to only active conditions
   * @param {Array} conditionsList
   * @returns {Array}
   */
  filterToActiveConditions: (conditionsList) => {
    return conditionsList.filter((condition) => condition.resource.clinicalStatus === 'active');
  },


  /**
   *
   * Returns a new object with the activePatientId & isLoading arguments given, as well as an error property set to null
   * @param {String} activePatientId
   * @param {Boolean} isLoading
   * @returns {Object}
   */
  updateActivePatient: (activePatientId, isLoading) => {
    return {
      activePatientId,
      isLoading,
      error: null
    }
  },

  /**
   *
   * Returns a new object with the patient and condition arguments given merged at the activePatientId argument key of the patients & conditions properties, respectively
   * @param {Object} state - the state object
   * @param {String} activePatientId
   * @param {Object} patient - patient demographic info
   * @param {Object} conditions - contains a list of conditions for this patient
   * @returns {Object}
   */
  updatePatientsAndConditions: (state, activePatientId, patient, conditions) => {
    return {
      patients: {...state.patients, ...{ [activePatientId]: patient }},
      conditions: {...state.conditions, ...{ [activePatientId]: conditions }},
      isLoading: false,
      error: null
    }
  },

  /**
   *
   * Returns a boolean on whether or not the existing state object has information  (ie, both patients & conditions) for a particular activePatientId
   * @param {Object} state
   * @param {String} activePatientId
   * @returns {Boolean}
   */
  havePatientAndConditions: (state, activePatientId) => {
    return !!(state.patients[activePatientId] && state.conditions[activePatientId]);
  }
};