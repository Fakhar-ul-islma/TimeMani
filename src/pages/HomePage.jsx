import React from "react";

// import Header from "../components/Header";
import Hero from "../components/Home-components/Hero";
import ExploreGigs from "../components/Home-components/ExploreGigs";
import Popular from "../components/Home-components/Popular";
import Listings from "../components/Home-components/Listings";
import FindYourNeeds from "../components/Home-components/FindYourNeeds";
import Clients from "../components/Home-components/Clients";
import PopularLists from "../components/Home-components/PopularLists";
import TestImonials from "../components/Home-components/TestImonials";
import ExpertSection from "../components/Home-components/ExpertSection";
import FAQ from "../components/Home-components/FAQ";
// import Footer from "../components/Footer";



function HomePage() {
  return (
    
    
    <>
      {/* <div className="loader-main">
      <span className="page-loader"></span>
      </div> */}

      <div className="main-wrapper">
      {/* <Header /> */}
      <Hero />
      <ExploreGigs />
      <Popular />
      <Listings />
      <FindYourNeeds />
      <Clients />
      <PopularLists />
      <TestImonials />
      <ExpertSection />
      <FAQ />
      {/* <Footer /> */}
    
      </div>
      
      </>
  );
}

export default HomePage;
