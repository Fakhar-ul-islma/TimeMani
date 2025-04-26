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
import HomePage from "./pages/HomePage";
import AboutPage from "./pages/AboutPage";
import UserdashboardPage from "./pages/UserdashboardPage"
import UserFilesPage from "./pages/UserFilesPage";
import Header from "./components/Home-components/Header";
import Footer from "./components/Home-components/Footer";
import MouseCursor from "./components/Home-components/MouseCursor";

const App = () => {
  return (
    <div>
      <BrowserRouter>
      <Header />
        <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/AboutPage" element={<AboutPage />} />
        <Route path="/UserdashboardPage" element={<UserdashboardPage />} />
        <Route path="/UserFilesPage" element={<UserFilesPage />} />


        </Routes>
        <Footer />
        <MouseCursor />

      </BrowserRouter>
    </div>
  );
};

export default App;
