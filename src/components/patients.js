import React from 'react';
import { PATIENTS } from '../sample-data';

export const Patients = ({ changeActivePatient }) => {
  const patientList = PATIENTS.map(patient => {
    return <ul key={patient.id}>
      <a onClick={changeActivePatient} href="#"><li data-id={patient.id}>{patient.name}</li></a>
    </ul>
  });
  return patientList;
}