import React from 'react';
import { Conditions } from './components/conditions';
import { Patients } from './components/patients';
import { Widget } from './components/widget';
import { getPatientInfo, getConditions } from './utils';
import { Demographics } from './components/demographics';
import {
  updateActivePatient,
  updatePatientsAndConditions,
  havePatientAndConditions
} from './utils';

// TODO: add proper tests

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      activePatientId: '',
      patients: {},
      conditions: {},
      isLoading: false,
      error: null
    };

    this.changeActivePatient = this.changeActivePatient.bind(this);
  }

  changeActivePatient(e) {
    const activePatientId = e.target.dataset.id;
    if (havePatientAndConditions(this.state, activePatientId)) {
      this.setState(updateActivePatient(activePatientId, false));
    } else {
      this.setState(updateActivePatient(activePatientId, true), () => {

        // potential tests

        // Promise.all is invoked with the correct promises
        Promise.all([getPatientInfo(activePatientId), getConditions(activePatientId)])
        // an array of Response objects is mapped to that array parsed as JSON
        // unnecessary??
          .then(responses => Promise.all(responses.map(response => response.json())))
          .then(data => {
            this.setState(updatePatientsAndConditions(state, activePatientId, data[0], data[1]));
          })
          // TODO: Improve error handling
          .catch(error => {
            this.setState({ error: error.message, isLoading: false })
          });
      });
    }
  }

  render() {
    let widget = null;
    let message = null;

    if (this.state.isLoading) {
      message = 'Loading...';
    } else if (this.state.error) {
      message = 'There was an error, please try again';
    }

    if (message) {
      widget = <Widget message={message}></Widget>
    }

    return (
      <>
        {widget}
        <div>Select a Patient to get details about them</div>
        <Patients
          changeActivePatient={this.changeActivePatient}
        >
        </Patients>
        <Demographics
          patient={this.state.patients[this.state.activePatientId]}
        >
        </Demographics>
        <Conditions conditions={this.state.conditions[this.state.activePatientId]}></Conditions>
      </>
    );
  }
}

export default App;