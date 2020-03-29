import React from 'react';
import { PATIENTS } from '../sample-data';
import { Patient } from './patient';

export const Patients = ({ changeActivePatient }) => {
  const patientList = PATIENTS.map(patient => {
    return (
      <Patient
        patient={patient}
        changeActivePatient={changeActivePatient}
        key={patient.id}
      >
      </Patient>
    );
  });
  return <ul className="patient-list">{patientList}</ul>;
}