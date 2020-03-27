import React from 'react';

export const Demographics = ({ patient }) => {
  // TODO: change to external stylesheets
  return !patient ? 'Please select a patient first' : (
    <div style={{
      display: 'flex',
      justifyContent: 'space-around'
    }}>
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