import React from 'react';

export const Patient = ({
  patient,
  changeActivePatient
}) => {
  return <li>
      <button
        className="patient-button"
        onClick={changeActivePatient}
        data-id={patient.id}
        data-testid="change-active-patient"
      >
        {patient.name}
      </button>
    </li>
};