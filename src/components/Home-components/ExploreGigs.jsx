import React from "react";

import "../../../assets/css/style.css";
import "../../../assets/css/bootstrap.min.css";
import "../../../assets/css/owl.carousel.min.css";


import gigs01 from "../../../assets/images/gigs-01.jpg";
import gigs02 from "../../../assets/images/gigs-02.jpg";
import gigs03 from "../../../assets/images/gigs-03.jpg";
import gigs04 from "../../../assets/images/gigs-04.jpg";
import gigs05 from "../../../assets/images/gigs-05.jpg";
import gigs06 from "../../../assets/images/gigs-06.jpg";
import gigs07 from "../../../assets/images/gigs-07.jpg";
import gigs08 from "../../../assets/images/gigs-08.jpg";
import gigs09 from "../../../assets/images/gigs-09.jpg";
import gigs10 from "../../../assets/images/gigs-10.jpg";
import gigs11 from "../../../assets/images/gigs-11.jpg";
import gigs12 from "../../../assets/images/gigs-12.jpg";

import user01 from "../../../assets//images/user-01.jpg";
import user02 from "../../../assets//images/user-02.jpg";
import user03 from "../../../assets//images/user-03.jpg";
import user04 from "../../../assets//images/user-04.jpg";
import user05 from "../../../assets//images/user-05.jpg";

import mapPinCheck from "../../../assets//images/map-pin-check.svg";




const ExploreGigs = () => {
    return (
        <section className="explore-gigs-section">
			<div className="container">
				<div className="section-head d-flex">
					<div className="section-header aos" data-aos="fade-up">
						<h2><span>Explore</span> Our Gigs.</h2>
					</div>
					<div className="section-tab">
						<ul className="nav nav-pills inner-tab aos" id="pills-tab" role="tablist" data-aos="fade-up">
							<li className="nav-item" role="presentation">
								<button className="nav-link active" id="pills-popular-tab" data-bs-toggle="pill" data-bs-target="#pills-popular" type="button" role="tab" aria-controls="pills-popular" aria-selected="false">Popular</button>
								</li>	
							<li className="nav-item" role="presentation">
							<button className="nav-link" id="pills-latest-tab" data-bs-toggle="pill" data-bs-target="#pills-latest" type="button" role="tab" aria-controls="pills-latest" aria-selected="true">Latest</button>
							</li>

							<li className="nav-item" role="presentation">
								<button className="nav-link" id="pills-rating-tab" data-bs-toggle="pill" data-bs-target="#pills-rating" type="button" role="tab" aria-controls="pills-rating" aria-selected="false">Top Ratings</button>
							</li>	

							<li className="nav-item" role="presentation">
								<button className="nav-link" id="pills-trend-tab" data-bs-toggle="pill" data-bs-target="#pills-trend" type="button" role="tab" aria-controls="pills-trend" aria-selected="false">Trending </button>
							</li>
						</ul>
					</div>
				</div>
				<div className="tab-content dashboard-tab">
					<div className="tab-pane fade show active" id="pills-popular" role="tabpanel" aria-labelledby="pills-popular-tab">
						<div className="row aos" data-aos="fade-up" data-aos-delay="500">
							<div className="col-md-12">
								<div className="gigs-card-slider owl-carousel">
									<div className="gigs-grid">
										<div className="gigs-img">
											<div className="img-slider owl-carousel">
												<div className="slide-images">
													<a href="service-details.html">
														<img src= {gigs01} className="img-fluid" alt="Gigs" />
													</a>
												</div>
												<div className="slide-images">
													<a href="service-details.html">
														<img src= {gigs06} className="img-fluid" alt="Gigs" />
													</a>
												</div>
												<div className="slide-images">
													<a href="service-details.html">
														<img src= {gigs07} className="img-fluid" alt="Gigs" />
													</a>
												</div>
											</div>
											<div className="card-overlay-badge">
												<a href="service.html"><span className="badge bg-warning"><i className="feather-star"></i>Featured</span></a>
												<a href="service.html"><span className="badge bg-danger"><i className="fa-solid fa-meteor"></i>Hot</span></a>
											</div>
											<div className="fav-selection">
												<a href="#" onClick={(e) => e.preventDefault()}>
													<i className="feather-video"></i>
												</a>
												<a href="#" onClick={(e) => e.preventDefault()} className="fav-icon">
													<i className="feather-heart"></i>
												</a>
											</div>
											<div className="user-thumb">
												<a href="user-profile.html">
													<img src= {user01} alt="User" />
												</a>
											</div>
										</div>
										<div className="gigs-content">
											<div className="gigs-info">
												<a href="service-details.html" className="badge bg-primary-light">
													Programming & Tech
												</a>
												<small>+1</small>
												<p><img src= {mapPinCheck} alt="Icon" />Newyork</p>
											</div>
											<div className="gigs-title">
												<h3>
													<a href="service-details.html">
														Embedded Android & AOSP customizations
													</a>
												</h3>
											</div>
											<div className="star-rate">
												<span><i className="fa-solid fa-star"></i>5.0 (28 Reviews)</span>
											</div>
											<div className="gigs-card-footer">
												<div className="gigs-share">
													<a href="#" onClick={(e) => e.preventDefault()}>
														<i className="feather-share-2"></i>
													</a>
													<span className="badge">Delivery in 1 day</span>
												</div>
												<h5>Hrs.780</h5>
											</div>
										</div>
									</div>
									<div className="gigs-grid">
										<div className="gigs-img">
											<div className="img-slider owl-carousel">
												<div className="slide-images">
													<a href="service-details.html">
														<img src= {gigs02} className="img-fluid" alt="Gigs" />
													</a>
												</div>
												<div className="slide-images">
													<a href="service-details.html">
														<img src= {gigs08} className="img-fluid" alt="Gigs" />
													</a>
												</div>
												<div className="slide-images">
													<a href="service-details.html">
														<img src= {gigs09} className="img-fluid" alt="Gigs" />
													</a>
												</div>
											</div>										
											<div className="card-overlay-badge">
												<a href="service.html"><span className="badge bg-danger"><i className="fa-solid fa-meteor"></i>Hot</span></a>
											</div>
											<div className="fav-selection">
												<a href="#" onClick={(e) => e.preventDefault()}>
													<i className="feather-video"></i>
												</a>
												<a href="#" onClick={(e) => e.preventDefault()} className="fav-icon">
													<i className="feather-heart"></i>
												</a>
											</div>
											<div className="user-thumb">
												<a href="user-profile.html">
													<img src= {user02} alt="User" />
												</a>
											</div>
										</div>
										<div className="gigs-content">
											<div className="gigs-info">
												<a href="service.html" className="badge bg-primary-light">Videography</a>
												<p><img src= {mapPinCheck} alt="Icon" />London</p>
											</div>
											<div className="gigs-title">
												<h3>
													<a href="service-details.html">
														I will do professional lifestyle and product photography
													</a>
												</h3>
											</div>
											<div className="star-rate">
												<span><i className="fa-solid fa-star"></i>4.3 (22 Reviews)</span>
											</div>
											<div className="gigs-card-footer">
												<div className="gigs-share">
													<a href="#" onClick={(e) => e.preventDefault()}>
														<i className="feather-share-2"></i>
													</a>
													<span className="badge">Delivery in 2 days</span>
												</div>
												<h5>Hrs.350</h5>
											</div>
										</div>
									</div>
									<div className="gigs-grid">
										<div className="gigs-img">
											<div className="img-slider owl-carousel">
												<div className="slide-images">
													<a href="service-details.html">
														<img src= {gigs03} className="img-fluid" alt="Gigs" />
													</a>
												</div>
												<div className="slide-images">
													<a href="service-details.html">
														<img src= {gigs10} className="img-fluid" alt="Gigs" />
													</a>
												</div>
												<div className="slide-images">
													<a href="service-details.html">
														<img src= {gigs11} className="img-fluid" alt="Gigs" />
													</a>
												</div>
											</div>										
											<div className="card-overlay-badge">
												<a href="service.html"><span className="badge bg-warning"><i className="feather-star"></i>Featured</span></a>
											</div>
											<div className="fav-selection">
												<a href="#" onClick={(e) => e.preventDefault()}>
													<i className="feather-video"></i>
												</a>
												<a href="#" onClick={(e) => e.preventDefault()} className="fav-icon">
													<i className="feather-heart"></i>
												</a>
											</div>
											<div className="user-thumb">
												<a href="user-profile.html">
													<img src= {user03} alt="User" />
												</a>
											</div>
										</div>
										<div className="gigs-content">
											<div className="gigs-info">
												<a href="service-details.html" className="badge bg-primary-light">Music & Audio</a>
												<p><img src= {mapPinCheck} alt="Icon" />Canada</p>
											</div>
											<div className="gigs-title">
												<h3>
													<a href="service-details.html">
														I will develop openai, dalle, chat gpt app for mobile
													</a>
												</h3>
											</div>
											<div className="star-rate">
												<span><i className="fa-solid fa-star"></i>4.6 (475 Reviews)</span>
											</div>
											<div className="gigs-card-footer">
												<div className="gigs-share">
													<a href="#" onClick={(e) => e.preventDefault()}>
														<i className="feather-share-2"></i>
													</a>
													<span className="badge">Delivery in 1 day</span>
												</div>
												<h5>Hrs.830</h5>
											</div>
										</div>
									</div>
									<div className="gigs-grid">
										<div className="gigs-img">
											<div className="img-slider owl-carousel">
												<div className="slide-images">
													<a href="service-details.html">
														<img src= {gigs04} className="img-fluid" alt="Gigs" />
													</a>
												</div>
												<div className="slide-images">
													<a href="service-details.html">
														<img src= {gigs01} className="img-fluid" alt="Gigs" />
													</a>
												</div>
												<div className="slide-images">
													<a href="service-details.html">
														<img src= {gigs02} className="img-fluid" alt="Gigs" />
													</a>
												</div>
											</div>										
											<div className="card-overlay-badge">
												<a href="service.html"><span className="badge bg-danger"><i className="fa-solid fa-meteor"></i>Hot</span></a>
											</div>
											<div className="fav-selection">
												<a href="#" onClick={(e) => e.preventDefault()}>
													<i className="feather-video"></i>
												</a>
												<a href="#" onClick={(e) => e.preventDefault()} className="fav-icon">
													<i className="feather-heart"></i>
												</a>
											</div>
											<div className="user-thumb">
												<a href="user-profile.html">
													<img src= {user04} alt="user" />
												</a>
											</div>
										</div>
										<div className="gigs-content">
											<div className="gigs-info">
												<a href="service-details.html" className="badge bg-primary-light">
													Digital Marketing
												</a>
												<p><img src= {mapPinCheck} alt="Icon" />Indonesia</p>
											</div>
											<div className="gigs-title">
												<h3>
													<a href="service-details.html">Embedded Android & AOSP customizations</a>
												</h3>
											</div>
											<div className="star-rate">
												<span><i className="fa-solid fa-star"></i>4.5 (40 Reviews)</span>
											</div>
											<div className="gigs-card-footer">
												<div className="gigs-share">
													<a href="#" onClick={(e) => e.preventDefault()}>
														<i className="feather-share-2"></i>
													</a>
													<span className="badge">Delivery in 4 days</span>
												</div>
												<h5>Hrs.900</h5>
											</div>
										</div>
									</div>
									<div className="gigs-grid">
										<div className="gigs-img">
											<div className="img-slider owl-carousel">
												<div className="slide-images">
													<a href="service-details.html">
														<img src= {gigs05} className="img-fluid" alt="Gigs" />
													</a>
												</div>
												<div className="slide-images">
													<a href="service-details.html">
														<img src= {gigs03} className="img-fluid" alt="Gigs" />
													</a>
												</div>
												<div className="slide-images">
													<a href="service-details.html">
														<img src= {gigs12} className="img-fluid" alt="Gigs" />
													</a>
												</div>
											</div>
											<div className="card-overlay-badge">
												<a href="service.html"><span className="badge bg-danger"><i className="fa-solid fa-meteor"></i>Hot</span></a>
											</div>
											<div className="fav-selection">
												<a href="#" onClick={(e) => e.preventDefault()}>
													<i className="feather-video"></i>
												</a>
												<a href="#" onClick={(e) => e.preventDefault()} className="fav-icon">
													<i className="feather-heart"></i>
												</a>
											</div>
											<div className="user-thumb">
												<a href="user-profile.html">
													<img src= {user05} alt="user" />
												</a>
											</div>
										</div>
										<div className="gigs-content">
											<div className="gigs-info">
												<a href="service-details.html" className="badge bg-primary-light">
													Writing & Translation
												</a>
												<p><img src= {mapPinCheck} alt="Icon" />Tunsania</p>
											</div>
											<div className="gigs-title">
												<h3>
													<a href="service-details.html">
														I will do implementing chatbots on websites or messaging apps
													</a>
												</h3>
											</div>
											<div className="star-rate">
												<span><i className="fa-solid fa-star"></i>3.8 (70 Reviews)</span>
											</div>
											<div className="gigs-card-footer">
												<div className="gigs-share">
													<a href="#" onClick={(e) => e.preventDefault()}>
														<i className="feather-share-2"></i>
													</a>
													<span className="badge">Delivery in 6 days</span>
												</div>
												<h5>Hrs.400</h5>
											</div>
										</div>
									</div>
								</div>
							</div>
						</div>
					</div>
					<div className="tab-pane fade" id="pills-latest" role="tabpanel" aria-labelledby="pills-latest-tab">
						<div className="row">
							<div className="col-md-12">
								<div className="gigs-card-slider owl-carousel">
									<div className="gigs-grid">
										<div className="gigs-img">
											<div className="img-slider owl-carousel">
												<div className="slide-images">
													<a href="service-details.html">
														<img src= {gigs04} className="img-fluid" alt="Gigs" />
													</a>
												</div>
												<div className="slide-images">
													<a href="service-details.html">
														<img src= {gigs06} className="img-fluid" alt="Gigs" />
													</a>
												</div>
												<div className="slide-images">
													<a href="service-details.html">
														<img src= {gigs07} className="img-fluid" alt="Gigs" />
													</a>
												</div>
											</div>
											<div className="card-overlay-badge">
												<a href="service.html"><span className="badge bg-warning"><i className="feather-star"></i>Featured</span></a>
												<a href="service.html"><span className="badge bg-danger"><i className="fa-solid fa-meteor"></i>Hot</span></a>
											</div>
											<div className="fav-selection">
												<a href="#" onClick={(e) => e.preventDefault()}>
													<i className="feather-video"></i>
												</a>
												<a href="#" onClick={(e) => e.preventDefault()} className="fav-icon">
													<i className="feather-heart"></i>
												</a>
											</div>
											<div className="user-thumb">
												<a href="user-profile.html">
													<img src= {user01} alt="User" />
												</a>
											</div>
										</div>
										<div className="gigs-content">
											<div className="gigs-info">
												<a href="service-details.html" className="badge bg-primary-light">
													Programming & Tech
												</a>
												<p><img src= {mapPinCheck} alt="Icon" />Newyork</p>
											</div>
											<div className="gigs-title">
												<h3>
													<a href="service-details.html">
														I will do english or german transcript of any audio file or video
													</a>
												</h3>
											</div>
											<div className="star-rate">
												<span><i className="fa-solid fa-star"></i>5.0 (28 Reviews)</span>
											</div>
											<div className="gigs-card-footer">
												<div className="gigs-share">
													<a href="#" onClick={(e) => e.preventDefault()}>
														<i className="feather-share-2"></i>
													</a>
													<span className="badge">Delivery in 1 day</span>
												</div>
												<h5>Hrs.780</h5>
											</div>
										</div>
									</div>
									<div className="gigs-grid">
										<div className="gigs-img">
											<div className="img-slider owl-carousel">
												<div className="slide-images">
													<a href="service-details.html">
														<img src= {gigs05} className="img-fluid" alt="Gigs" />
													</a>
												</div>
												<div className="slide-images">
													<a href="service-details.html">
														<img src= {gigs08} className="img-fluid" alt="Gigs" />
													</a>
												</div>
												<div className="slide-images">
													<a href="service-details.html">
														<img src= {gigs09} className="img-fluid" alt="Gigs" />
													</a>
												</div>
											</div>										
											<div className="card-overlay-badge">
												<a href="service.html"><span className="badge bg-danger"><i className="fa-solid fa-meteor"></i>Hot</span></a>
											</div>
											<div className="fav-selection">
												<a href="#" onClick={(e) => e.preventDefault()}>
													<i className="feather-video"></i>
												</a>
												<a href="#" onClick={(e) => e.preventDefault()} className="fav-icon">
													<i className="feather-heart"></i>
												</a>
											</div>
											<div className="user-thumb">
												<a href="user-profile.html">
													<img src= {user02} alt="User" />
												</a>
											</div>
										</div>
										<div className="gigs-content">
											<div className="gigs-info">
												<a href="service-details.html" className="badge bg-primary-light">
													Videography
												</a>
												<p><img src= {mapPinCheck} alt="Icon" />London</p>
											</div>
											<div className="gigs-title">
												<h3>
													<a href="service-details.html">
														I will do professional lifestyle and product photography
													</a>
												</h3>
											</div>
											<div className="star-rate">
												<span><i className="fa-solid fa-star"></i>4.3 (22 Reviews)</span>
											</div>
											<div className="gigs-card-footer">
												<div className="gigs-share">
													<a href="#" onClick={(e) => e.preventDefault()}>
														<i className="feather-share-2"></i>
													</a>
													<span className="badge">Delivery in 5 days</span>
												</div>
												<h5>Hrs.350</h5>
											</div>
										</div>
									</div>
									<div className="gigs-grid">
										<div className="gigs-img">
											<div className="img-slider owl-carousel">
												<div className="slide-images">
													<a href="service-details.html">
														<img src= {gigs06} className="img-fluid" alt="Gigs" />
													</a>
												</div>
												<div className="slide-images">
													<a href="service-details.html">
														<img src= {gigs10} className="img-fluid" alt="Gigs" />
													</a>
												</div>
												<div className="slide-images">
													<a href="service-details.html">
														<img src= {gigs11} className="img-fluid" alt="Gigs" />
													</a>
												</div>
											</div>										
											<div className="card-overlay-badge">
												<a href="service.html"><span className="badge bg-warning"><i className="feather-star"></i>Featured</span></a>
											</div>
											<div className="fav-selection">
												<a href="#" onClick={(e) => e.preventDefault()}>
													<i className="feather-video"></i>
												</a>
												<a href="#" onClick={(e) => e.preventDefault()} className="fav-icon">
													<i className="feather-heart"></i>
												</a>
											</div>
											<div className="user-thumb">
												<a href="user-profile.html">
													<img src= {user03} alt="User" />
												</a>
											</div>
										</div>
										<div className="gigs-content">
											<div className="gigs-info">
												<a href="service-details.html" className="badge bg-primary-light">Music & Audio</a>
												<p><img src= {mapPinCheck} alt="Icon" />Canada</p>
											</div>
											<div className="gigs-title">
												<h3>
													<a href="service-details.html">
														I will develop openai, dalle, chat gpt app for mobile
													</a>
												</h3>
											</div>
											<div className="star-rate">
												<span><i className="fa-solid fa-star"></i>4.6 (475 Reviews)</span>
											</div>
											<div className="gigs-card-footer">
												<div className="gigs-share">
													<a href="#" onClick={(e) => e.preventDefault()}>
														<i className="feather-share-2"></i>
													</a>
													<span className="badge">Delivery in 8 days</span>
												</div>
												<h5>Hrs.830</h5>
											</div>
										</div>
									</div>
									<div className="gigs-grid">
										<div className="gigs-img">
											<div className="img-slider owl-carousel">
												<div className="slide-images">
													<a href="service-details.html">
														<img src= {gigs04} className="img-fluid" alt="Gigs" />
													</a>
												</div>
												<div className="slide-images">
													<a href="service-details.html">
														<img src= {gigs01} className="img-fluid" alt="Gigs" />
													</a>
												</div>
												<div className="slide-images">
													<a href="service-details.html">
														<img src= {gigs02} className="img-fluid" alt="Gigs" />
													</a>
												</div>
											</div>										
											<div className="card-overlay-badge">
												<a href="service.html"><span className="badge bg-danger"><i className="fa-solid fa-meteor"></i>Hot</span></a>
											</div>
											<div className="fav-selection">
												<a href="#" onClick={(e) => e.preventDefault()}>
													<i className="feather-video"></i>
												</a>
												<a href="#" onClick={(e) => e.preventDefault()} className="fav-icon">
													<i className="feather-heart"></i>
												</a>
											</div>
											<div className="user-thumb">
												<a href="user-profile.html">
													<img src= {user04} alt="User" />
												</a>
											</div>
										</div>
										<div className="gigs-content">
											<div className="gigs-info">
												<a href="service-details.html" className="badge bg-primary-light">
													Digital Marketing
												</a>
												<p><img src= {mapPinCheck} alt="Icon" />Indonesia</p>
											</div>
											<div className="gigs-title">
												<h3>
													<a href="service-details.html">Embedded Android & AOSP customizations</a>
												</h3>
											</div>
											<div className="star-rate">
												<span><i className="fa-solid fa-star"></i>4.5 (40 Reviews)</span>
											</div>
											<div className="gigs-card-footer">
												<div className="gigs-share">
													<a href="#" onClick={(e) => e.preventDefault()}>
														<i className="feather-share-2"></i>
													</a>
													<span className="badge">Delivery in 2 days</span>
												</div>
												<h5>Hrs.900</h5>
											</div>
										</div>
									</div>
									<div className="gigs-grid">
										<div className="gigs-img">
											<div className="img-slider owl-carousel">
												<div className="slide-images">
													<a href="service-details.html">
														<img src= {gigs05} className="img-fluid" alt="Gigs" />
													</a>
												</div>
												<div className="slide-images">
													<a href="service-details.html">
														<img src= {gigs03} className="img-fluid" alt="Gigs" />
													</a>
												</div>
												<div className="slide-images">
													<a href="service-details.html">
														<img src= {gigs12} className="img-fluid" alt="Gigs" />
													</a>
												</div>
											</div>
											<div className="card-overlay-badge">
												<a href="service.html"><span className="badge bg-danger"><i className="fa-solid fa-meteor"></i>Hot</span></a>
											</div>
											<div className="fav-selection">
												<a href="#" onClick={(e) => e.preventDefault()}>
													<i className="feather-video"></i>
												</a>
												<a href="#" onClick={(e) => e.preventDefault()} className="fav-icon">
													<i className="feather-heart"></i>
												</a>
											</div>
											<div className="user-thumb">
												<a href="user-profile.html">
													<img src= {user05} alt="User" />
												</a>
											</div>
										</div>
										<div className="gigs-content">
											<div className="gigs-info">
												<a href="service-details.html" className="badge bg-primary-light">
													Writing & Translation
												</a>
												<p><img src= {mapPinCheck} alt="Icon" />Tunsania</p>
											</div>
											<div className="gigs-title">
												<h3>
													<a href="service-details.html">
														I will do implementing chatbots on websites or messaging apps
													</a>
												</h3>
											</div>
											<div className="star-rate">
												<span><i className="fa-solid fa-star"></i>3.8 (70 Reviews)</span>
											</div>
											<div className="gigs-card-footer">
												<div className="gigs-share">
													<a href="#" onClick={(e) => e.preventDefault()}>
														<i className="feather-share-2"></i>
													</a>
													<span className="badge">Delivery in 1 day</span>
												</div>
												<h5>Hrs.400</h5>
											</div>
										</div>
									</div>
								</div>
							</div>
						</div>
					</div>
					<div className="tab-pane fade" id="pills-rating" role="tabpanel" aria-labelledby="pills-rating-tab">
						<div className="row">
							<div className="col-md-12">
								<div className="gigs-card-slider owl-carousel">
									<div className="gigs-grid">
										<div className="gigs-img">
											<div className="img-slider owl-carousel">
												<div className="slide-images">
													<a href="service-details.html">
														<img src= {gigs04} className="img-fluid" alt="Gigs" />
													</a>
												</div>
												<div className="slide-images">
													<a href="service-details.html">
														<img src= {gigs06} className="img-fluid" alt="Gigs" />
													</a>
												</div>
												<div className="slide-images">
													<a href="service-details.html">
														<img src= {gigs07} className="img-fluid" alt="Gigs" />
													</a>
												</div>
											</div>
											<div className="card-overlay-badge">
												<a href="service.html"><span className="badge bg-warning"><i className="feather-star"></i>Featured</span></a>
												<a href="service.html"><span className="badge bg-danger"><i className="fa-solid fa-meteor"></i>Hot</span></a>
											</div>
											<div className="fav-selection">
												<a href="#" onClick={(e) => e.preventDefault()}>
													<i className="feather-video"></i>
												</a>
												<a href="#" onClick={(e) => e.preventDefault()} className="fav-icon">
													<i className="feather-heart"></i>
												</a>
											</div>
											<div className="user-thumb">
												<a href="user-profile.html">
													<img src= {user01} alt="User" />
												</a>
											</div>
										</div>
										<div className="gigs-content">
											<div className="gigs-info">
												<a href="service-details.html" className="badge bg-primary-light">
													Programming & Tech
												</a>
												<p><img src= {mapPinCheck} alt="Icon" />Newyork</p>
											</div>
											<div className="gigs-title">
												<h3>
													<a href="service-details.html">
														I will do english or german transcript of any audio file or video
													</a>
												</h3>
											</div>
											<div className="star-rate">
												<span><i className="fa-solid fa-star"></i>5.0 (28 Reviews)</span>
											</div>
											<div className="gigs-card-footer">
												<div className="gigs-share">
													<a href="#" onClick={(e) => e.preventDefault()}>
														<i className="feather-share-2"></i>
													</a>
													<span className="badge">Delivery in 7 days</span>
												</div>
												<h5>Hrs.780</h5>
											</div>
										</div>
									</div>
									<div className="gigs-grid">
										<div className="gigs-img">
											<div className="img-slider owl-carousel">
												<div className="slide-images">
													<a href="service-details.html">
														<img src= {gigs05} className="img-fluid" alt="Gigs" />
													</a>
												</div>
												<div className="slide-images">
													<a href="service-details.html">
														<img src= {gigs08} className="img-fluid" alt="Gigs" />
													</a>
												</div>
												<div className="slide-images">
													<a href="service-details.html">
														<img src= {gigs09} className="img-fluid" alt="Gigs" />
													</a>
												</div>
											</div>										
											<div className="card-overlay-badge">
												<a href="service.html"><span className="badge bg-danger"><i className="fa-solid fa-meteor"></i>Hot</span></a>
											</div>
											<div className="fav-selection">
												<a href="#" onClick={(e) => e.preventDefault()}>
													<i className="feather-video"></i>
												</a>
												<a href="#" onClick={(e) => e.preventDefault()} className="fav-icon">
													<i className="feather-heart"></i>
												</a>
											</div>
											<div className="user-thumb">
												<a href="user-profile.html">
													<img src= {user02} alt="User" />
												</a>
											</div>
										</div>
										<div className="gigs-content">
											<div className="gigs-info">
												<a href="service-details.html" className="badge bg-primary-light">
													Videography
												</a>
												<p><img src= {mapPinCheck} alt="Icon" />London</p>
											</div>
											<div className="gigs-title">
												<h3>
													<a href="service-details.html">
														I will do professional lifestyle and product photography
													</a>
												</h3>
											</div>
											<div className="star-rate">
												<span><i className="fa-solid fa-star"></i>4.3 (22 Reviews)</span>
											</div>
											<div className="gigs-card-footer">
												<div className="gigs-share">
													<a href="#" onClick={(e) => e.preventDefault()}>
														<i className="feather-share-2"></i>
													</a>
													<span className="badge">Delivery in 10 days</span>
												</div>
												<h5>Hrs.350</h5>
											</div>
										</div>
									</div>
									<div className="gigs-grid">
										<div className="gigs-img">
											<div className="img-slider owl-carousel">
												<div className="slide-images">
													<a href="service-details.html">
														<img src= {gigs06} className="img-fluid" alt="Gigs" />
													</a>
												</div>
												<div className="slide-images">
													<a href="service-details.html">
														<img src= {gigs10} className="img-fluid" alt="Gigs" />
													</a>
												</div>
												<div className="slide-images">
													<a href="service-details.html">
														<img src= {gigs11} className="img-fluid" alt="Gigs" />
													</a>
												</div>
											</div>										
											<div className="card-overlay-badge">
												<a href="service.html"><span className="badge bg-warning"><i className="feather-star"></i>Featured</span></a>
											</div>
											<div className="fav-selection">
												<a href="#" onClick={(e) => e.preventDefault()}>
													<i className="feather-video"></i>
												</a>
												<a href="#" onClick={(e) => e.preventDefault()} className="fav-icon">
													<i className="feather-heart"></i>
												</a>
											</div>
											<div className="user-thumb">
												<a href="user-profile.html">
													<img src= {user03} alt="User" />
												</a>
											</div>
										</div>
										<div className="gigs-content">
											<div className="gigs-info">
												<a href="service-details.html" className="badge bg-primary-light">
													Music & Audio
												</a>
												<p><img src= {mapPinCheck} alt="Icon" />Canada</p>
											</div>
											<div className="gigs-title">
												<h3>
													<a href="service-details.html">
														I will develop openai, dalle, chat gpt app for mobile
													</a>
												</h3>
											</div>
											<div className="star-rate">
												<span><i className="fa-solid fa-star"></i>4.6 (475 Reviews)</span>
											</div>
											<div className="gigs-card-footer">
												<div className="gigs-share">
													<a href="#" onClick={(e) => e.preventDefault()}>
														<i className="feather-share-2"></i>
													</a>
													<span className="badge">Delivery in 2 days</span>
												</div>
												<h5>Hrs.830</h5>
											</div>
										</div>
									</div>
									<div className="gigs-grid">
										<div className="gigs-img">
											<div className="img-slider owl-carousel">
												<div className="slide-images">
													<a href="service-details.html">
														<img src= {gigs04} className="img-fluid" alt="Gigs" />
													</a>
												</div>
												<div className="slide-images">
													<a href="service-details.html">
														<img src= {gigs01} className="img-fluid" alt="Gigs" />
													</a>
												</div>
												<div className="slide-images">
													<a href="service-details.html">
														<img src= {gigs02} className="img-fluid" alt="Gigs" />
													</a>
												</div>
											</div>										
											<div className="card-overlay-badge">
												<a href="service.html"><span className="badge bg-danger"><i className="fa-solid fa-meteor"></i>Hot</span></a>
											</div>
											<div className="fav-selection">
												<a href="#" onClick={(e) => e.preventDefault()}>
													<i className="feather-video"></i>
												</a>
												<a href="#" onClick={(e) => e.preventDefault()} className="fav-icon">
													<i className="feather-heart"></i>
												</a>
											</div>
											<div className="user-thumb">
												<a href="user-profile.html">
													<img src= {user04} alt="User" />
												</a>
											</div>
										</div>
										<div className="gigs-content">
											<div className="gigs-info">
												<a href="service-details.html" className="badge bg-primary-light">
													Digital Marketing
												</a>
												<p><img src= {mapPinCheck} alt="Icon" />Indonesia</p>
											</div>
											<div className="gigs-title">
												<h3>
													<a href="service-details.html">Embedded Android & AOSP customizations</a>
												</h3>
											</div>
											<div className="star-rate">
												<span><i className="fa-solid fa-star"></i>4.5 (40 Reviews)</span>
											</div>
											<div className="gigs-card-footer">
												<div className="gigs-share">
													<a href="#" onClick={(e) => e.preventDefault()}>
														<i className="feather-share-2"></i>
													</a>
													<span className="badge">Delivery in 3 days</span>
												</div>
												<h5>Hrs.900</h5>
											</div>
										</div>
									</div>
									<div className="gigs-grid">
										<div className="gigs-img">
											<div className="img-slider owl-carousel">
												<div className="slide-images">
													<a href="service-details.html">
														<img src= {gigs05} className="img-fluid" alt="Gigs" />
													</a>
												</div>
												<div className="slide-images">
													<a href="service-details.html">
														<img src= {gigs03} className="img-fluid" alt="Gigs" />
													</a>
												</div>
												<div className="slide-images">
													<a href="service-details.html">
														<img src= {gigs12} className="img-fluid" alt="Gigs" />
													</a>
												</div>
											</div>
											<div className="card-overlay-badge">
												<a href="service.html"><span className="badge bg-danger"><i className="fa-solid fa-meteor"></i>Hot</span></a>
											</div>
											<div className="fav-selection">
												<a href="#" onClick={(e) => e.preventDefault()}>
													<i className="feather-video"></i>
												</a>
												<a href="#" onClick={(e) => e.preventDefault()} className="fav-icon">
													<i className="feather-heart"></i>
												</a>
											</div>
											<div className="user-thumb">
												<a href="user-profile.html">
													<img src= {user05} alt="User" />
												</a>
											</div>
										</div>
										<div className="gigs-content">
											<div className="gigs-info">
												<a href="service-details.html" className="badge bg-primary-light">
													Writing & Translation
												</a>
												<p><img src= {mapPinCheck} alt="Icon" />Tunsania</p>
											</div>
											<div className="gigs-title">
												<h3>
													<a href="service-details.html">
														I will do implementing chatbots on websites or messaging apps
													</a>
												</h3>
											</div>
											<div className="star-rate">
												<span><i className="fa-solid fa-star"></i>3.8 (70 Reviews)</span>
											</div>
											<div className="gigs-card-footer">
												<div className="gigs-share">
													<a href="#" onClick={(e) => e.preventDefault()}>
														<i className="feather-share-2"></i>
													</a>
													<span className="badge">Delivery in 6 days</span>
												</div>
												<h5>Hrs.400</h5>
											</div>
										</div>
									</div>
								</div>
							</div>
						</div>
					</div>
					<div className="tab-pane fade" id="pills-trend" role="tabpanel" aria-labelledby="pills-trend-tab">
						<div className="row">
							<div className="col-md-12">
								<div className="gigs-card-slider owl-carousel">
									<div className="gigs-grid">
										<div className="gigs-img">
											<div className="img-slider owl-carousel">
												<div className="slide-images">
													<a href="service-details.html">
														<img src= {gigs08} className="img-fluid" alt="Gigs" />
													</a>
												</div>
												<div className="slide-images">
													<a href="service-details.html">
														<img src= {gigs06} className="img-fluid" alt="Gigs" />
													</a>
												</div>
												<div className="slide-images">
													<a href="service-details.html">
														<img src= {gigs07} className="img-fluid" alt="Gigs" />
													</a>
												</div>
											</div>
											<div className="card-overlay-badge">
												<a href="service.html"><span className="badge bg-warning"><i className="feather-star"></i>Featured</span></a>
												<a href="service.html"><span className="badge bg-danger"><i className="fa-solid fa-meteor"></i>Hot</span></a>
											</div>
											<div className="fav-selection">
												<a href="#" onClick={(e) => e.preventDefault()}>
													<i className="feather-video"></i>
												</a>
												<a href="#" onClick={(e) => e.preventDefault()} className="fav-icon">
													<i className="feather-heart"></i>
												</a>
											</div>
											<div className="user-thumb">
												<a href="user-profile.html">
													<img src= {user01} alt="User" />
												</a>
											</div>
										</div>
										<div className="gigs-content">
											<div className="gigs-info">
												<a href="service-details.html" className="badge bg-primary-light">
													Programming & Tech
												</a>
												<p><img src= {mapPinCheck} alt="Icon" />Newyork</p>
											</div>
											<div className="gigs-title">
												<h3>
													<a href="service-details.html">
														I will do english or german transcript of any audio file or video
													</a>
												</h3>
											</div>
											<div className="star-rate">
												<span><i className="fa-solid fa-star"></i>5.0 (28 Reviews)</span>
											</div>
											<div className="gigs-card-footer">
												<div className="gigs-share">
													<a href="#" onClick={(e) => e.preventDefault()}>
														<i className="feather-share-2"></i>
													</a>
													<span className="badge">Delivery in 12 days</span>
												</div>
												<h5>Hrs.780</h5>
											</div>
										</div>
									</div>
									<div className="gigs-grid">
										<div className="gigs-img">
											<div className="img-slider owl-carousel">
												<div className="slide-images">
													<a href="service-details.html">
														<img src= {gigs07} className="img-fluid" alt="Gigs" />
													</a>
												</div>
												<div className="slide-images">
													<a href="service-details.html">
														<img src= {gigs08} className="img-fluid" alt="Gigs" />
													</a>
												</div>
												<div className="slide-images">
													<a href="service-details.html">
														<img src= {gigs09} className="img-fluid" alt="Gigs" />
													</a>
												</div>
											</div>										
											<div className="card-overlay-badge">
												<a href="service.html"><span className="badge bg-danger"><i className="fa-solid fa-meteor"></i>Hot</span></a>
											</div>
											<div className="fav-selection">
												<a href="#" onClick={(e) => e.preventDefault()}>
													<i className="feather-video"></i>
												</a>
												<a href="#" onClick={(e) => e.preventDefault()} className="fav-icon">
													<i className="feather-heart"></i>
												</a>
											</div>
											<div className="user-thumb">
												<a href="user-profile.html">
													<img src= {user02} alt="User" />
												</a>
											</div>
										</div>
										<div className="gigs-content">
											<div className="gigs-info">
												<a href="service-details.html" className="badge bg-primary-light">
													Videography
												</a>
												<p><img src= {mapPinCheck} alt="Icon" />London</p>
											</div>
											<div className="gigs-title">
												<h3>
													<a href="service-details.html">
														I will do professional lifestyle and product photography
													</a>
												</h3>
											</div>
											<div className="star-rate">
												<span><i className="fa-solid fa-star"></i>4.3 (22 Reviews)</span>
											</div>
											<div className="gigs-card-footer">
												<div className="gigs-share">
													<a href="#" onClick={(e) => e.preventDefault()}>
														<i className="feather-share-2"></i>
													</a>
													<span className="badge">Delivery in 5 days</span>
												</div>
												<h5>Hrs.350</h5>
											</div>
										</div>
									</div>
									<div className="gigs-grid">
										<div className="gigs-img">
											<div className="img-slider owl-carousel">
												<div className="slide-images">
													<a href="service-details.html">
														<img src= {gigs09} className="img-fluid" alt="Gigs" />
													</a>
												</div>
												<div className="slide-images">
													<a href="service-details.html">
														<img src= {gigs10} className="img-fluid" alt="Gigs" />
													</a>
												</div>
												<div className="slide-images">
													<a href="service-details.html">
														<img src= {gigs11} className="img-fluid" alt="Gigs" />
													</a>
												</div>
											</div>										
											<div className="card-overlay-badge">
												<a href="service.html"><span className="badge bg-warning"><i className="feather-star"></i>Featured</span></a>
											</div>
											<div className="fav-selection">
												<a href="#" onClick={(e) => e.preventDefault()}>
													<i className="feather-video"></i>
												</a>
												<a href="#" onClick={(e) => e.preventDefault()} className="fav-icon">
													<i className="feather-heart"></i>
												</a>
											</div>
											<div className="user-thumb">
												<a href="user-profile.html">
													<img src= {user03} alt="User" />
												</a>
											</div>
										</div>
										<div className="gigs-content">
											<div className="gigs-info">
												<a href="service-details.html" className="badge bg-primary-light">
													Music & Audio
												</a>
												<p><img src= {mapPinCheck} alt="Icon" />Canada</p>
											</div>
											<div className="gigs-title">
												<h3>
													<a href="service-details.html">
														I will develop openai, dalle, chat gpt app for mobile
													</a>
												</h3>
											</div>
											<div className="star-rate">
												<span><i className="fa-solid fa-star"></i>4.6 (475 Reviews)</span>
											</div>
											<div className="gigs-card-footer">
												<div className="gigs-share">
													<a href="#" onClick={(e) => e.preventDefault()}>
														<i className="feather-share-2"></i>
													</a>
													<span className="badge">Delivery in 9 days</span>
												</div>
												<h5>Hrs.830</h5>
											</div>
										</div>
									</div>
									<div className="gigs-grid">
										<div className="gigs-img">
											<div className="img-slider owl-carousel">
												<div className="slide-images">
													<a href="service-details.html">
														<img src= {gigs04} className="img-fluid" alt="Gigs" />
													</a>
												</div>
												<div className="slide-images">
													<a href="service-details.html">
														<img src= {gigs01} className="img-fluid" alt="Gigs" />
													</a>
												</div>
												<div className="slide-images">
													<a href="service-details.html">
														<img src= {gigs02} className="img-fluid" alt="Gigs" />
													</a>
												</div>
											</div>										
											<div className="card-overlay-badge">
												<a href="service.html"><span className="badge bg-danger"><i className="fa-solid fa-meteor"></i>Hot</span></a>
											</div>
											<div className="fav-selection">
												<a href="#" onClick={(e) => e.preventDefault()}>
													<i className="feather-video"></i>
												</a>
												<a href="#" onClick={(e) => e.preventDefault()} className="fav-icon">
													<i className="feather-heart"></i>
												</a>
											</div>
											<div className="user-thumb">
												<a href="user-profile.html">
													<img src= {user04} alt="User" />
												</a>
											</div>
										</div>
										<div className="gigs-content">
											<div className="gigs-info">
												<a href="service-details.html" className="badge bg-primary-light">
													Digital Marketing
												</a>
												<p><img src= {mapPinCheck} alt="Icon" />Indonesia</p>
											</div>
											<div className="gigs-title">
												<h3>
													<a href="service-details.html">Embedded Android & AOSP customizations</a>
												</h3>
											</div>
											<div className="star-rate">
												<span><i className="fa-solid fa-star"></i>4.5 (40 Reviews)</span>
											</div>
											<div className="gigs-card-footer">
												<div className="gigs-share">
													<a href="#" onClick={(e) => e.preventDefault()}>
														<i className="feather-share-2"></i>
													</a>
													<span className="badge">Delivery in 3 days</span>
												</div>
												<h5>Hrs.900</h5>
											</div>
										</div>
									</div>
									<div className="gigs-grid">
										<div className="gigs-img">
											<div className="img-slider owl-carousel">
												<div className="slide-images">
													<a href="service-details.html">
														<img src= {gigs05} className="img-fluid" alt="Gigs" />
													</a>
												</div>
												<div className="slide-images">
													<a href="service-details.html">
														<img src= {gigs03} className="img-fluid" alt="Gigs" />
													</a>
												</div>
												<div className="slide-images">
													<a href="service-details.html">
														<img src= {gigs12} className="img-fluid" alt="Gigs" />
													</a>
												</div>
											</div>
											<div className="card-overlay-badge">
												<a href="service.html"><span className="badge bg-danger"><i className="fa-solid fa-meteor"></i>Hot</span></a>
											</div>
											<div className="fav-selection">
												<a href="#" onClick={(e) => e.preventDefault()}>
													<i className="feather-video"></i>
												</a>
												<a href="#" onClick={(e) => e.preventDefault()} className="fav-icon">
													<i className="feather-heart"></i>
												</a>
											</div>
											<div className="user-thumb">
												<a href="user-profile.html">
													<img src= {user05} alt="User" />
												</a>
											</div>
										</div>
										<div className="gigs-content">
											<div className="gigs-info">
												<a href="service-details" className="badge bg-primary-light">
													Writing & Translation
												</a>
												<p><img src= {mapPinCheck} alt="Icon" />Tunsania</p>
											</div>
											<div className="gigs-title">
												<h3>
													<a href="service-details.html">
														I will do implementing chatbots on websites or messaging apps
													</a>
												</h3>
											</div>
											<div className="star-rate">
												<span><i className="fa-solid fa-star"></i>3.8 (70 Reviews)</span>
											</div>
											<div className="gigs-card-footer">
												<div className="gigs-share">
													<a href="#" onClick={(e) => e.preventDefault()}>
														<i className="feather-share-2"></i>
													</a>
													<span className="badge">Delivery in 4 days</span>
												</div>
												<h5>Hrs.400</h5>
											</div>
										</div>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</section>
    )
}

export default ExploreGigs


