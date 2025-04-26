import React from "react";

import "../../../assets/css/style.css";
import "../../../assets/css/bootstrap.min.css";
import "../../../assets/css/owl.carousel.min.css";

import list01 from "../../../assets/images/list-01.jpg";
import list02 from "../../../assets/images/list-02.jpg";
import list03 from "../../../assets/images/list-03.jpg";
import list04 from "../../../assets/images/list-04.jpg";
import list05 from "../../../assets/images/list-05.jpg";
import list06 from "../../../assets/images/list-06.jpg";
import list07 from "../../../assets/images/list-07.jpg";
import list08 from "../../../assets/images/list-08.jpg";
import list09 from "../../../assets/images/list-09.jpg";
import list10 from "../../../assets/images/list-10.jpg";
import list11 from "../../../assets/images/list-11.jpg";
import list12 from "../../../assets/images/list-12.jpg";
import list13 from "../../../assets/images/list-13.jpg";

import mapPinHeart from "../../../assets/images/map-pin-check.svg";

import user01 from "../../../assets/images/user-01.jpg";
import user02 from "../../../assets/images/user-02.jpg";
import user03 from "../../../assets/images/user-03.jpg";
import user04 from "../../../assets/images/user-04.jpg";
import user05 from "../../../assets/images/user-05.jpg";



const Listings = () => {
    return (
        <section className="listing-section">
			<div className="container">
				<div className="section-header aos" data-aos="fade-up">
					<h2><span>Our</span> Inspiring Listings</h2>
				</div>

				{/* <!-- Listing Tabs --> */}
				<div className="listing-tab">
					<div className="listing-slider">
						<ul className="nav nav-tabs">
							<li className="nav-item">
								<a href="javascript:void(0);" className="nav-link active" data-bs-toggle="tab" data-bs-target="#writing_translation">
									Writing & Translation
								</a>
							</li>
							<li className="nav-item">
								<a href="javascript:void(0);" className="nav-link" data-bs-toggle="tab" data-bs-target="#ai_services">
									AI Services
								</a>
							</li>
							<li>
								<a href="javascript:void(0);" className="nav-link" data-bs-toggle="tab" data-bs-target="#graphics_design">
									Graphics & Design
								</a>
							</li>
							<li>
								<a href="javascript:void(0);" className="nav-link" data-bs-toggle="tab" data-bs-target="#data_analysis">
									Data Analysis
								</a>
							</li>
							<li>
								<a href="javascript:void(0);" className="nav-link" data-bs-toggle="tab" data-bs-target="#analytics_strategy">
									Analytics & Strategy
								</a>
							</li>
							<li>
								<a href="javascript:void(0);" className="nav-link" data-bs-toggle="tab" data-bs-target="#search_list">
									Search
								</a>
							</li>
							<li>
								<a href="javascript:void(0);" className="nav-link" data-bs-toggle="tab" data-bs-target="#video_animation">
									Video & Animation
								</a>
							</li>
						</ul>
					</div>
				</div>
				{/* <!-- /Listing Tabs --> */}

				<div className="tab-content">

					{/* <!-- Writing & Translation --> */}
					<div className="tab-pane fade show active" id="writing_translation" role="tabpanel">
						<div className="row aos" data-aos="fade-up" data-aos-delay="500">
							<div className="col-md-12">
								<div className="gigs-card-slider listing-gigs owl-carousel">
									<div className="gigs-grid">
										<div className="gigs-img">
											<div className="img-slider owl-carousel">
												<div className="slide-images">
													<a href="service-details.html">
														<img src= {list03} className="img-fluid" alt="Gigs" />
													</a>
												</div>
												<div className="slide-images">
													<a href="service-details.html">
														<img src= {list07} className="img-fluid" alt="Gigs" /> 
													</a>
												</div>
												<div className="slide-images">
													<a href="service-details.html">
														<img src= {list08} className="img-fluid" alt="Gigs" />
													</a>
												</div>
											</div>
											<div className="card-overlay-badge">
												<a href="service.html"><span className="badge bg-warning"><i className="feather-star"></i>Featured</span></a>
												<a href="service.html"><span className="badge bg-danger"><i className="fa-solid fa-meteor"></i>Hot</span></a>
											</div>
											<div className="fav-selection">
												<a href="javascript:void(0);">
													<i className="feather-video"></i>
												</a>
												<a href="javascript:void(0);" className="fav-icon">
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
													Programming 
												</a>
												<div className="star-rate">
													<span><i className="fa-solid fa-star"></i>5.0 (28 Reviews)</span>
												</div>
											</div>
											<div className="gigs-title">
												<h3>
													<a href="service-details.html">
														Embedded Android & AOSP customizations
													</a>
												</h3>
											</div>											
											<p className="gigs-location"><span><img src= {mapPinHeart} alt="Icon" /></span>Newyork</p>
											<div className="gigs-card-footer">
												<div className="gigs-share">
													<a href="javascript:void(0);" className="img-icon">
														<i className="feather-image"></i>
													</a>
													<a href="javascript:void(0);" className="img-icon">
														<i className="feather-video"></i>
													</a>
													<a href="javascript:void(0);">
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
														<img src= {list04} className="img-fluid" alt="Gigs" />
													</a>
												</div>
												<div className="slide-images">
													<a href="service-details.html">
														<img src= {list05} className="img-fluid" alt="Gigs" />
													</a>
												</div>
												<div className="slide-images">
													<a href="service-details.html">
														<img src= {list06} className="img-fluid" alt="Gigs" />
													</a>
												</div>
											</div>										
											<div className="card-overlay-badge">
												<a href="service.html"><span className="badge bg-danger"><i className="fa-solid fa-meteor"></i>Hot</span></a>
											</div>
											<div className="fav-selection">
												<a href="javascript:void(0);">
													<i className="feather-video"></i>
												</a>
												<a href="javascript:void(0);" className="fav-icon">
													<i className="feather-heart"></i>
												</a>
											</div>
											<div className="user-thumb">
												<a href="user-profile.html">
													<img src= {user02} alt="user" />
												</a>
											</div>
										</div>
										<div className="gigs-content">
											<div className="gigs-info">
												<a href="service.html" className="badge bg-primary-light">Videography</a>
												<div className="star-rate">
													<span><i className="fa-solid fa-star"></i>4.3 (22 Reviews)</span>
												</div>
											</div>
											<div className="gigs-title">
												<h3>
													<a href="service-details.html">
														I will do professional lifestyle and product photography
													</a>
												</h3>
											</div>
											<p className="gigs-location"><span><img src= {mapPinHeart} alt="Icon" /></span>London</p>
											<div className="gigs-card-footer">
												<div className="gigs-share">
													<a href="javascript:void(0);" className="img-icon">
														<i className="feather-image"></i>
													</a>
													<a href="javascript:void(0);" className="img-icon">
														<i className="feather-video"></i>
													</a>
													<a href="javascript:void(0);">
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
														<img src= {list09} className="img-fluid" alt="Gigs" /> 
													</a>
												</div>
												<div className="slide-images">
													<a href="service-details.html">
														<img src= {list03} className="img-fluid" alt="Gigs" />
													</a>
												</div>
												<div className="slide-images">
													<a href="service-details.html">
														<img src= {list13} className="img-fluid" alt="Gigs" />
													</a>
												</div>
											</div>										
											<div className="card-overlay-badge">
												<a href="service.html"><span className="badge bg-warning"><i className="feather-star"></i>Featured</span></a>
											</div>
											<div className="fav-selection">
												<a href="javascript:void(0);">
													<i className="feather-video"></i>
												</a>
												<a href="javascript:void(0);" className="fav-icon">
													<i className="feather-heart"></i>
												</a>
											</div>
											<div className="user-thumb">
												<a href="user-profile.html">
													<img src= {user03} alt="user" />
												</a>
											</div>
										</div>
										<div className="gigs-content">
											<div className="gigs-info">
												<a href="service-details.html" className="badge bg-primary-light">Music & Audio</a>
												<div className="star-rate">
													<span><i className="fa-solid fa-star"></i>4.6 (475 Reviews)</span>
												</div>
											</div>
											<div className="gigs-title">
												<h3>
													<a href="service-details.html">
														I will develop openai, dalle, chat gpt app for mobile
													</a>
												</h3>
											</div>
											<p className="gigs-location"><span><img src= {mapPinHeart} alt="Icon" /></span>Canada</p>
											<div className="gigs-card-footer">
												<div className="gigs-share">
													<a href="javascript:void(0);" className="img-icon">
														<i className="feather-image"></i>
													</a>
													<a href="javascript:void(0);" className="img-icon">
														<i className="feather-video"></i>
													</a>
													<a href="javascript:void(0);">
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
														<img src= {list11} className="img-fluid" alt="Gigs" />
													</a>
												</div>
												<div className="slide-images">
													<a href="service-details.html">
														<img src= {list09} className="img-fluid" alt="Gigs" />
													</a>
												</div>
												<div className="slide-images">
													<a href="service-details.html">
														<img src= {list10} className="img-fluid" alt="Gigs" />
													</a>
												</div>
											</div>
											<div className="card-overlay-badge">
												<a href="service.html"><span className="badge bg-danger"><i className="fa-solid fa-meteor"></i>Hot</span></a>
											</div>
											<div className="fav-selection">
												<a href="javascript:void(0);">
													<i className="feather-video"></i>
												</a>
												<a href="javascript:void(0);" className="fav-icon">
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
													Writing 
												</a>
												<div className="star-rate">
													<span><i className="fa-solid fa-star"></i>3.8 (11 Reviews)</span>
												</div>
											</div>
											<div className="gigs-title">
												<h3>
													<a href="service-details.html">
														I will do implementing chatbots on websites or messaging apps
													</a>
												</h3>
											</div>
											<p className="gigs-location"><span><img src= {mapPinHeart} alt="Icon" /></span>Tunsania</p>
											<div className="gigs-card-footer">
												<div className="gigs-share">
													<a href="javascript:void(0);" className="img-icon">
														<i className="feather-image"></i>
													</a>
													<a href="javascript:void(0);" className="img-icon">
														<i className="feather-video"></i>
													</a>
													<a href="javascript:void(0);">
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
					{/* <!-- /Writing & Translation --> */}

					{/* <!-- AI Services --> */}
					<div className="tab-pane fade" id="ai_services" role="tabpanel">
						<div className="row aos" data-aos="fade-up" data-aos-delay="500">
							<div className="col-md-12">
								<div className="gigs-card-slider listing-gigs owl-carousel">
									<div className="gigs-grid">
										<div className="gigs-img">
											<div className="img-slider owl-carousel">
												<div className="slide-images">
													<a href="service-details.html">
														<img src= {list12} className="img-fluid" alt="Gigs" />
													</a>
												</div>
												<div className="slide-images">
													<a href="service-details.html">
														<img src= {list07} className="img-fluid" alt="Gigs" />
													</a>
												</div>
												<div className="slide-images">
													<a href="service-details.html">
														<img src= {list08} className="img-fluid" alt="Gigs" />
													</a>
												</div>
											</div>
											<div className="card-overlay-badge">
												<a href="service.html"><span className="badge bg-warning"><i className="feather-star"></i>Featured</span></a>
												<a href="service.html"><span className="badge bg-danger"><i className="fa-solid fa-meteor"></i>Hot</span></a>
											</div>
											<div className="fav-selection">
												<a href="javascript:void(0);">
													<i className="feather-video"></i>
												</a>
												<a href="javascript:void(0);" className="fav-icon">
													<i className="feather-heart"></i>
												</a>
											</div>
											<div className="user-thumb">
												<a href="user-profile.html">
													<img src= {user01} alt="user" />
												</a>
											</div>
										</div>
										<div className="gigs-content">
											<div className="gigs-info">
												<a href="service-details.html" className="badge bg-primary-light">
													Programming 
												</a>
												<div className="star-rate">
													<span><i className="fa-solid fa-star"></i>5.0 (28 Reviews)</span>
												</div>
											</div>
											<div className="gigs-title">
												<h3>
													<a href="service-details.html">
														I will do english or german transcript of any audio file or video
													</a>
												</h3>
											</div>											
											<p className="gigs-location"><span><img src= {mapPinHeart} alt="Icon" /></span>Newyork</p>
											<div className="gigs-card-footer">
												<div className="gigs-share">
													<a href="javascript:void(0);" className="img-icon">
														<i className="feather-image"></i>
													</a>
													<a href="javascript:void(0);" className="img-icon">
														<i className="feather-video"></i>
													</a>
													<a href="javascript:void(0);">
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
														<img src= {list11} className="img-fluid" alt="Gigs" />
													</a>
												</div>
												<div className="slide-images">
													<a href="service-details.html">
														<img src= {list05} className="img-fluid" alt="Gigs" />
													</a>
												</div>
												<div className="slide-images">
													<a href="service-details.html">
														<img src= {list06} className="img-fluid" alt="Gigs" />
													</a>
												</div>
											</div>										
											<div className="card-overlay-badge">
												<a href="service.html"><span className="badge bg-danger"><i className="fa-solid fa-meteor"></i>Hot</span></a>
											</div>
											<div className="fav-selection">
												<a href="javascript:void(0);">
													<i className="feather-video"></i>
												</a>
												<a href="javascript:void(0);" className="fav-icon">
													<i className="feather-heart"></i>
												</a>
											</div>
											<div className="user-thumb">
												<a href="user-profile.html">
													<img src= {user02} alt="user" />
												</a>
											</div>
										</div>
										<div className="gigs-content">
											<div className="gigs-info">
												<a href="service.html" className="badge bg-primary-light">Videography</a>
												<div className="star-rate">
													<span><i className="fa-solid fa-star"></i>4.3 (22 Reviews)</span>
												</div>
											</div>
											<div className="gigs-title">
												<h3>
													<a href="service-details.html">
														I I will do professional lifestyle and product photography
													</a>
												</h3>
											</div>
											<p className="gigs-location"><span><img src= {mapPinHeart} alt="Icon" /></span>London</p>
											<div className="gigs-card-footer">
												<div className="gigs-share">
													<a href="javascript:void(0);" className="img-icon">
														<i className="feather-image"></i>
													</a>
													<a href="javascript:void(0);" className="img-icon">
														<i className="feather-video"></i>
													</a>
													<a href="javascript:void(0);">
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
														<img src= {list07} className="img-fluid" alt="Gigs" />
													</a>
												</div>
												<div className="slide-images">
													<a href="service-details.html">
														<img src= {list03} className="img-fluid" alt="Gigs" />
													</a>
												</div>
												<div className="slide-images">
													<a href="service-details.html">
														<img src= {list13} className="img-fluid" alt="Gigs" />
													</a>
												</div>
											</div>										
											<div className="card-overlay-badge">
												<a href="service.html"><span className="badge bg-warning"><i className="feather-star"></i>Featured</span></a>
											</div>
											<div className="fav-selection">
												<a href="javascript:void(0);">
													<i className="feather-video"></i>
												</a>
												<a href="javascript:void(0);" className="fav-icon">
													<i className="feather-heart"></i>
												</a>
											</div>
											<div className="user-thumb">
												<a href="user-profile.html">
													<img src= {user03} alt="user" />
												</a>
											</div>
										</div>
										<div className="gigs-content">
											<div className="gigs-info">
												<a href="service-details.html" className="badge bg-primary-light">Music & Audio</a>
												<div className="star-rate">
													<span><i className="fa-solid fa-star"></i>4.6 (475 Reviews)</span>
												</div>
											</div>
											<div className="gigs-title">
												<h3>
													<a href="service-details.html">
														I will develop openai, dalle, chat gpt app for mobile
													</a>
												</h3>
											</div>
											<p className="gigs-location"><span><img src= {mapPinHeart} alt="Icon" /></span>Canada</p>
											<div className="gigs-card-footer">
												<div className="gigs-share">
													<a href="javascript:void(0);" className="img-icon">
														<i className="feather-image"></i>
													</a>
													<a href="javascript:void(0);" className="img-icon">
														<i className="feather-video"></i>
													</a>
													<a href="javascript:void(0);">
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
														<img src= {list12} className="img-fluid" alt="Gigs" />
													</a>
												</div>
												<div className="slide-images">
													<a href="service-details.html">
														<img src= {list03} className="img-fluid" alt="Gigs" />
													</a>
												</div>
												<div className="slide-images">
													<a href="service-details.html">
														<img src= {list04} className="img-fluid" alt="Gigs" />
													</a>
												</div>
											</div>
											<div className="card-overlay-badge">
												<a href="service.html"><span className="badge bg-danger"><i className="fa-solid fa-meteor"></i>Hot</span></a>
											</div>
											<div className="fav-selection">
												<a href="javascript:void(0);">
													<i className="feather-video"></i>
												</a>
												<a href="javascript:void(0);" className="fav-icon">
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
													Marketing 
												</a>
												<div className="star-rate">
													<span><i className="fa-solid fa-star"></i>3.8 (11 Reviews)</span>
												</div>
											</div>
											<div className="gigs-title">
												<h3>
													<a href="service-details.html">
														Embedded Android & AOSP customizations
													</a>
												</h3>
											</div>
											<p className="gigs-location"><span><img src= {mapPinHeart} alt="Icon" /></span>Tunsania</p>
											<div className="gigs-card-footer">
												<div className="gigs-share">
													<a href="javascript:void(0);" className="img-icon">
														<i className="feather-image"></i>
													</a>
													<a href="javascript:void(0);" className="img-icon">
														<i className="feather-video"></i>
													</a>
													<a href="javascript:void(0);">
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
					{/* <!-- /AI Services --> */}

					{/* <!-- Graphics & Design --> */}
					<div className="tab-pane fade" id="graphics_design" role="tabpanel">
						<div className="row aos" data-aos="fade-up" data-aos-delay="500">
							<div className="col-md-12">
								<div className="gigs-card-slider listing-gigs owl-carousel">
									<div className="gigs-grid">
										<div className="gigs-img">
											<div className="img-slider owl-carousel">
												<div className="slide-images">
													<a href="service-details.html">
														<img src= {list01} className="img-fluid" alt="Gigs" />
													</a>
												</div>
												<div className="slide-images">
													<a href="service-details.html">
														<img src= {list02} className="img-fluid" alt="Gigs" />
													</a>
												</div>
												<div className="slide-images">
													<a href="service-details.html">
														<img src= {list03} className="img-fluid" alt="Gigs" />
													</a>
												</div>
											</div>
											<div className="card-overlay-badge">
												<a href="service.html"><span className="badge bg-warning"><i className="feather-star"></i>Featured</span></a>
												<a href="service.html"><span className="badge bg-danger"><i className="fa-solid fa-meteor"></i>Hot</span></a>
											</div>
											<div className="fav-selection">
												<a href="javascript:void(0);">
													<i className="feather-video"></i>
												</a>
												<a href="javascript:void(0);" className="fav-icon">
													<i className="feather-heart"></i>
												</a>
											</div>
											<div className="user-thumb">
												<a href="user-profile.html">
													<img src= {user01} alt="user" />
												</a>
											</div>
										</div>
										<div className="gigs-content">
											<div className="gigs-info">
												<a href="service-details.html" className="badge bg-primary-light">
													Logo Design 
												</a>
												<div className="star-rate">
													<span><i className="fa-solid fa-star"></i>5.0 (28 Reviews)</span>
												</div>
											</div>
											<div className="gigs-title">
												<h3>
													<a href="service-details.html">
														I will do professional, unique and modern business logo
													</a>
												</h3>
											</div>											
											<p className="gigs-location"><span><img src= {mapPinHeart} alt="Icon" /></span>California, Newyork</p>
											<div className="gigs-card-footer">
												<div className="gigs-share">
													<a href="javascript:void(0);" className="img-icon">
														<i className="feather-image"></i>
													</a>
													<a href="javascript:void(0);" className="img-icon">
														<i className="feather-video"></i>
													</a>
													<a href="javascript:void(0);">
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
														<img src= {list02} className="img-fluid" alt="Gigs" />
													</a>
												</div>
												<div className="slide-images">
													<a href="service-details.html">
														<img src= {list01} className="img-fluid" alt="Gigs" />
													</a>
												</div>
												<div className="slide-images">
													<a href="service-details.html">
														<img src= {list03} className="img-fluid" alt="Gigs" />
													</a>
												</div>
											</div>										
											<div className="card-overlay-badge">
												<a href="service.html"><span className="badge bg-danger"><i className="fa-solid fa-meteor"></i>Hot</span></a>
											</div>
											<div className="fav-selection">
												<a href="javascript:void(0);">
													<i className="feather-video"></i>
												</a>
												<a href="javascript:void(0);" className="fav-icon">
													<i className="feather-heart"></i>
												</a>
											</div>
											<div className="user-thumb">
												<a href="user-profile.html">
													<img src= {user02} alt="user" />
												</a>
											</div>
										</div>
										<div className="gigs-content">
											<div className="gigs-info">
												<a href="service-details.html" className="badge bg-primary-light">Vector Graphics</a>
												<div className="star-rate">
													<span><i className="fa-solid fa-star"></i>4.3 (22 Reviews)</span>
												</div>
											</div>
											<div className="gigs-title">
												<h3>
													<a href="service-details.html">
														I will design unique, simple and modern custom icons set
													</a>
												</h3>
											</div>
											<p className="gigs-location"><span><img src= {mapPinHeart} alt="Icon" /></span>London</p>
											<div className="gigs-card-footer">
												<div className="gigs-share">
													<a href="javascript:void(0);" className="img-icon">
														<i className="feather-image"></i>
													</a>
													<a href="javascript:void(0);" className="img-icon">
														<i className="feather-video"></i>
													</a>
													<a href="javascript:void(0);">
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
														<img src= {list03} className="img-fluid" alt="Gigs" />
													</a>
												</div>
												<div className="slide-images">
													<a href="service-details.html">
														<img src= {list02} className="img-fluid" alt="Gigs" />
													</a>
												</div>
												<div className="slide-images">
													<a href="service-details.html">
														<img src= {list01} className="img-fluid" alt="Gigs" />
													</a>
												</div>
											</div>										
											<div className="card-overlay-badge">
												<a href="service.html"><span className="badge bg-warning"><i className="feather-star"></i>Featured</span></a>
											</div>
											<div className="fav-selection">
												<a href="javascript:void(0);">
													<i className="feather-video"></i>
												</a>
												<a href="javascript:void(0);" className="fav-icon">
													<i className="feather-heart"></i>
												</a>
											</div>
											<div className="user-thumb">
												<a href="user-profile.html">
													<img src= {user03} alt="user" />
												</a>
											</div>
										</div>
										<div className="gigs-content">
											<div className="gigs-info">
												<a href="service-details.html" className="badge bg-primary-light">Illustration</a>
												<div className="star-rate">
													<span><i className="fa-solid fa-star"></i>4.6 (475 Reviews)</span>
												</div>
											</div>
											<div className="gigs-title">
												<h3>
													<a href="service-details.html">
														I will do vector tracing or convert to vector quickly
													</a>
												</h3>
											</div>
											<p className="gigs-location"><span><img src= {mapPinHeart} alt="Icon" /></span>Canada</p>
											<div className="gigs-card-footer">
												<div className="gigs-share">
													<a href="javascript:void(0);" className="img-icon">
														<i className="feather-image"></i>
													</a>
													<a href="javascript:void(0);" className="img-icon">
														<i className="feather-video"></i>
													</a>
													<a href="javascript:void(0);">
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
														<img src= {list12} className="img-fluid" alt="Gigs" />
													</a>
												</div>
												<div className="slide-images">
													<a href="service-details.html">
														<img src= {list03} className="img-fluid" alt="Gigs" />
													</a>
												</div>
												<div className="slide-images">
													<a href="service-details.html">
														<img src= {list04} className="img-fluid" alt="Gigs" />
													</a>
												</div>
											</div>
											<div className="card-overlay-badge">
												<a href="service.html"><span className="badge bg-danger"><i className="fa-solid fa-meteor"></i>Hot</span></a>
											</div>
											<div className="fav-selection">
												<a href="javascript:void(0);">
													<i className="feather-video"></i>
												</a>
												<a href="javascript:void(0);" className="fav-icon">
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
													Design 
												</a>
												<div className="star-rate">
													<span><i className="fa-solid fa-star"></i>3.8 (11 Reviews)</span>
												</div>
											</div>
											<div className="gigs-title">
												<h3>
													<a href="service-details.html">
														I will simple, unique and modern design custom icons set
													</a>
												</h3>
											</div>
											<p className="gigs-location"><span><img src= {mapPinHeart} alt="Icon" /></span>Tunsania</p>
											<div className="gigs-card-footer">
												<div className="gigs-share">
													<a href="javascript:void(0);" className="img-icon">
														<i className="feather-image"></i>
													</a>
													<a href="javascript:void(0);" className="img-icon">
														<i className="feather-video"></i>
													</a>
													<a href="javascript:void(0);">
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
					{/* <!-- /Graphics & Design --> */}

					{/* <!-- Search --> */}
					<div className="tab-pane fade" id="search_list" role="tabpanel">
						<div className="row aos" data-aos="fade-up" data-aos-delay="500">
							<div className="col-md-12">
								<div className="gigs-card-slider listing-gigs owl-carousel">
									<div className="gigs-grid">
										<div className="gigs-img">
											<div className="img-slider owl-carousel">
												<div className="slide-images">
													<a href="service-details.html">
														<img src= {list11} className="img-fluid" alt="Gigs" />
													</a>
												</div>
												<div className="slide-images">
													<a href="service-details.html">
														<img src= {list09} className="img-fluid" alt="Gigs" />
													</a>
												</div>
												<div className="slide-images">
													<a href="service-details.html">
														<img src= {list10} className="img-fluid" alt="Gigs" />
													</a>
												</div>
											</div>
											<div className="card-overlay-badge">
												<a href="service.html"><span className="badge bg-danger"><i className="fa-solid fa-meteor"></i>Hot</span></a>
											</div>
											<div className="fav-selection">
												<a href="javascript:void(0);">
													<i className="feather-video"></i>
												</a>
												<a href="javascript:void(0);" className="fav-icon">
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
													Writing 
												</a>
												<div className="star-rate">
													<span><i className="fa-solid fa-star"></i>3.8 (11 Reviews)</span>
												</div>
											</div>
											<div className="gigs-title">
												<h3>
													<a href="service-details.html">
														I will do implementing chatbots on websites or messaging apps
													</a>
												</h3>
											</div>
											<p className="gigs-location"><span><img src= {mapPinHeart} alt="Icon" /></span>Tunsania</p>
											<div className="gigs-card-footer">
												<div className="gigs-share">
													<a href="javascript:void(0);" className="img-icon">
														<i className="feather-image"></i>
													</a>
													<a href="javascript:void(0);" className="img-icon">
														<i className="feather-video"></i>
													</a>
													<a href="javascript:void(0);">
														<i className="feather-share-2"></i>
													</a>
													<span className="badge">Delivery in 6 days</span>
												</div>
												<h5>Hrs.400</h5>
											</div>
										</div>
									</div>
									<div className="gigs-grid">
										<div className="gigs-img">
											<div className="img-slider owl-carousel">
												<div className="slide-images">
													<a href="service-details.html">
														<img src= {list04} className="img-fluid" alt="Gigs" />
													</a>
												</div>
												<div className="slide-images">
													<a href="service-details.html">
														<img src= {list05} className="img-fluid" alt="Gigs" />
													</a>
												</div>
												<div className="slide-images">
													<a href="service-details.html">
														<img src= {list06} className="img-fluid" alt="Gigs" />
													</a>
												</div>
											</div>										
											<div className="card-overlay-badge">
												<a href="service.html"><span className="badge bg-danger"><i className="fa-solid fa-meteor"></i>Hot</span></a>
											</div>
											<div className="fav-selection">
												<a href="javascript:void(0);">
													<i className="feather-video"></i>
												</a>
												<a href="javascript:void(0);" className="fav-icon">
													<i className="feather-heart"></i>
												</a>
											</div>
											<div className="user-thumb">
												<a href="user-profile.html">
													<img src= {user02} alt="user" />
												</a>
											</div>
										</div>
										<div className="gigs-content">
											<div className="gigs-info">
												<a href="service.html" className="badge bg-primary-light">Videography</a>
												<div className="star-rate">
													<span><i className="fa-solid fa-star"></i>4.3 (22 Reviews)</span>
												</div>
											</div>
											<div className="gigs-title">
												<h3>
													<a href="service-details.html">
														I will do professional lifestyle and product photography
													</a>
												</h3>
											</div>
											<p className="gigs-location"><span><img src= {mapPinHeart} alt="Icon" /></span>London</p>
											<div className="gigs-card-footer">
												<div className="gigs-share">
													<a href="javascript:void(0);" className="img-icon">
														<i className="feather-image"></i>
													</a>
													<a href="javascript:void(0);" className="img-icon">
														<i className="feather-video"></i>
													</a>
													<a href="javascript:void(0);">
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
														<img src= {list03} className="img-fluid" alt="Gigs" />
													</a>
												</div>
												<div className="slide-images">
													<a href="service-details.html">
														<img src= {list07} className="img-fluid" alt="Gigs" />
													</a>
												</div>
												<div className="slide-images">
													<a href="service-details.html">
														<img src= {list08} className="img-fluid" alt="Gigs" />
													</a>
												</div>
											</div>
											<div className="card-overlay-badge">
												<a href="service.html"><span className="badge bg-warning"><i className="feather-star"></i>Featured</span></a>
												<a href="service.html"><span className="badge bg-danger"><i className="fa-solid fa-meteor"></i>Hot</span></a>
											</div>
											<div className="fav-selection">
												<a href="javascript:void(0);">
													<i className="feather-video"></i>
												</a>
												<a href="javascript:void(0);" className="fav-icon">
													<i className="feather-heart"></i>
												</a>
											</div>
											<div className="user-thumb">
												<a href="user-profile.html">
													<img src= {user01} alt="user" />
												</a>
											</div>
										</div>
										<div className="gigs-content">
											<div className="gigs-info">
												<a href="service-details.html" className="badge bg-primary-light">
													Programming 
												</a>
												<div className="star-rate">
													<span><i className="fa-solid fa-star"></i>5.0 (28 Reviews)</span>
												</div>
											</div>
											<div className="gigs-title">
												<h3>
													<a href="service-details.html">
														Embedded Android & AOSP customizations
													</a>
												</h3>
											</div>											
											<p className="gigs-location"><span><img src= {mapPinHeart} alt="Icon" /></span>Newyork</p>
											<div className="gigs-card-footer">
												<div className="gigs-share">
													<a href="javascript:void(0);" className="img-icon">
														<i className="feather-image"></i>
													</a>
													<a href="javascript:void(0);" className="img-icon">
														<i className="feather-video"></i>
													</a>
													<a href="javascript:void(0);">
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
														<img src= {list09} className="img-fluid" alt="Gigs" />
													</a>
												</div>
												<div className="slide-images">
													<a href="service-details.html">
														<img src= {list03} className="img-fluid" alt="Gigs" />
													</a>
												</div>
												<div className="slide-images">
													<a href="service-details.html">
														<img src= {list13} className="img-fluid" alt="Gigs" />
													</a>
												</div>
											</div>										
											<div className="card-overlay-badge">
												<a href="service.html"><span className="badge bg-warning"><i className="feather-star"></i>Featured</span></a>
											</div>
											<div className="fav-selection">
												<a href="javascript:void(0);">
													<i className="feather-video"></i>
												</a>
												<a href="javascript:void(0);" className="fav-icon">
													<i className="feather-heart"></i>
												</a>
											</div>
											<div className="user-thumb">
												<a href="user-profile.html">
													<img src= {user03} alt="user" />
												</a>
											</div>
										</div>
										<div className="gigs-content">
											<div className="gigs-info">
												<a href="service-details.html" className="badge bg-primary-light">Music & Audio</a>
												<div className="star-rate">
													<span><i className="fa-solid fa-star"></i>4.6 (475 Reviews)</span>
												</div>
											</div>
											<div className="gigs-title">
												<h3>
													<a href="service-details.html">
														I will develop openai, dalle, chat gpt app for mobile
													</a>
												</h3>
											</div>
											<p className="gigs-location"><span><img src= {mapPinHeart} alt="Icon" /></span>Canada</p>
											<div className="gigs-card-footer">
												<div className="gigs-share">
													<a href="javascript:void(0);" className="img-icon">
														<i className="feather-image"></i>
													</a>
													<a href="javascript:void(0);" className="img-icon">
														<i className="feather-video"></i>
													</a>
													<a href="javascript:void(0);">
														<i className="feather-share-2"></i>
													</a>
													<span className="badge">Delivery in 1 day</span>
												</div>
												<h5>Hrs.830</h5>
											</div>
										</div>
									</div>
								</div>
							</div>
						</div>
					</div>
					{/* <!-- /Search --> */}

					{/* <!-- Data Analysis --> */}
					<div className="tab-pane fade" id="data_analysis" role="tabpanel">
						<div className="row aos" data-aos="fade-up" data-aos-delay="500">
							<div className="col-md-12">
								<div className="gigs-card-slider listing-gigs owl-carousel">
									<div className="gigs-grid">
										<div className="gigs-img">
											<div className="img-slider owl-carousel">
												<div className="slide-images">
													<a href="service-details.html">
														<img src= {list03} className="img-fluid" alt="Gigs" />
													</a>
												</div>
												<div className="slide-images">
													<a href="service-details.html">
														<img src= {list05} className="img-fluid" alt="Gigs" />
													</a>
												</div>
												<div className="slide-images">
													<a href="service-details.html">
														<img src= {list06} className="img-fluid" alt="Gigs" />
													</a>
												</div>
											</div>										
											<div className="card-overlay-badge">
												<a href="service.html"><span className="badge bg-danger"><i className="fa-solid fa-meteor"></i>Hot</span></a>
											</div>
											<div className="fav-selection">
												<a href="javascript:void(0);">
													<i className="feather-video"></i>
												</a>
												<a href="javascript:void(0);" className="fav-icon">
													<i className="feather-heart"></i>
												</a>
											</div>
											<div className="user-thumb">
												<a href="user-profile.html">
													<img src= {user02} alt="user" />
												</a>
											</div>
										</div>
										<div className="gigs-content">
											<div className="gigs-info">
												<a href="service-details.html" className="badge bg-primary-light">Data</a>
												<div className="star-rate">
													<span><i className="fa-solid fa-star"></i>4.3 (22 Reviews)</span>
												</div>
											</div>
											<div className="gigs-title">
												<h3>
													<a href="service-details.html">
														I will do product data information & syetem analysis
													</a>
												</h3>
											</div>
											<p className="gigs-location"><span><img src= {mapPinHeart} alt="Icon" /></span>London</p>
											<div className="gigs-card-footer">
												<div className="gigs-share">
													<a href="javascript:void(0);" className="img-icon">
														<i className="feather-image"></i>
													</a>
													<a href="javascript:void(0);" className="img-icon">
														<i className="feather-video"></i>
													</a>
													<a href="javascript:void(0);">
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
														<img src= {list11} className="img-fluid" alt="Gigs" />
													</a>
												</div>
												<div className="slide-images">
													<a href="service-details.html">
														<img src= {list05} className="img-fluid" alt="Gigs" />
													</a>
												</div>
												<div className="slide-images">
													<a href="service-details.html">
														<img src= {list06} className="img-fluid" alt="Gigs" />
													</a>
												</div>
											</div>										
											<div className="card-overlay-badge">
												<a href="service.html"><span className="badge bg-danger"><i className="fa-solid fa-meteor"></i>Hot</span></a>
											</div>
											<div className="fav-selection">
												<a href="javascript:void(0);">
													<i className="feather-video"></i>
												</a>
												<a href="javascript:void(0);" className="fav-icon">
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
												<a href="service.html" className="badge bg-primary-light">Videography</a>
												<div className="star-rate">
													<span><i className="fa-solid fa-star"></i>4.3 (22 Reviews)</span>
												</div>
											</div>
											<div className="gigs-title">
												<h3>
													<a href="service-details.html">
														I will do professional lifestyle and product photography
													</a>
												</h3>
											</div>
											<p className="gigs-location"><span><img src= {mapPinHeart} alt="Icon" /></span>Canada</p>
											<div className="gigs-card-footer">
												<div className="gigs-share">
													<a href="javascript:void(0);" className="img-icon">
														<i className="feather-image"></i>
													</a>
													<a href="javascript:void(0);" className="img-icon">
														<i className="feather-video"></i>
													</a>
													<a href="javascript:void(0);">
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
														<img src= {list12} className="img-fluid" alt="Gigs" />
													</a>
												</div>
												<div className="slide-images">
													<a href="service-details.html">
														<img src= {list07} className="img-fluid" alt="Gigs" />
													</a>
												</div>
												<div className="slide-images">
													<a href="service-details.html">
														<img src= {list08} className="img-fluid" alt="Gigs" />
													</a>
												</div>
											</div>
											<div className="card-overlay-badge">
												<a href="service.html"><span className="badge bg-warning"><i className="feather-star"></i>Featured</span></a>
												<a href="service.html"><span className="badge bg-danger"><i className="fa-solid fa-meteor"></i>Hot</span></a>
											</div>
											<div className="fav-selection">
												<a href="javascript:void(0);">
													<i className="feather-video"></i>
												</a>
												<a href="javascript:void(0);" className="fav-icon">
													<i className="feather-heart"></i>
												</a>
											</div>
											<div className="user-thumb">
												<a href="user-profile.html">
													<img src= {user01} alt="user" />
												</a>
											</div>
										</div>
										<div className="gigs-content">
											<div className="gigs-info">
												<a href="service-details.html" className="badge bg-primary-light">
													Programming 
												</a>
												<div className="star-rate">
													<span><i className="fa-solid fa-star"></i>5.0 (28 Reviews)</span>
												</div>
											</div>
											<div className="gigs-title">
												<h3>
													<a href="service-details.html">
														Embedded Android & AOSP customizations
													</a>
												</h3>
											</div>											
											<p className="gigs-location"><span><img src= {mapPinHeart} alt="Icon" /></span>Newyork</p>
											<div className="gigs-card-footer">
												<div className="gigs-share">
													<a href="javascript:void(0);" className="img-icon">
														<i className="feather-image"></i>
													</a>
													<a href="javascript:void(0);" className="img-icon">
														<i className="feather-video"></i>
													</a>
													<a href="javascript:void(0);">
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
														<img src= {list09} className="img-fluid" alt="Gigs" />
													</a>
												</div>
												<div className="slide-images">
													<a href="service-details.html">
														<img src= {list03} className="img-fluid" alt="Gigs" />
													</a>
												</div>
												<div className="slide-images">
													<a href="service-details.html">
														<img src= {list13} className="img-fluid" alt="Gigs" />
													</a>
												</div>
											</div>										
											<div className="card-overlay-badge">
												<a href="service.html"><span className="badge bg-warning"><i className="feather-star"></i>Featured</span></a>
											</div>
											<div className="fav-selection">
												<a href="javascript:void(0);">
													<i className="feather-video"></i>
												</a>
												<a href="javascript:void(0);" className="fav-icon">
													<i className="feather-heart"></i>
												</a>
											</div>
											<div className="user-thumb">
												<a href="user-profile.html">
													<img src= {user03} alt="user" />
												</a>
											</div>
										</div>
										<div className="gigs-content">
											<div className="gigs-info">
												<a href="service-details.html" className="badge bg-primary-light">Music & Audio</a>
												<div className="star-rate">
													<span><i className="fa-solid fa-star"></i>4.6 (475 Reviews)</span>
												</div>
											</div>
											<div className="gigs-title">
												<h3>
													<a href="service-details.html">
														I will develop openai, dalle, chat gpt app for mobile
													</a>
												</h3>
											</div>
											<p className="gigs-location"><span><img src= {mapPinHeart} alt="Icon" /></span>Canada</p>
											<div className="gigs-card-footer">
												<div className="gigs-share">
													<a href="javascript:void(0);" className="img-icon">
														<i className="feather-image"></i>
													</a>
													<a href="javascript:void(0);" className="img-icon">
														<i className="feather-video"></i>
													</a>
													<a href="javascript:void(0);">
														<i className="feather-share-2"></i>
													</a>
													<span className="badge">Delivery in 1 day</span>
												</div>
												<h5>Hrs.830</h5>
											</div>
										</div>
									</div>
								</div>
							</div>
						</div>
					</div>
					{/* <!-- /Data Analysis --> */}

					{/* <!-- Analytics & Strategy --> */}
					<div className="tab-pane fade" id="analytics_strategy" role="tabpanel">
						<div className="row aos" data-aos="fade-up" data-aos-delay="500">
							<div className="col-md-12">
								<div className="gigs-card-slider listing-gigs owl-carousel">
									<div className="gigs-grid">
										<div className="gigs-img">
											<div className="img-slider owl-carousel">
												<div className="slide-images">
													<a href="service-details.html">
														<img src= {list06} className="img-fluid" alt="Gigs" />
													</a>
												</div>
												<div className="slide-images">
													<a href="service-details.html">
														<img src= {list04} className="img-fluid" alt="Gigs" />
													</a>
												</div>
												<div className="slide-images">
													<a href="service-details.html">
														<img src= {list10} className="img-fluid" alt="Gigs" />
													</a>
												</div>
											</div>
											<div className="card-overlay-badge">
												<a href="service.html"><span className="badge bg-danger"><i className="fa-solid fa-meteor"></i>Hot</span></a>
											</div>
											<div className="fav-selection">
												<a href="javascript:void(0);">
													<i className="feather-video"></i>
												</a>
												<a href="javascript:void(0);" className="fav-icon">
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
													Translation 
												</a>
												<div className="star-rate">
													<span><i className="fa-solid fa-star"></i>3.8 (11 Reviews)</span>
												</div>
											</div>
											<div className="gigs-title">
												<h3>
													<a href="service-details.html">
														I will do implementing chatbots on websites or messaging apps
													</a>
												</h3>
											</div>
											<p className="gigs-location"><span><img src= {mapPinHeart} alt="Icon" /></span>Tunsania</p>
											<div className="gigs-card-footer">
												<div className="gigs-share">
													<a href="javascript:void(0);" className="img-icon">
														<i className="feather-image"></i>
													</a>
													<a href="javascript:void(0);" className="img-icon">
														<i className="feather-video"></i>
													</a>
													<a href="javascript:void(0);">
														<i className="feather-share-2"></i>
													</a>
													<span className="badge">Delivery in 6 days</span>
												</div>
												<h5>Hrs.400</h5>
											</div>
										</div>
									</div>
									<div className="gigs-grid">
										<div className="gigs-img">
											<div className="img-slider owl-carousel">
												<div className="slide-images">
													<a href="service-details.html">
														<img src= {list04} className="img-fluid" alt="Gigs" />
													</a>
												</div>
												<div className="slide-images">
													<a href="service-details.html">
														<img src= {list05} className="img-fluid" alt="Gigs" />
													</a>
												</div>
												<div className="slide-images">
													<a href="service-details.html">
														<img src= {list06} className="img-fluid" alt="Gigs" />
													</a>
												</div>
											</div>										
											<div className="card-overlay-badge">
												<a href="service.html"><span className="badge bg-danger"><i className="fa-solid fa-meteor"></i>Hot</span></a>
											</div>
											<div className="fav-selection">
												<a href="javascript:void(0);">
													<i className="feather-video"></i>
												</a>
												<a href="javascript:void(0);" className="fav-icon">
													<i className="feather-heart"></i>
												</a>
											</div>
											<div className="user-thumb">
												<a href="user-profile.html">
													<img src= {user02} alt="user" />
												</a>
											</div>
										</div>
										<div className="gigs-content">
											<div className="gigs-info">
												<a href="service.html" className="badge bg-primary-light">Videography</a>
												<div className="star-rate">
													<span><i className="fa-solid fa-star"></i>4.3 (22 Reviews)</span>
												</div>
											</div>
											<div className="gigs-title">
												<h3>
													<a href="service-details.html">
														I will do product & professional lifestyle photography 
													</a>
												</h3>
											</div>
											<p className="gigs-location"><span><img src= {mapPinHeart} alt="Icon" /></span>London</p>
											<div className="gigs-card-footer">
												<div className="gigs-share">
													<a href="javascript:void(0);" className="img-icon">
														<i className="feather-image"></i>
													</a>
													<a href="javascript:void(0);" className="img-icon">
														<i className="feather-video"></i>
													</a>
													<a href="javascript:void(0);">
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
														<img src= {list03} className="img-fluid" alt="Gigs" />
													</a>
												</div>
												<div className="slide-images">
													<a href="service-details.html">
														<img src= {list07} className="img-fluid" alt="Gigs" />
													</a>
												</div>
												<div className="slide-images">
													<a href="service-details.html">
														<img src= {list08} className="img-fluid" alt="Gigs" />
													</a>
												</div>
											</div>
											<div className="card-overlay-badge">
												<a href="service.html"><span className="badge bg-warning"><i className="feather-star"></i>Featured</span></a>
												<a href="service.html"><span className="badge bg-danger"><i className="fa-solid fa-meteor"></i>Hot</span></a>
											</div>
											<div className="fav-selection">
												<a href="javascript:void(0);">
													<i className="feather-video"></i>
												</a>
												<a href="javascript:void(0);" className="fav-icon">
													<i className="feather-heart"></i>
												</a>
											</div>
											<div className="user-thumb">
												<a href="user-profile.html">
													<img src= {user01} alt="user" />
												</a>
											</div>
										</div>
										<div className="gigs-content">
											<div className="gigs-info">
												<a href="service-details.html" className="badge bg-primary-light">
													Programming 
												</a>
												<div className="star-rate">
													<span><i className="fa-solid fa-star"></i>5.0 (28 Reviews)</span>
												</div>
											</div>
											<div className="gigs-title">
												<h3>
													<a href="service-details.html">
														Embedded Android & AOSP customizations
													</a>
												</h3>
											</div>											
											<p className="gigs-location"><span><img src= {mapPinHeart} alt="Icon" /></span>Newyork</p>
											<div className="gigs-card-footer">
												<div className="gigs-share">
													<a href="javascript:void(0);" className="img-icon">
														<i className="feather-image"></i>
													</a>
													<a href="javascript:void(0);" className="img-icon">
														<i className="feather-video"></i>
													</a>
													<a href="javascript:void(0);">
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
														<img src= {list09} className="img-fluid" alt="Gigs" />
													</a>
												</div>
												<div className="slide-images">
													<a href="service-details.html">
														<img src= {list03} className="img-fluid" alt="Gigs" />
													</a>
												</div>
												<div className="slide-images">
													<a href="service-details.html">
														<img src= {list13} className="img-fluid" alt="Gigs" />
													</a>
												</div>
											</div>										
											<div className="card-overlay-badge">
												<a href="service.html"><span className="badge bg-warning"><i className="feather-star"></i>Featured</span></a>
											</div>
											<div className="fav-selection">
												<a href="javascript:void(0);">
													<i className="feather-video"></i>
												</a>
												<a href="javascript:void(0);" className="fav-icon">
													<i className="feather-heart"></i>
												</a>
											</div>
											<div className="user-thumb">
												<a href="user-profile.html">
													<img src= {user03} alt="user" />
												</a>
											</div>
										</div>
										<div className="gigs-content">
											<div className="gigs-info">
												<a href="service-details.html" className="badge bg-primary-light">Music & Audio</a>
												<div className="star-rate">
													<span><i className="fa-solid fa-star"></i>4.6 (475 Reviews)</span>
												</div>
											</div>
											<div className="gigs-title">
												<h3>
													<a href="service-details.html">
														I will develop openai, dalle, chat gpt app for mobile
													</a>
												</h3>
											</div>
											<p className="gigs-location"><span><img src= {mapPinHeart} alt="Icon" /></span>Canada</p>
											<div className="gigs-card-footer">
												<div className="gigs-share">
													<a href="javascript:void(0);" className="img-icon">
														<i className="feather-image"></i>
													</a>
													<a href="javascript:void(0);" className="img-icon">
														<i className="feather-video"></i>
													</a>
													<a href="javascript:void(0);">
														<i className="feather-share-2"></i>
													</a>
													<span className="badge">Delivery in 1 day</span>
												</div>
												<h5>Hrs.830</h5>
											</div>
										</div>
									</div>
								</div>
							</div>
						</div>
					</div>
					{/* <!-- /Analytics & Strategy --> */}

					{/* <!-- Video & Animation --> */}
					<div className="tab-pane fade" id="video_animation" role="tabpanel">
						<div className="row aos" data-aos="fade-up" data-aos-delay="500">
							<div className="col-md-12">
								<div className="gigs-card-slider listing-gigs owl-carousel">
									<div className="gigs-grid">
										<div className="gigs-img">
											<div className="img-slider owl-carousel">
												<div className="slide-images">
													<a href="service-details.html">
														<img src= {list07} className="img-fluid" alt="Gigs" />
													</a>
												</div>
												<div className="slide-images">
													<a href="service-details.html">
														<img src= {list03} className="img-fluid" alt="Gigs" />
													</a>
												</div>
												<div className="slide-images">
													<a href="service-details.html">
														<img src= {list13} className="img-fluid" alt="Gigs" />
													</a>
												</div>
											</div>										
											<div className="card-overlay-badge">
												<a href="service.html"><span className="badge bg-warning"><i className="feather-star"></i>Featured</span></a>
											</div>
											<div className="fav-selection">
												<a href="javascript:void(0);">
													<i className="feather-video"></i>
												</a>
												<a href="javascript:void(0);" className="fav-icon">
													<i className="feather-heart"></i>
												</a>
											</div>
											<div className="user-thumb">
												<a href="user-profile.html">
													<img src= {user03} alt="user" />
												</a>
											</div>
										</div>
										<div className="gigs-content">
											<div className="gigs-info">
												<a href="service-details.html" className="badge bg-primary-light">Music & Audio</a>
												<div className="star-rate">
													<span><i className="fa-solid fa-star"></i>4.6 (475 Reviews)</span>
												</div>
											</div>
											<div className="gigs-title">
												<h3>
													<a href="service-details.html">
														I will develop openai, dalle, chat gpt app for mobile
													</a>
												</h3>
											</div>
											<p className="gigs-location"><span><img src= {mapPinHeart} alt="Icon" /></span>Canada</p>
											<div className="gigs-card-footer">
												<div className="gigs-share">
													<a href="javascript:void(0);" className="img-icon">
														<i className="feather-image"></i>
													</a>
													<a href="javascript:void(0);" className="img-icon">
														<i className="feather-video"></i>
													</a>
													<a href="javascript:void(0);">
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
														<img src= {list12} className="img-fluid" alt="Gigs" />
													</a>
												</div>
												<div className="slide-images">
													<a href="service-details.html">
														<img src= {list07} className="img-fluid" alt="Gigs" />
													</a>
												</div>
												<div className="slide-images">
													<a href="service-details.html">
														<img src= {list08} className="img-fluid" alt="Gigs" />
													</a>
												</div>
											</div>
											<div className="card-overlay-badge">
												<a href="service.html"><span className="badge bg-warning"><i className="feather-star"></i>Featured</span></a>
												<a href="service.html"><span className="badge bg-danger"><i className="fa-solid fa-meteor"></i>Hot</span></a>
											</div>
											<div className="fav-selection">
												<a href="javascript:void(0);">
													<i className="feather-video"></i>
												</a>
												<a href="javascript:void(0);" className="fav-icon">
													<i className="feather-heart"></i>
												</a>
											</div>
											<div className="user-thumb">
												<a href="user-profile.html">
													<img src= {user01} alt="user" />
												</a>
											</div>
										</div>
										<div className="gigs-content">
											<div className="gigs-info">
												<a href="service-details.html" className="badge bg-primary-light">
													Programming 
												</a>
												<div className="star-rate">
													<span><i className="fa-solid fa-star"></i>5.0 (28 Reviews)</span>
												</div>
											</div>
											<div className="gigs-title">
												<h3>
													<a href="service-details.html">
														I will do english or german transcript of any audio file or video
													</a>
												</h3>
											</div>											
											<p className="gigs-location"><span><img src= {mapPinHeart} alt="Icon" /></span>Newyork</p>
											<div className="gigs-card-footer">
												<div className="gigs-share">
													<a href="javascript:void(0);" className="img-icon">
														<i className="feather-image"></i>
													</a>
													<a href="javascript:void(0);" className="img-icon">
														<i className="feather-video"></i>
													</a>
													<a href="javascript:void(0);">
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
														<img src= {list11} className="img-fluid" alt="Gigs" />
													</a>
												</div>
												<div className="slide-images">
													<a href="service-details.html">
														<img src= {list05} className="img-fluid" alt="Gigs" />
													</a>
												</div>
												<div className="slide-images">
													<a href="service-details.html">
														<img src= {list06} className="img-fluid" alt="Gigs" />
													</a>
												</div>
											</div>										
											<div className="card-overlay-badge">
												<a href="service.html"><span className="badge bg-danger"><i className="fa-solid fa-meteor"></i>Hot</span></a>
											</div>
											<div className="fav-selection">
												<a href="javascript:void(0);">
													<i className="feather-video"></i>
												</a>
												<a href="javascript:void(0);" className="fav-icon">
													<i className="feather-heart"></i>
												</a>
											</div>
											<div className="user-thumb">
												<a href="user-profile.html">
													<img src= {user02} alt="user" />
												</a>
											</div>
										</div>
										<div className="gigs-content">
											<div className="gigs-info">
												<a href="service.html" className="badge bg-primary-light">Videography</a>
												<div className="star-rate">
													<span><i className="fa-solid fa-star"></i>4.3 (22 Reviews)</span>
												</div>
											</div>
											<div className="gigs-title">
												<h3>
													<a href="service-details.html">
														I I will do professional lifestyle and product photography
													</a>
												</h3>
											</div>
											<p className="gigs-location"><span><img src= {mapPinHeart} alt="Icon" /></span>London</p>
											<div className="gigs-card-footer">
												<div className="gigs-share">
													<a href="javascript:void(0);" className="img-icon">
														<i className="feather-image"></i>
													</a>
													<a href="javascript:void(0);" className="img-icon">
														<i className="feather-video"></i>
													</a>
													<a href="javascript:void(0);">
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
														<img src= {list13} className="img-fluid" alt="Gigs" />
													</a>
												</div>
												<div className="slide-images">
													<a href="service-details.html">
														<img src= {list03} className="img-fluid" alt="Gigs" />
													</a>
												</div>
												<div className="slide-images">
													<a href="service-details.html">
														<img src= {list04} className="img-fluid" alt="Gigs" />
													</a>
												</div>
											</div>
											<div className="card-overlay-badge">
												<a href="service.html"><span className="badge bg-danger"><i className="fa-solid fa-meteor"></i>Hot</span></a>
											</div>
											<div className="fav-selection">
												<a href="javascript:void(0);">
													<i className="feather-video"></i>
												</a>
												<a href="javascript:void(0);" className="fav-icon">
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
													Marketing 
												</a>
												<div className="star-rate">
													<span><i className="fa-solid fa-star"></i>3.8 (11 Reviews)</span>
												</div>
											</div>
											<div className="gigs-title">
												<h3>
													<a href="service-details.html">
														Embedded Android & AOSP customizations
													</a>
												</h3>
											</div>
											<p className="gigs-location"><span><img src= {mapPinHeart} alt="Icon" /></span>Tunsania</p>
											<div className="gigs-card-footer">
												<div className="gigs-share">
													<a href="javascript:void(0);" className="img-icon">
														<i className="feather-image"></i>
													</a>
													<a href="javascript:void(0);" className="img-icon">
														<i className="feather-video"></i>
													</a>
													<a href="javascript:void(0);">
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
					{/* <!-- /Video & Animation --> */}

				</div>
			</div>
		</section>
    );
};

export default Listings