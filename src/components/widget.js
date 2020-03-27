import React from 'react';

export const Widget = ({ message }) => {
  return (
    <div className="widget-wrapper">
      <div className="widget">{message}</div>
    </div>
  );
}