import React from 'react';
import { Row, Col, Card, Badge } from 'react-bootstrap';
import { FaStar, FaHeart, FaMapPin } from 'react-icons/fa';
import { Carousel } from 'react-bootstrap';

import "../../../../assets/css/style.css";
import "../../../../assets/css/bootstrap.min.css";
import "../../../../assets/css/owl.carousel.min.css";


import user06 from "../../../../assets/images/user-06.jpg";
import gigs10 from "../../../../assets/images/gigs-10.jpg";
import gigs11 from "../../../../assets/images/gigs-11.jpg";


const ServiceItem = () => {
  return (
    <Col xl={12} md={10}>
      <Card className="gigs-grid">
        <div className="gigs-img">
          <Carousel>
            <Carousel.Item>
              <a href="service-details.html">
                <img src="images/gigs-06.jpg" className="d-block w-100" alt="img" />
              </a>
            </Carousel.Item>
            <Carousel.Item>
              <a href="service-details.html">
                <img src= {gigs10} className="d-block w-100" alt="img" />
              </a>
            </Carousel.Item>
            <Carousel.Item>
              <a href="service-details.html">
                <img src= {gigs11} className="d-block w-100" alt="img" />
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
              Ecommerce-Seo
            </a>
            <div className="star-rate">
              <span>
                <FaStar /> 3.8
              </span>
            </div>
          </div>
          <div className="gigs-title">
            <h3>
              <a href="service-details.html">
                I will do integrating AR elements into marketing strategies for customers...
              </a>
            </h3>
          </div>
          <ul className="gigs-user-info">
            <li className="gigs-user">
              <img src= {user06} alt="img" />
              <p>By Smith</p>
            </li>
            <li className="gigs-loc">
              <p>
                <FaMapPin /> Bolivia
              </p>
            </li>
          </ul>
          <div className="gigs-card-footer">
            <h5>$950</h5>
            <span className="badge">Delivery in 1 day</span>
          </div>
        </Card.Body>
      </Card>
    </Col>
  );
};

export default ServiceItem;
