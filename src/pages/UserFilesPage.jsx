import React from 'react';

import Breadcrumb from "../components/User-Files-components/Breadcrumb";
import PageContent from "../components/User-Files-components/PageContent";




function UserFilesPage() {
  return (
    
    
    <>
      {/* <div className="loader-main">
      <span className="page-loader"></span>
      </div> */}

      <div className="main-wrapper">
      <Breadcrumb />
      <PageContent />
        
      </div>
      
      </>
  );
}

export default UserFilesPage;
