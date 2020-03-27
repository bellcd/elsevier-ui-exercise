import React from 'react';
import { Conditions } from './components/conditions';
import { Patients } from './components/patients';
import { Widget } from './components/widget';
import { getPatientInfo, getConditions } from './utils';
import { Demographics } from './components/demographics';

// TODO: add proper tests

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      activePatientId: '',
      patient: null,
      conditions: null,
      isLoading: false,
      error: null
    };

    this.changeActivePatient = this.changeActivePatient.bind(this);
  }

  changeActivePatient(e) {
    const activePatientId = e.target.dataset.id;
    this.setState(() => ({ activePatientId, isLoading: true }), () => {

      // TODO: check if this patient's data is already on the client before re-fetching
      Promise.all([getPatientInfo(activePatientId), getConditions(activePatientId)])
        .then(responses => Promise.all(responses.map(response => response.json())))
        .then(data => {
          this.setState({ patient: data[0], conditions: data[1], isLoading: false, error: null })
        })
        // TODO: Improve error handling
        .catch(error => {
          this.setState({ error: error.message, isLoading: false })
        });
    });
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
          patient={this.state.patient}
        >
        </Demographics>
        <Conditions conditions={this.state.conditions}></Conditions>
      </>
    );
  }
}

export default App;