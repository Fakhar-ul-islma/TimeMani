import React from 'react';
import { Container, Row, Col, Image} from 'react-bootstrap';
// import Header from "../components/Header";
import BreadcrumbBar from '../components/about-components/BreadcrumbBar';
// import Footer from '../components/Footer'
// import WhyChooseUs from './components/about-components/WhyChooseUs';
// import ExplorePopularCategories from './components/about-components/ExplorePopularCategories';
// import OurClients from './components/about-components/OurClients'
// import StartAsSeller from './components/about-components/StartAsSeller'

import aboutUs01 from "../../assets/images/about-us-01.jpg";
import aboutUs02 from "../../assets/images/about-us-02.jpg";
import aboutUs03 from "../../assets/images/about-us-03.jpg";

import targetArrowIcon from "../../assets/images/target-arrow-icon.svg";




const AboutPage = () => {
  return (
    <>
    {/* <Header/> */}
    <BreadcrumbBar/>
      <section className="about-us-section">
        <Container>
          <Row className="align-items-center">
            <Col lg={6}>
              <Row>
                <Col sm={6}>
                  <div className="about-inner-img">
                    <Image src= {aboutUs01} fluid alt="img" />
                  </div>
                </Col>
                <Col sm={6}>
                  <Row>
                    <Col sm={12}>
                      <div className="about-inner-img">
                        <Image src= {aboutUs02} fluid alt="img" />
                      </div>
                    </Col>
                    <Col sm={12}>
                      <div className="about-inner-img">
                        <Image src= {aboutUs03} fluid alt="img" />
                      </div>
                    </Col>
                  </Row>
                </Col>
              </Row>
            </Col>
            <Col lg={6}>
              <div className="about-us-info">
                <div className="about-us-head">
                  <h6>About Us</h6>
                  <h2>We Provide Best solutions For Your Business</h2>
                  <p>
                    Welcome to Time Bank, where innovation meets expertise. We are a dynamic and forward-thinking service marketplace...
                  </p>
                  <h5>Our Mission</h5>
                  <p>
                    At Time Bank, our mission is to empower individuals and businesses by facilitating easy access...
                  </p>
                </div>
                <div className="about-features d-flex">
                  <ul className="list-one">
                    <li><span><img src= {targetArrowIcon} alt="icon" /></span>Diverse Network of Professionals</li>
                    <li><span><img src= {targetArrowIcon} alt="icon" /></span>Trust and Transparency</li>
                  </ul>
                  <ul className="list-two">
                    <li><span><img src= {targetArrowIcon} alt="icon" /></span>User Friendly Platform</li>
                    <li><span><img src= {targetArrowIcon} alt="icon" /></span>Innovation In Technology</li>
                  </ul>
                </div>
              </div>
            </Col>
          </Row>
        </Container>
      </section>
      {/* <WhyChooseUs/>
      <ExplorePopularCategories/>
      <OurClients/>
      <StartAsSeller/> */}
      {/* <Footer/> */}
   
    </>
  );
};

export default AboutPage;