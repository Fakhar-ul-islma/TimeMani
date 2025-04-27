import React from 'react';
import { Row, Col, Card, Badge } from 'react-bootstrap';
import { FaStar, FaHeart, FaMapPin } from 'react-icons/fa';
import { Carousel } from 'react-bootstrap';

import "../../../../assets/css/style.css";
import "../../../../assets/css/bootstrap.min.css";
import "../../../../assets/css/owl.carousel.min.css";


import user04 from "../../../../assets/images/user-04.jpg";
import gigs04 from "../../../../assets/images/gigs-04.jpg";
import gigs06 from "../../../../assets/images/gigs-06.jpg";
import gigs07 from "../../../../assets/images/gigs-07.jpg";




const ServiceList = () => {
  return (
    <Col xl={12} md={10}>
      <Card className="gigs-grid">
        <div className="gigs-img">
          <Carousel>
            <Carousel.Item>
              <a href="service-details.html">
                <img src= {gigs04} className="d-block w-100" alt="img" />
              </a>
            </Carousel.Item>
            <Carousel.Item>
              <a href="service-details.html">
                <img src= {gigs06} className="d-block w-100" alt="img" />
              </a>
            </Carousel.Item>
            <Carousel.Item>
              <a href="service-details.html">
                <img src= {gigs07} className="d-block w-100" alt="img" />
              </a>
            </Carousel.Item>
          </Carousel>
          <div className="card-overlay-badge">
            <a href="service.html">
              <Badge variant="warning">
                <FaStar /> Featured
              </Badge>
            </a>
          </div>
          <div className="fav-selection">
             <a href="#" onClick={(e) => e.preventDefault()} className="fav-icon">
              <FaHeart />
            </a>
          </div>
        </div>
        <Card.Body className="gigs-content">
          <div className="gigs-info">
            <a href="service-details.html" className="badge bg-primary-light">
              Social Ecommerce
            </a>{' '}
            <small>+1</small>
            <div className="star-rate">
              <span>
                <FaStar /> 4.5
              </span>
            </div>
          </div>
          <div className="gigs-title">
            <h3>
              <a href="service-details.html">
                Embedded Android & AOSP customizations...
              </a>
            </h3>
          </div>
          <ul className="gigs-user-info">
            <li className="gigs-user">
              <img src= {user04} alt="img" />
              <p>By Charles</p>
            </li>
            <li className="gigs-loc">
              <p>
                <FaMapPin /> Indonesia
              </p>
            </li>
          </ul>
          <div className="gigs-card-footer">
            <h5>$900</h5>
            <span className="badge">Delivery in 1 day</span>
          </div>
        </Card.Body>
      </Card>
    </Col>
  );
};

export default ServiceList;
