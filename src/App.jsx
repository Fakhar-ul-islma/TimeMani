// <!-- Favicon -->
import "../assets/images/TimeBankFavicon.png";
	
	{/* <!-- Bootstrap CSS --> */}
import "../assets/css/bootstrap.min.css";

	{/* <!-- Fontawesome CSS --> */}
  import "../assets/css/fontawesome.min.css";
  import "../assets/css/all.min.css";

	{/* <!-- Fearther CSS --> */}
import "../assets/css/feather.css";

  {/* <!-- Aos CSS --> */}
import "../assets/css/aos.css";

		
	{/* <!-- Owl carousel CSS --> */}
import "../assets/css/owl.carousel.min.css";

	{/* <!-- Select CSS --> */}
import "../assets/css/select2.min.css";


	{/* <!-- Main CSS --> */}
import "../assets/css/style.css";



import React from 'react';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import Header from "./components/Header";
import Footer from "./components/Footer";

const App = () => {
  return (
    <div>
      <BrowserRouter>
      <Header />
        <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/About" element={<About />} />
        {/* <Route path="/about-us" element={<About />} /> */}


        </Routes>
        <Footer />

      </BrowserRouter>
    </div>
  );
};

export default App;
