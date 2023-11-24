// ServiceDetails.js
import React from 'react';

const ServiceDetails = ({ serviceName, details }) => {
  return (
    <div>
      <h2>{serviceName}</h2>
      <p>{details}</p>
    </div>
  );
};

export default ServiceDetails;