import { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
// import ServiceButton from './ServiceButton';
// import ServiceDetails from './ServiceDetails';


import './Styles.css';
const Home = () => {
    const usenavigate = useNavigate();
    const [customerlist, listupdate] = useState(null);
    useEffect(() => {  
}, []);
 
return (
    
    
<div class="service">
    <h1>Newtown Corporation Development services</h1><br/><br/><br/><br/>
    <Link to="/TreePlantationPage"><button id="service1">Newtown make green</button></Link><br/>
    <div id="container2"><br/><br/><br/><br/>
    <Link to="/Sanitation">
    <button id="service2">Newtown Sanitation</button><br/><br/><br/><br/><br/>
    </Link>  &nbsp;&nbsp;
    <Link to="/CertificateForm">
    <button id="service3">Apply birth certificate</button>
    </Link> 
    </div>
</div>
        
        
        );
    }
        
//         setSelectedService({ name: serviceName, details: serviceDetails[serviceName]});
//       };

//     return (
//         <div>
           
//             <h1 className="text-center">Welcome to Newtown Corp Development Page</h1>
//             <div>
           




  


//   <div>
//   <br/><br/>
//     <h1> Our Services</h1>
// <br/>
// <br/>
    
//     <div>&nbsp;&nbsp;&nbsp;
    
//       <ServiceButton serviceName="Newtown Make Green" onClick={handleServiceClick}  />&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
//       &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
//       &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
//       &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
      
      
      
//       <ServiceButton serviceName="Newtown Sanitation" onClick={handleServiceClick} />&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
//       &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
//       &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
//       &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
      
     
      
//       <ServiceButton serviceName="Newtown Water sewage" onClick={handleServiceClick} />
//     </div>

   
//     {selectedService && <ServiceDetails {...selectedService} />}
//   </div>
//   <div>
//       {/* Your component content */}
//       <Link to="/Make_Green">
//         <button>Go to Newtown Sanitation Page</button>
//       </Link>
//     </div>
      
//     </div>
         
                            
                            
//         </div>
        
//     );
// }

// import React from 'react';
// import { Link } from 'react-router-dom';
// import './Styles.css';
// function Home() {
//   return (
    // <div className="service" >
      
    //   <Link to="/Make-Green">
    //     <button>Go to Newtown make green Page</button>
    //   </Link> 
      
    //   <Link to="/Sanitation">
    //     <button>Go to Newtown Sanitation Page</button>
    //   </Link>
      
    //   <Link to="/Water-Sewage">
    //     <button>Go to Newtown water Sewage Page</button>
    //   </Link>  </div>
//     <div class="container">
//     <h1>Newtown Corporation Development services</h1><br/><br/><br/><br/>
//     <Link to="/TreePlantationPage"><button id="service1">Go to Newtown make green Page</button></Link><br/>
//     <div id="container2"><br/>
//     <Link to="/Sanitation">
//     <button id="service2">Go to Newtown Sanitation Page</button>
//     </Link>  &nbsp;&nbsp;
//     <Link to="/CertificateForm">
//     <button id="service3">Go to Apply birth/death certificate Page</button>
//     </Link> 
//     </div>
// </div>







export default Home;



// picture: serviceData[serviceName]
// && <serviceData {...selectedService}/>