
import React from "react";
import { Link } from "react-router-dom";

import "../../assets/css/style.css";
import "../../assets/css/bootstrap.min.css";
import "../../assets/css/owl.carousel.min.css";

import TimeBankLogo from "../../assets/images/TimeBankLogo.png";

const Header = () => {
  return (
    <header className="header">
      <div className="container-fluid">
        <nav className="navbar navbar-expand-lg header-nav">
          <div className="navbar-header">
            <button id="mobile_btn" type="button" className="navbar-toggler">
              <span className="bar-icon">
                <span></span>
                <span></span>
                <span></span>
              </span>
            </button>

            <Link to="/" className="navbar-brand logo">
              <img src={TimeBankLogo} className="img-fluid" alt="TimeBank Logo" />
            </Link>
            <Link to="/" className="navbar-brand logo-small">
              <img src={TimeBankLogo} className="img-fluid" alt="TimeBank Logo Small" />
            </Link>
          </div>

          <div className="main-menu-wrapper">
            <div className="menu-header">
              <Link to="/" className="menu-logo">
                <img src={TimeBankLogo} className="img-fluid" alt="TimeBank Logo" />
              </Link>
              <button type="button" className="menu-close">
                <i className="fas fa-times"></i>
              </button>
            </div>

            <ul className="main-nav navbar-nav">
              <li className="nav-item">
                <Link to="/" className="nav-link">Home</Link>
              </li>

              <li className="has-submenu nav-item">
                <a href="#" onClick={(e) => e.preventDefault()} className="nav-link">
                  Gigs <i className="fas fa-chevron-down"></i>
                </a>
                <ul className="submenu">
                  <li><Link to="/services">All Gigs</Link></li>
                  <li><Link to="/categories">Categories</Link></li>
                  <li><Link to="/add-gigs">Create a Gig</Link></li>
                </ul>
              </li>

              <li className="nav-item">
                <Link to="/about-us" className="nav-link active">About Us</Link>
              </li>
              <li className="nav-item">
                <Link to="/team" className="nav-link">Our Team</Link>
              </li>

              <li className="has-submenu nav-item">
                <a href="#" onClick={(e) => e.preventDefault()} className="nav-link">
                  User Dashboard <i className="fas fa-chevron-down"></i>
                </a>
                <ul className="submenu">
                  <li className="has-submenu">
                    <a href="#" onClick={(e) => e.preventDefault()}>Authentication</a>
                    <ul className="submenu">
                      <li><Link to="/signin">Login</Link></li>
                      <li><Link to="/signup">Register</Link></li>
                      <li><Link to="/forgot-password">Forgot Password</Link></li>
                      <li><Link to="/lock-screen">Lock Screen</Link></li>
                    </ul>
                  </li>
                  <li><Link to="/dashboard">Dashboard</Link></li>
                  <li><Link to="/profile">My Profile</Link></li>
                  <li><Link to="/my-gigs">Manage Gigs</Link></li>
                  <li><Link to="/purchase">Purchase</Link></li>
                  <li><Link to="/sales">Sales</Link></li>
                  <li><Link to="/files">Files</Link></li>
                  <li><Link to="/reviews">My Reviews</Link></li>
                  <li><Link to="/wishlist">Wishlist</Link></li>
                  <li><Link to="/messages">Messages</Link></li>
                  <li><Link to="/wallet">Wallet</Link></li>
                  <li><Link to="/settings">Settings</Link></li>
                </ul>
              </li>

              <li className="nav-item responsive-link">
                <Link to="/signin" className="nav-link">Sign In</Link>
              </li>
              <li className="nav-item responsive-link">
                <Link to="/signup" className="nav-link">Get Started</Link>
              </li>
            </ul>
          </div>

          <ul className="nav header-navbar-rht">
            <li className="nav-item">
              <Link to="/signin" className="btn btn-secondary">Sign In</Link>
            </li>
            <li className="nav-item">
              <Link to="/signup" className="btn btn-primary">Get Started</Link>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;
