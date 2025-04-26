import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import { Link } from "react-router-dom";

import "../../assets/css/fontawesome.min.css"
import "../../assets/css/bootstrap.min.css";
import "../../assets/css/feather.css";


import footerBg01 from "../../assets/images/footer-bg-01.png";
import footerBg02 from "../../assets/images/footer-bg-02.png";

import stripeIcon from "../../assets/images/stripe-icon.svg";

import TimeBankLogoFooter from "../../assets/images/TimeBankLogoFooter.png";


const Footer = () => {
  return (
    <footer className="footer position-relative">
      <div className="section-bg">
        <img src= {footerBg01} className="footer-bg-one position-absolute" alt="bg1" />
        <img src= {footerBg02} className="footer-bg-two position-absolute" alt="bg2" />
      </div>
      <Container>
        <div className="footer-top py-5">
          <Row>
            <Col xl={4} lg={4} md={6} sm={12} data-aos="fade-up" data-aos-delay="500">
              <div className="footer-widget">
                <Link to="#">
                  <img src= {TimeBankLogoFooter} alt="logo" className="img-fluid" />
                  </Link>
                <p>
                  Our mission is to lead the way in digital transformation and automation. We aim to enabling them to navigate the evolving digital landscape with confidence.
                </p>
                <div className="social-links">
                  <ul className="list-inline">
                    <li className="list-inline-item"><a href="#"><i className="fab fa-facebook"></i></a></li>
                    <li className="list-inline-item"><a href="#"><i className="fab fa-x-twitter"></i></a></li>
                    <li className="list-inline-item"><a href="#"><i className="fab fa-instagram"></i></a></li>
                    <li className="list-inline-item"><a href="#"><i className="fab fa-google"></i></a></li>
                    <li className="list-inline-item"><a href="#"><i className="fab fa-youtube"></i></a></li>
                  </ul>
                </div>
              </div>
            </Col>

            <Col xl={2} lg={2} md={6} sm={6} data-aos="fade-up" data-aos-delay="600">
              <div className="footer-widget">
                <h3>Our Company</h3>
                <ul className="list-unstyled">
                  <li><Link to="/About">About Us</Link></li>
                  <li><a href="categories-2.html">Categories</a></li>
                  <li><a href="add-gigs.html">Create Gigs</a></li>
                  <li><a href="pricing.html">Pricing</a></li>
                  <li><a href="faq.html">FAQ</a></li>
                </ul>
              </div>
            </Col>

            <Col xl={2} lg={2} md={6} sm={6} data-aos="fade-up" data-aos-delay="800">
              <div className="footer-widget">
                <h3>Dashboard</h3>
                <ul className="list-unstyled">
                  <li><a href="user-purchase.html">Purchase</a></li>
                  <li><a href="user-sales.html">Sales</a></li>
                  <li><a href="user-payments.html">Payments</a></li>
                  <li><a href="user-files.html">Files</a></li>
                  <li><a href="user-wishlist.html">Wishlist</a></li>
                </ul>
              </div>
            </Col>

            <Col xl={4} lg={4} md={6} sm={6} data-aos="fade-up" data-aos-delay="700">
              <div className="footer-widget">
                <h3>Featured Categories</h3>
                <Row>
                  <Col md={6}>
                    <ul className="list-unstyled">
                      <li><a href="categories.html">Programming & Tech</a></li>
                      <li><a href="categories.html">Music & Audio</a></li>
                      <li><a href="categories.html">Lifestyle</a></li>
                      <li><a href="categories.html">Photography</a></li>
                      <li><a href="categories.html">Business</a></li>
                    </ul>
                  </Col>
                  <Col md={6}>
                    <ul className="list-unstyled">
                      <li><a href="categories.html">eBook Publishing</a></li>
                      <li><a href="categories.html">AI Artists</a></li>
                      <li><a href="categories.html">AI Services</a></li>
                      <li><a href="categories.html">Data</a></li>
                      <li><a href="categories.html">Consulting</a></li>
                    </ul>
                  </Col>
                </Row>
              </div>
            </Col>
          </Row>

          <div className="contact-widget mt-4">
            <Row className="align-items-center">
              <Col xl={9}>
                <ul className="list-unstyled d-flex flex-wrap">
                  <li className="me-4">
                    <i className="feather-map-pin me-2"></i>
                    <span>
                      <strong>Address:</strong> 367 Hillcrest Lane, Irvine, California, USA
                    </span>
                  </li>
                  <li className="me-4">
                    <i className="feather-phone me-2"></i>
                    <span>
                      <strong>Phone:</strong> 310-437-2766
                    </span>
                  </li>
                  <li>
                    <i className="feather-mail me-2"></i>
                    <span>
                      <strong>Email:</strong> [email protected]
                    </span>
                  </li>
                </ul>
              </Col>
              <Col xl={3} className="text-xl-end">
                <div className="paypal-icons">
                  <a href="#" className="me-2">
                    <img src= {stripeIcon} alt="Stripe" />
                  </a>
                  <a href="#">
                    <img src= {stripeIcon} alt="Paypal" />
                  </a>
                </div>
              </Col>
            </Row>
          </div>
        </div>
      </Container>

      <div className="footer-bottom py-3 bg-dark text-light">
        <Container>
          <Row>
            <Col lg={6}>
              <div className="copy-right">
                <p>Copyright © 2025 TimeBank. All rights reserved.</p>
              </div>
            </Col>
            <Col lg={6} className="text-lg-end">
              <div className="footer-bottom-links">
                <ul className="list-inline mb-0">
                  <li className="list-inline-item"><a href="#">Privacy Policy</a></li>
                  <li className="list-inline-item"><a href="#">Terms & Conditions</a></li>
                </ul>
              </div>
            </Col>
          </Row>
        </Container>
      </div>
    </footer>
  );
};

export default Footer;