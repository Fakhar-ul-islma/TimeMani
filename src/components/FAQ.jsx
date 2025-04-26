import React from "react";

import "../../assets/css/style.css";
import "../../assets/css/bootstrap.min.css";
import "../../assets/css/owl.carousel.min.css";

import sectionBg03 from "../../assets/images/section-bg-03.png";
import sectionBg06 from "../../assets/images/section-bg-06.png";


import bannerBg04 from "../../assets/images/banner-bg-04.png";

import listSearchIcon from "../../assets/images/list-search-icon.svg";


const FAQ = () => {
    return (
        <section className="explore-services-sec">
			<div className="section-bg">
				<img src= {sectionBg06} className="explore-bg1" alt="img" />
			</div>
			<div className="container">
				<div className="faq-sec">
					<div className="row align-items-center">
						<div className="col-lg-4">
							<div className="faq-heading aos" data-aos="fade-up">
								<div className="section-header">
									<h2><span>Your</span> Frequently Added Question’s</h2>
								</div>
								<p>Don’t find the answer? We can help you.</p>
								<a href="faq.html" className="btn btn-primary">Ask a Question<i className="fa-solid fa-caret-right"></i></a>
							</div>
						</div>
						<div className="col-lg-8">
							<div className="faq-wrapper faq-lists">
								<div className="faq-card aos" data-aos="fade-up">
									<h4 className="faq-title">
										<a className="collapsed" data-bs-toggle="collapse" href="#faqone" aria-expanded="false">What are website development services?</a>
									</h4>
									<div id="faqone" className="card-collapse collapse">
										<div className="faq-content">
											<p>Whether you’re looking to launch, update, or overhaul your website, we offers a talented pool of freelancers who turn ideas into action. From personal brand  pages to eCommerce stores and everything in between, website development services cover virtually any use case, industry, and niche. In turn, you can make every digital first impression count.</p>
										</div>
									</div>
								</div>
								<div className="faq-card aos" data-aos="fade-up">
									<h4 className="faq-title">
										<a className="collapsed" data-bs-toggle="collapse" href="#faqtwo" aria-expanded="false">What are the stages of a project?</a>
									</h4>
									<div id="faqtwo" className="card-collapse collapse">
										<div className="faq-content">
											<p>Yes! My service guarantees you 24/7 lifetime support for anything related to your website. Whenever you encounter a problem, feel free to reach out to me anytime.</p>
										</div>
									</div>
								</div>
								<div className="faq-card aos" data-aos="fade-up">
									<h4 className="faq-title">
										<a className="collapsed" data-bs-toggle="collapse" href="#faqOne" aria-expanded="false">What types of service can I pick?</a>
									</h4>
									<div id="faqOne" className="card-collapse collapse">
										<div className="faq-content">
											<p>Yes! My service guarantees you 24/7 lifetime support for anything related to your website. Whenever you encounter a problem, feel free to reach out to me anytime.</p>
										</div>
									</div>
								</div>
								<div className="faq-card aos" data-aos="fade-up">
									<h4 className="faq-title">
										<a className="collapsed" data-bs-toggle="collapse" href="#faqfour" aria-expanded="false">How much does it cost to develop a basic projects?</a>
									</h4>
									<div id="faqfour" className="card-collapse collapse">
										<div className="faq-content">
											<p>Yes! My service guarantees you 24/7 lifetime support for anything related to your website. Whenever you encounter a problem, feel free to reach out to me anytime.</p>
										</div>
									</div>
								</div>
								<div className="faq-card aos" data-aos="fade-up">
									<h4 className="faq-title">
										<a className="collapsed" data-bs-toggle="collapse" href="#faqfive" aria-expanded="false">What are the most popular development platforms?</a>
									</h4>
									<div id="faqfive" className="card-collapse collapse">
										<div className="faq-content">
											<p>Yes! My service guarantees you 24/7 lifetime support for anything related to your website. Whenever you encounter a problem, feel free to reach out to me anytime.</p>
										</div>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
				<div className="trusted-customers-sec">
					<div className="section-bg">
						<img src= {bannerBg04} className="explore-bg2" alt="img" />
					</div>
					<div className="trusted-customers">
						<div className="section-bg">
							<img src= {sectionBg03} className="trusted-bg-one" alt="img" />
							<img src= {sectionBg03} className="trusted-bg-two" alt="img" />
						</div>
						<div className="section-header" data-aos="fade-up" data-aos-delay="500">
							<h2>Find the right service for your needs</h2>
							<p>Over 74K listings of Gigs- available today for you.</p>
						</div>
						<div className="more-btn text-center" data-aos="fade-up" data-aos-delay="500">
							<a href="service.html" className="btn btn-primary"><img src= {listSearchIcon} className="me-2" alt="img" />Explore Services</a>
						</div>		
					</div>
				</div>
			</div>
		</section>
    )
};

export default FAQ