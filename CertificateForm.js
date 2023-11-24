import React, { useState } from 'react';

const CertificateForm = () => {
  const [selectedOption, setSelectedOption] = useState(null);

  const handleOptionChange = (event) => {
    setSelectedOption(event.target.value);
  };

  const handleRedirect = () => {
    if (selectedOption === 'online') {
      window.location.href = 'https://services.india.gov.in/service/detail/birth-certificate-1';
    } else if (selectedOption === 'offline') {
      window.location.href = 'https://www.kmcgov.in/KMCPortal/jsp/KMCBirthDeathHome.jsp#:~:text=Death%20events%20are%20registered%20in,IV.';
    }
  };

  return (
    <div>
      <h1>Mode Of application for Birth Certificate</h1>
<br/>
      <div>
        <label>
          <input
            type="radio"
            value="online"
            checked={selectedOption === 'online'}
            onChange={handleOptionChange}
          />
          Online Mode
        </label>
      </div>

      <div>
        <label>
          <input
            type="radio"
            value="offline"
            checked={selectedOption === 'offline'}
            onChange={handleOptionChange}
          />
          Offline Mode
        </label>
      </div>
<br/>
      <button onClick={handleRedirect}>Show Details</button>
    </div>
  );
};
export default CertificateForm;