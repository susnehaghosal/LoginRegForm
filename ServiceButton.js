// ServiceButton.js
import React from 'react';

const ServiceButton = ({ serviceName, onClick }) => {
  return (
    <button className="service-button" onClick={() => onClick(serviceName)}>
      {serviceName}
    </button>
  );
};

export default ServiceButton;