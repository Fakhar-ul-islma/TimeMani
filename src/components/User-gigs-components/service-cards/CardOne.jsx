import React from 'react';
import { Row, Col, Card, Button, Badge } from 'react-bootstrap';
import { FaStar, FaHeart, FaMapPin, FaMeteor } from 'react-icons/fa';
import { Carousel } from 'react-bootstrap';

import "../../../../assets/css/style.css";
import "../../../../assets/css/bootstrap.min.css";
import "../../../../assets/css/owl.carousel.min.css";


import gigs01 from "../../../../assets/images/gigs-01.jpg";
import gigs06 from "../../../../assets/images/gigs-06.jpg";
import gigs07 from "../../../../assets/images/gigs-07.jpg";
import user01 from "../../../../assets/images/user-01.jpg";




// Add this CSS (you can put it in your CSS file or use inline styles)
const styles = {
  cardContainer: {
    display: 'flex',
    flexWrap: 'wrap',
    gap: '10px', // Adjust this value to control spacing
    margin: '0 -5px' // Optional: compensates for column padding
  },
  cardColumn: {
    padding: '0 5px', // Reduced padding between columns
    marginBottom: '10px' // Reduced space between rows
  },
  gigsGrid: {
    marginBottom: '0' // Remove default card margin
  }
};

const cardOne = () => {
  return (
    <Row style={styles.cardContainer}>
      <Col xl={12} md={10} style={styles.cardColumn}>
        <Card className="gigs-grid" style={styles.gigsGrid}>
          <div className="gigs-img">
            <Carousel>
              <Carousel.Item>
                <a href="service-details.html">
                  <img src= {gigs01} className="d-block w-100" alt="img" />
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
              <a href="service.html">
                <Badge variant="danger">
                  <FaMeteor /> Hot
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
                Website Promotion
              </a>
              <div className="star-rate">
                <span>
                  <FaStar /> 5.0
                </span>
              </div>
            </div>
            <div className="gigs-title">
              <h3>
                <a href="service-details.html">
                  I will do English or German transcript of any audio file or video
                </a>
              </h3>
            </div>
            <ul className="gigs-user-info">
              <li className="gigs-user">
                <img src= {user01} alt="img" />
                <p>By John</p>
              </li>
              <li className="gigs-loc">
                <p>
                  <FaMapPin /> New York
                </p>
              </li>
            </ul>
            <div className="gigs-card-footer">
              <h5>$780</h5>
              <span className="badge">Delivery in 1 day</span>
            </div>
          </Card.Body>
        </Card>
      </Col>
      
      {/* Add more Col components for other cards here */}
    </Row>
  );
};

export default cardOne;