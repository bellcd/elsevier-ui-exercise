import React from 'react';

export const Demographics = ({ patient }) => {
  const content = !patient ? 'Please select a patient first' : (
    <>
      <span>
        <span>Name: </span>
        <span className="patient-name-official">{patient.name[patient.name.findIndex(name => name.use === 'official')].text}</span>
      </span>
      <span>
        <span>Gender: </span>
        <span className="patient-gender">{patient.gender}</span>
      </span>
      <span>
        <span>Birthdate: </span>
        <span className="patient-birth-date">{patient.birthDate}</span>
      </span>
    </>
  );
  return <div className="demographics">{content}</div>
}