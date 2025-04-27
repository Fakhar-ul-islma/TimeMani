import React from 'react';
import { Col, Card, Badge } from 'react-bootstrap';
import { FaStar, FaHeart, FaMapPin } from 'react-icons/fa';
import { Carousel } from 'react-bootstrap';

import "../../../../assets/css/style.css";
import "../../../../assets/css/bootstrap.min.css";
import "../../../../assets/css/owl.carousel.min.css";


import user09 from "../../../../assets/images/user-09.jpg";
import gigs09 from "../../../../assets/images/gigs-09.jpg";
import gigs10 from "../../../../assets/images/gigs-10.jpg";

const ServiceItem = () => {
  return (
    <Col xl={12} md={10}>
      <Card className="gigs-grid">
        <div className="gigs-img">
          <Carousel>
            <Carousel.Item>
              <a href="service-details.html">
                <img src= {gigs09} className="d-block w-100" alt="img" />
              </a>
            </Carousel.Item>
            <Carousel.Item>
              <a href="service-details.html">
                <img src= {gigs10} className="d-block w-100" alt="img" />
              </a>
            </Carousel.Item>
            <Carousel.Item>
              <a href="service-details.html">
                <img src="images/gigs-11.jpg" className="d-block w-100" alt="img" />
              </a>
            </Carousel.Item>
          </Carousel>
          <div className="fav-selection">
             <a href="#" onClick={(e) => e.preventDefault()} className="fav-icon">
              <FaHeart />
            </a>
          </div>
        </div>
        <Card.Body className="gigs-content">
          <div className="gigs-info">
            <a href="service-details.html" className="badge bg-primary-light">
              Social Media
            </a>
            <div className="star-rate">
              <span>
                <FaStar /> 4.3
              </span>
            </div>
          </div>
          <div className="gigs-title">
            <h3>
              <a href="service-details.html">
                I will do designing and executing targeted email campaigns
              </a>
            </h3>
          </div>
          <ul className="gigs-user-info">
            <li className="gigs-user">
              <img src= {user09} alt="img" />
              <p>By James</p>
            </li>
            <li className="gigs-loc">
              <p>
                <FaMapPin /> Derby
              </p>
            </li>
          </ul>
          <div className="gigs-card-footer">
            <h5>$850</h5>
            <span className="badge">Delivery in 1 day</span>
          </div>
        </Card.Body>
      </Card>
    </Col>
  );
};

export default ServiceItem;
