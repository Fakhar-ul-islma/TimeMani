import React from 'react';

import Breadcrumb from "../components/User-dashboard-components/Breadcrumb";
import PageContent from "../components/User-dashboard-components/PageContent";




function UserdashboardPage() {
  return (
    
    
    <>
      {/* <div className="loader-main">
      <span className="page-loader"></span>
      </div> */}

      <div className="main-wrapper">
      <Breadcrumb />
      <PageContent />
      {/* <Popular />
      <Listings />
      <FindYourNeeds />
      <Clients />
      <PopularLists />
      <TestImonials />
      <ExpertSection />
      <FAQ /> */}
      {/* <Footer /> */}
    
      </div>
      
      </>
  );
}

export default UserdashboardPage;
