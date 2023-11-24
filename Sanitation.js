
// src/TreePlantationPage.js

import React from 'react';
// import './Styles.css';
 
const Sanitation = () => {

  return (

    <div>

      <header>

        <h1>Community Sanitation Program</h1>

      </header>

      <main>

        <section>
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
          <h2>About the Event</h2>

          <p>&nbsp;
          
               Implementing a community-wide recycling initiative to reduce waste and promote 
              environmental sustainability. The program includes education campaigns and convenient recycling stations throughout Newtown.

          </p>

        </section>
        
        <section>
        
            <h3>Event Details</h3>
            &nbsp; 
            
             <p>Date:
             <select id="dropdown">
        <option value="option1">December 10</option>
        <option value="option2">December 20</option>
        <option value="option3">December 30</option> </select></p>
          
            <p>Location: Newtown Eco Park</p>

        </section>
 
        <section>
          <h2>Our Services</h2>
          <ul>
            <li>Recycling Program</li>
            <li>Water Sewage Program</li>
            <li>Waste Water Management System</li>
            {/* Add more services as needed */}
          </ul>
        </section>

      </main>
<br/>
      <footer>

        <p>&copy; 2023 Sanitation Organization. All rights reserved.</p>

      </footer>

    </div>

  );

};
 
export default Sanitation;
