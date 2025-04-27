import React from 'react';
import { Row, Col, Card, Badge } from 'react-bootstrap';
import { FaStar, FaHeart, FaMapPin } from 'react-icons/fa';
import { Carousel } from 'react-bootstrap';

import "../../../../assets/css/style.css";
import "../../../../assets/css/bootstrap.min.css";
import "../../../../assets/css/owl.carousel.min.css";


import gigs03 from "../../../../assets/images/gigs-03.jpg";
import gigs10 from "../../../../assets/images/gigs-10.jpg";
import gigs11 from "../../../../assets/images/gigs-11.jpg";
import user03 from "../../../../assets/images/user-03.jpg";


const ServiceList = () => {
  return (
    <Col xl={12} md={10}>
      <Card className="gigs-grid">
        <div className="gigs-img">
          <Carousel>
            <Carousel.Item>
              <a href="service-details.html">
                <img src= {gigs03} className="d-block w-100" alt="img" />
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
              Music & Audio
            </a>
            <div className="star-rate">
              <span>
                <FaStar /> 4.6
              </span>
            </div>
          </div>
          <div className="gigs-title">
            <h3>
              <a href="service-details.html">
                I will develop openai, dalle, chat gpt app for mobile
              </a>
            </h3>
          </div>
          <ul className="gigs-user-info">
            <li className="gigs-user">
              <img src= {user03} alt="img" />
              <p>By Regina</p>
            </li>
            <li className="gigs-loc">
              <p>
                <FaMapPin /> Canada
              </p>
            </li>
          </ul>
          <div className="gigs-card-footer">
            <h5>$830</h5>
            <span className="badge">Delivery in 1 day</span>
          </div>
        </Card.Body>
      </Card>
    </Col>
  );
};

export default ServiceList;
