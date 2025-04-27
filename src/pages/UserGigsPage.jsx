import React from 'react';



import Breadcrumb from "../components/User-gigs-components/Breadcrumb";
import Sidebar from "../components/User-gigs-components/Sidebar";
import CardOne from "../components/User-gigs-components/service-cards/CardOne";
import CardTwo from "../components/User-gigs-components/service-cards/CardTwo";
import CardThree from "../components/User-gigs-components/service-cards/CardThree";
import CardFour from "../components/User-gigs-components/service-cards/CardFour";
import CardFive from "../components/User-gigs-components/service-cards/CardFive";
import CardSix from "../components/User-gigs-components/service-cards/CardSix";
import CardSeven from "../components/User-gigs-components/service-cards/CardSeven";
import CardEight from "../components/User-gigs-components/service-cards/CardEight";
import CardNine from "../components/User-gigs-components/service-cards/CardNine";






function UserGigsPage() {
  return (
    
    
    <>
      {/* <div className="loader-main">
      <span className="page-loader"></span>
      </div> */}

      <div className="main-wrapper">

      <div className="row">
        <Breadcrumb />
        <Sidebar />
        <CardOne />
        <CardTwo />
        <CardThree />
        <CardFour />
        <CardFive />
        <CardSix />
        <CardSeven />
        <CardEight />
        <CardNine />
        </div>
                   
      </div>
      
      </>
  );
}

export default UserGigsPage;
