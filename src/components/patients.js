import React from 'react';
import { PATIENTS } from '../sample-data';

export const Patients = ({ changeActivePatient }) => {
  const patientList = PATIENTS.map(patient => {
    return <ul key={patient.id}>
      <button className="patient-button" onClick={changeActivePatient} ><li data-id={patient.id}>{patient.name}</li></button>
    </ul>
  });
  return patientList;
}