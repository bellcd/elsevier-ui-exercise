import React from 'react';

export const Demographics = ({ patient }) => {
  return !patient ? 'Please select a patient first' : (
    <div className="demographics">
      <span>
        <span>Name: </span>
        <span>{patient.name[patient.name.findIndex(name => name.use === 'official')].text}</span>
      </span>
      <span>
        <span>Gender: </span>
        <span>{patient.gender}</span>
      </span>
      <span>
        <span>Birthdate: </span>
        <span>{patient.birthDate}</span>
      </span>
    </div>
  );
}