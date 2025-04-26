import React from "react";

import "../../assets/css/style.css";
import "../../assets/css/bootstrap.min.css";
import "../../assets/css/owl.carousel.min.css";

import user16 from "../../assets/images/user-16.jpg";
import user17 from "../../assets/images/user-17.jpg";
import user18 from "../../assets/images/user-18.jpg";
import user19 from "../../assets/images/user-19.jpg";

import arrowIcon from "../../assets/images/arrow-icon.svg";

import testimonialBg01 from "../../assets/images/testimonial-bg-01.png";
import testimonialBg02 from "../../assets/images/testimonial-bg-02.png";
import testimonialBg03 from "../../assets/images/testimonial-bg-03.png";


const Testimonials = () => {
    return (
        <section className="testimonial-section">
			<div className="container">
				<div className="row">
					<div className="col-lg-12">
						<div className="section-header aos" data-aos="fade-up">
							<h2><span>Why</span> People Love with TimeBank</h2>
						</div>
						<div className="testimonial-slider owl-carousel">
							<div className="testimonial-item aos" data-aos="fade-up">
								<div className="testimonial-icon">
									<img src= {arrowIcon}  alt="icon" />
								</div>
								<h4>Great Work</h4>
								<p>“The best part about this service is the variety of skills available. I ve hired designers, writers, and developers, all in one place.”</p>
								<div className="star-rate">
									<span>
										<i className="fa-solid fa-star filled"></i>
										<i className="fa-solid fa-star filled"></i>
										<i className="fa-solid fa-star filled"></i>
										<i className="fa-solid fa-star filled"></i>
										<i className="fa-solid fa-star filled"></i>
									</span>
								</div>
								<div className="testimonial-user">
									<img src= {user17} alt="img" />
									<div className="testimonial-info">
										<h6>Gloria Weber</h6>
										<p>United States</p>
									</div>
								</div>
							</div>
							<div className="testimonial-item aos" data-aos="fade-up">
								<div className="testimonial-icon">
									<img src= {arrowIcon}  alt="icon" />
								</div>
								<h4>Seamless Experience</h4>
								<p>“I’ve completed several gigs on this site, and the experience has been seamless every time. Great for both freelancers and clients!”</p>
								<div className="star-rate">
									<span>
										<i className="fa-solid fa-star filled"></i>
										<i className="fa-solid fa-star filled"></i>
										<i className="fa-solid fa-star filled"></i>
										<i className="fa-solid fa-star filled"></i>
										<i className="fa-solid fa-star filled"></i>
									</span>
								</div>
								<div className="testimonial-user">
									<img src= {user18} alt="img" />
									<div className="testimonial-info">
										<h6>John Cramer</h6>
										<p>UK</p>
									</div>
								</div>
							</div>
							<div className="testimonial-item aos" data-aos="fade-up">
								<div className="testimonial-icon">
									<img src= {arrowIcon}  alt="icon" />
								</div>
								<h4>Great Work</h4>
								<p>“Finding the right freelancer for my project has never been easier. The platform is user-friendly, and the quality of talent is exceptional.”</p>
								<div className="star-rate">
									<span>
										<i className="fa-solid fa-star filled"></i>
										<i className="fa-solid fa-star filled"></i>
										<i className="fa-solid fa-star filled"></i>
										<i className="fa-solid fa-star filled"></i>
										<i className="fa-solid fa-star filled"></i>
									</span>
								</div>
								<div className="testimonial-user">
									<img src= {user19} alt="img" />
									<div className="testimonial-info">
										<h6>Mary Marquez</h6>
										<p>United States</p>
									</div>
								</div>
							</div>
							<div className="testimonial-item aos" data-aos="fade-up">
								<div className="testimonial-icon">
									<img src= {arrowIcon}  alt="icon" />
								</div>
								<h4>Great Effort</h4>
								<p>“I’ve completed several gigs on this site, and the experience has been seamless every time. Great for both freelancers and clients!”</p>
								<div className="star-rate">
									<span>
										<i className="fa-solid fa-star filled"></i>
										<i className="fa-solid fa-star filled"></i>
										<i className="fa-solid fa-star filled"></i>
										<i className="fa-solid fa-star filled"></i>
										<i className="fa-solid fa-star filled"></i>
									</span>
								</div>
								<div className="testimonial-user">
									<img src= {user16} alt="img" />
									<div className="testimonial-info">
										<h6>James Don</h6>
										<p>Canada</p>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
			<div className="testimonial-bg">
				<div className="testimonial-bg1">
					<img src= {testimonialBg01} alt="Shape" />
				</div>
				<div className="testimonial-bg2">
					<img src= {testimonialBg02} alt="Shape" />
				</div>
				<div className="testimonial-bg3">
					<img src= {testimonialBg03} alt="Shape" />
				</div>
			</div>
		</section>
    );
};

export default Testimonials