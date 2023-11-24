import React from 'react';

const ServicePic = ({ serviceName, picture }) => {
  return (
    <div>
      <h2>{serviceName}</h2>
      <p>{picture}</p>
    </div>
  );
};

export default ServicePic;