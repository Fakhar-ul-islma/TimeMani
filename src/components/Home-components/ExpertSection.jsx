import React from "react";

import "../../../assets/css/style.css";
import "../../../assets/css/bootstrap.min.css";
import "../../../assets/css/owl.carousel.min.css";

import bannerBg04 from "../../../assets/images/banner-bg-04.png";


import ashape08 from "../../../assets/images/shape-08.png";

import flagIcon from "../../../assets/images/flag-icon.svg";

import expertIcon from "../../../assets/images/expert-icon.svg";

import usersIcon from "../../../assets/images/users-icon.svg";


const ExpertSection = () => {
    return (
        <section className="popular-section expert-section">
			<div className="popular-img">
				<div className="popular-img-left">
					<img src= {bannerBg04} alt="Shape" />
				</div>
				<div className="popular-img-right">
					<img src= {ashape08} alt="Shape" />
				</div>
			</div>
			<div className="container">
				<div className="expert-header">
					<div className="section-header text-center aos" data-aos="fade-up">
						<h2><span>What</span> Makes TimeBank Different</h2>
					</div>
				</div>
				<div className="expert-wrapper">
					<div className="row gx-0 justify-content-center">
						<div className="col-lg-4 col-md-6 aos" data-aos="fade-up">
							<div className="expert-item">
								<div className="expert-icon">
									<img src= {flagIcon} alt="img" />
								</div>
								<div className="expert-info">
									<h4>Trusted Services</h4>
									<p>Kulla quis velit vel nunc commodo ullamcorper. Pellentesque tincidunt et nisl eget porta. Vestibulum vel </p>
								</div>
							</div>
						</div>
						<div className="col-lg-4 col-md-6 aos" data-aos="fade-up">
							<div className="expert-item">
								<div className="expert-icon">
									<img src= {expertIcon} alt="img" />
								</div>
								<div className="expert-info">
									<h4>Transparent Pricing</h4>
									<p>Kulla quis velit vel nunc commodo ullamcorper. Pellentesque tincidunt et nisl eget porta. Vestibulum vel </p>
								</div>
							</div>
						</div>
						<div className="col-lg-4 col-md-6 aos" data-aos="fade-up">
							<div className="expert-item">
								<div className="expert-icon">
									<img src= {usersIcon} alt="img" />
								</div>
								<div className="expert-info">
									<h4>Trusted Services</h4>
									<p>Kulla quis velit vel nunc commodo ullamcorper. Pellentesque tincidunt et nisl eget porta. Vestibulum vel </p>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</section>
    );
};

export default ExpertSection