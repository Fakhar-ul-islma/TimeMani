import React from "react";

// import Header from "../components/Header";
import Hero from "../components/Hero";
import ExploreGigs from "../components/ExploreGigs";
import Popular from "../components/Popular";
import Listings from "../components/Listings";
import FindYourNeeds from "../components/FindYourNeeds";
import Clients from "../components/Clients";
import PopularLists from "../components/PopularLists";
import TestImonials from "../components/TestImonials";
import ExpertSection from "../components/ExpertSection";
import FAQ from "../components/FAQ";
// import Footer from "../components/Footer";



function Home() {
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

export default Home;
