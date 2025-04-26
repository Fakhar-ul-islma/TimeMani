import React from "react";

import "../../assets/css/style.css";
import "../../assets/css/bootstrap.min.css";
import "../../assets/css/owl.carousel.min.css";

import ipadIcon from "../../assets/images/ipad-icon.svg";
import serviceIcon from "../../assets/images/service-icon.svg";
import userIcon01 from "../../assets/images/user-icon-01.svg";



const FindYourNeeds = () => {
    return (
        <section className="provide-section">
			<div className="container">
				<div className="row">
					<div className="col-lg-6 col-md-9">
						<div className="section-header aos" data-aos="fade-up">
							<h2><span>We’r</span> here help to find your Needs.</h2>
							<p>Over 74K listings of Gigs- available today for you.</p>
						</div>
					</div>
				</div>
				<div className="row justify-content-center">
					<div className="col-lg-4 col-md-6">
						<div className="provide-box">
							<div className="provide-icon">
								<img src= {ipadIcon} alt="icon" />
							</div>
							<h3>Buy a Service</h3>
							<p>Explore homy’s 50K+ Service and uncover your ideal needs.</p>
							<a href="service.html" className="btn btn-primary">Get Started<i className="fa-solid fa-caret-right"></i></a>
						</div>
					</div>
					<div className="col-lg-4 col-md-6">
						<div className="provide-box">
							<div className="provide-icon">
								<img src= {serviceIcon} alt="icon" />
							</div>
							<h3>Sell a Service</h3>
							<p>Explore homy’s 50K+ Service and uncover your ideal needs.</p>
							<a href="add-gigs.html" className="btn btn-primary">Add Service<i className="fa-solid fa-caret-right"></i></a>
						</div>
					</div>
					<div className="col-lg-4 col-md-6">
						<div className="provide-box">
							<div className="provide-icon">
								<img src= {userIcon01}  alt="icon" />
							</div>
							<h3>Join Us</h3>
							<p>Explore homy’s 50K+ Service and uncover your ideal needs.</p>
							<a href="signup.html" className="btn btn-primary">Get Started<i className="fa-solid fa-caret-right"></i></a>
						</div>
					</div>
				</div>
			</div>
		</section>
    );
};

export default FindYourNeeds