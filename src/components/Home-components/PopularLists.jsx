import React from "react";

import "../../../assets/css/style.css";
import "../../../assets/css/bootstrap.min.css";
import "../../../assets/css/owl.carousel.min.css";

import gigs01_1 from "../../../assets/images/gigs-01_1.jpg";
import gigs02_1 from "../../../assets/images/gigs-02_1.jpg";
import gigs03_1 from "../../../assets/images/gigs-03_1.jpg";
import gigs04_1 from "../../../assets/images/gigs-04_1.jpg";
import gigs05_1 from "../../../assets/images/gigs-05_1.jpg";
import gigs06_1 from "../../../assets/images/gigs-06_1.jpg";
import gigs07_1 from "../../../assets/images/gigs-07_1.jpg";
import gigs08_1 from "../../../assets/images/gigs-08_1.jpg";
import gigs09_1 from "../../../assets/images/gigs-09_1.jpg";
import gigs10_1 from "../../../assets/images/gigs-10_1.jpg";
import gigs11_1 from "../../../assets/images/gigs-11_1.jpg";
import gigs12_1 from "../../../assets/images/gigs-12_1.jpg";
import gigs13_1 from "../../../assets/images/gigs-13.jpg";
import gigs14_1 from "../../../assets/images/gigs-14.jpg";

import mapPinCheck from "../../../assets/images/map-pin-check.svg";

import contactBg from "../../../assets/images/contact-bg.png";

import category13 from "../../../assets/images/category-13.jpg";
import category02 from "../../../assets/images/category-02.jpg";
import category03 from "../../../assets/images/category-03.jpg";
import category04 from "../../../assets/images/category-04.jpg";

import contactBg01 from "../../../assets/images/contact-bg-01.png";
import contactBg02 from "../../../assets/images/contact-bg-02.png";



const PopularLists = () => {
    return (
        <section className="top-listing-section">
        <div className="container">
            <div className="row">
                <div className="col-md-12">

                    <div className="section-header aos" data-aos="fade-up">
                        <h2><span>Top</span> Popular Location Based Listing</h2>
                    </div>

                    {/* <!-- Listing Tabs --> */}
                    <div className="listing-tab">
                        <ul className="nav nav-tabs">
                            <li className="nav-item">
                                <a href="javascript:void(0);" className="nav-link active" data-bs-toggle="tab" data-bs-target="#uae">
                                    UAE <span>(200)</span>
                                </a>
                            </li>
                            <li className="nav-item">
                                <a href="javascript:void(0);" className="nav-link" data-bs-toggle="tab" data-bs-target="#usa">
                                    USA <span>(250)</span>
                                </a>
                            </li>
                            <li>
                                <a href="javascript:void(0);" className="nav-link" data-bs-toggle="tab" data-bs-target="#india">
                                    India <span>(340)</span>
                                </a>
                            </li>
                            <li>
                                <a href="javascript:void(0);" className="nav-link" data-bs-toggle="tab" data-bs-target="#bolivia">
                                    Bolivia <span>(230)</span>
                                </a>
                            </li>
                            <li>
                                <a href="javascript:void(0);" className="nav-link" data-bs-toggle="tab" data-bs-target="#canada">
                                    Canada <span>(210)</span>
                                </a>
                            </li>
                            <li>
                                <a href="javascript:void(0);" className="nav-link" data-bs-toggle="tab" data-bs-target="#kuwait">
                                    Kuwait <span>(400)</span>
                                </a>
                            </li>
                        </ul>
                    </div>
                    {/* <!-- /Listing Tabs --> */}

                    <div className="tab-content country-lists">

                        {/* <!-- UAE --> */}
                        <div className="tab-pane fade show active" id="uae" role="tabpanel">
                            <div className="row aos" data-aos="fade-up" data-aos-delay="500">
                                <div className="col-md-12">
                                    <div className="gigs-card-slider listing-gigs owl-carousel">
                                        <div className="gigs-grid">
                                            <div className="gigs-img">
                                                <div className="img-slider owl-carousel">
                                                    <div className="slide-images">
                                                        <a href="service-details.html">
                                                            <img src= {gigs01_1} className="img-fluid" alt="Gigs" />
                                                        </a>
                                                    </div>
                                                </div>
                                                <div className="card-overlay-badge">
                                                    <a href="service.html"><span className="badge bg-info"><i className="fa-solid fa-circle"></i>Graphics & Design</span></a>
                                                </div>
                                            </div>
                                            <div className="gigs-content">
                                                <div className="gigs-info">
                                                    <p className="gigs-location"><img src= {mapPinCheck} alt="Icon" />California</p>
                                                    <div className="star-rate">
                                                        <span><i className="fa-solid fa-star"></i>5.0 <span className="fw-semibold ms-1"> (28 Reviews)</span></span>
                                                    </div>
                                                </div>
                                                <div className="gigs-title">
                                                    <h3>
                                                        <a href="service-details.html">
                                                            I will develop modern responsive webflow website
                                                        </a>
                                                    </h3>										
                                                    <p className="loc-user-name">By Regina</p>
                                                </div>	
                                                <div className="gigs-card-footer">
                                                    <h5><span>From</span>Hrs.780</h5>
                                                    <div className="gigs-share">
                                                        <a href="javascript:void(0);">
                                                            <i className="feather-share-2"></i>
                                                        </a>
                                                        <span className="badge">Delivery in 1 day</span>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="gigs-grid">
                                            <div className="gigs-img">
                                                <div className="img-slider owl-carousel">
                                                    <div className="slide-images">
                                                        <a href="service-details.html">
                                                            <img src= {gigs02_1} className="img-fluid" alt="Gigs" />
                                                        </a>
                                                    </div>
                                                </div>										
                                                <div className="card-overlay-badge">
                                                    <a href="service.html"><span className="badge bg-info"><i className="fa-solid fa-circle"></i>Artificial Intelligence</span></a>
                                                </div>
                                            </div>
                                            <div className="gigs-content">
                                                <div className="gigs-info">
                                                    <p className="gigs-location"><img src= {mapPinCheck} alt="Icon" />Newyork</p>
                                                    <div className="star-rate">
                                                        <span><i className="fa-solid fa-star"></i>5.0 <span className="fw-semibold ms-1"> (40 Reviews)</span></span>
                                                    </div>
                                                </div>
                                                <div className="gigs-title">
                                                    <h3>
                                                        <a href="service-details.html">
                                                            I will convert figma, xd and PSD to unbounce, instapage
                                                        </a>
                                                    </h3>									
                                                    <p className="loc-user-name">By Venassa</p>
                                                </div>
                                                <div className="gigs-card-footer">
                                                    <h5><span>From</span>Hrs.350</h5>
                                                    <div className="gigs-share">
                                                        <a href="javascript:void(0);">
                                                            <i className="feather-share-2"></i>
                                                        </a>
                                                        <span className="badge">Delivery in 2 days</span>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="gigs-grid">
                                            <div className="gigs-img">
                                                <div className="img-slider owl-carousel">
                                                    <div className="slide-images">
                                                        <a href="service-details.html">
                                                            <img src= {gigs03_1} className="img-fluid" alt="Gigs" />
                                                        </a>
                                                    </div>
                                                </div>										
                                                <div className="card-overlay-badge">
                                                    <a href="service.html"><span className="badge bg-info"><i className="fa-solid fa-circle"></i>Programming & Tech</span></a>
                                                </div>
                                            </div>
                                            <div className="gigs-content">
                                                <div className="gigs-info">
                                                    <p className="gigs-location"><img src= {mapPinCheck} alt="Icon" />Alabama</p>
                                                    <div className="star-rate">
                                                        <span><i className="fa-solid fa-star"></i>5.0 <span className="fw-semibold ms-1"> (28 Reviews)</span></span>
                                                    </div>
                                                </div>
                                                <div className="gigs-title">
                                                    <h3>
                                                        <a href="service-details.html">
                                                            I will give you mixing, mastering and production lessons
                                                        </a>
                                                    </h3>									
                                                    <p className="loc-user-name">By Aron Fletcher</p>
                                                </div>
                                                <div className="gigs-card-footer">
                                                    <h5><span>From</span>Hrs.830</h5>
                                                    <div className="gigs-share">
                                                        <a href="javascript:void(0);">
                                                            <i className="feather-share-2"></i>
                                                        </a>
                                                        <span className="badge">Delivery in 1 day</span>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="gigs-grid">
                                            <div className="gigs-img">
                                                <div className="img-slider owl-carousel">
                                                    <div className="slide-images">
                                                        <a href="service-details.html">
                                                            <img src= {gigs04_1} className="img-fluid" alt="Gigs" />
                                                        </a>
                                                    </div>
                                                </div>
                                                <div className="card-overlay-badge">
                                                    <a href="service.html"><span className="badge bg-info"><i className="fa-solid fa-circle"></i>Graphics & Design</span></a>
                                                </div>
                                            </div>
                                            <div className="gigs-content">
                                                <div className="gigs-info">
                                                    <p className="gigs-location"><img src= {mapPinCheck} alt="Icon" />California</p>
                                                    <div className="star-rate">
                                                        <span><i className="fa-solid fa-star"></i>5.0 <span className="fw-semibold ms-1"> (28 Reviews)</span></span>
                                                    </div>
                                                </div>
                                                <div className="gigs-title">
                                                    <h3>
                                                        <a href="service-details.html">
                                                            I will do implementing chatbots on websites or messaging apps
                                                        </a>
                                                    </h3>									
                                                    <p className="loc-user-name">By John</p>
                                                </div>													
                                                <div className="gigs-card-footer">
                                                    <h5><span>From</span>Hrs.400</h5>
                                                    <div className="gigs-share">
                                                        <a href="javascript:void(0);">
                                                            <i className="feather-share-2"></i>
                                                        </a>
                                                        <span className="badge">Delivery in 6 days</span>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        {/* <!-- /UAE --> */}

                        {/* <!-- USA --> */}
                        <div className="tab-pane fade" id="usa" role="tabpanel">
                            <div className="row aos" data-aos="fade-up" data-aos-delay="500">
                                <div className="col-md-12">
                                    <div className="gigs-card-slider listing-gigs owl-carousel">
                                        <div className="gigs-grid">
                                            <div className="gigs-img">
                                                <div className="img-slider owl-carousel">
                                                    <div className="slide-images">
                                                        <a href="service-details.html">
                                                            <img src= {gigs05_1} className="img-fluid" alt="Gigs" />
                                                        </a>
                                                    </div>
                                                </div>
                                                <div className="card-overlay-badge">
                                                    <a href="service.html"><span className="badge bg-info"><i className="fa-solid fa-circle"></i>Videography</span></a>
                                                </div>
                                            </div>
                                            <div className="gigs-content">
                                                <div className="gigs-info">
                                                    <p className="gigs-location"><img src= {mapPinCheck} alt="Icon" />California</p>
                                                    <div className="star-rate">
                                                        <span><i className="fa-solid fa-star"></i>5.0 <span className="fw-semibold ms-1"> (28 Reviews)</span></span>
                                                    </div>
                                                </div>
                                                <div className="gigs-title">
                                                    <h3>
                                                        <a href="service-details.html">
                                                            I will develop modern responsive webflow website
                                                        </a>
                                                    </h3>										
                                                    <p className="loc-user-name">By Regina</p>
                                                </div>	
                                                <div className="gigs-card-footer">
                                                    <h5><span>From</span>Hrs.780</h5>
                                                    <div className="gigs-share">
                                                        <a href="javascript:void(0);">
                                                            <i className="feather-share-2"></i>
                                                        </a>
                                                        <span className="badge">Delivery in 1 day</span>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="gigs-grid">
                                            <div className="gigs-img">
                                                <div className="img-slider owl-carousel">
                                                    <div className="slide-images">
                                                        <a href="service-details.html">
                                                            <img src= {gigs06_1} className="img-fluid" alt="Gigs" />
                                                        </a>
                                                    </div>
                                                </div>										
                                                <div className="card-overlay-badge">
                                                    <a href="service.html"><span className="badge bg-info"><i className="fa-solid fa-circle"></i>Music</span></a>
                                                </div>
                                            </div>
                                            <div className="gigs-content">
                                                <div className="gigs-info">
                                                    <p className="gigs-location"><img src= {mapPinCheck} alt="Icon" />Newyork</p>
                                                    <div className="star-rate">
                                                        <span><i className="fa-solid fa-star"></i>5.0 <span className="fw-semibold ms-1"> (40 Reviews)</span></span>
                                                    </div>
                                                </div>
                                                <div className="gigs-title">
                                                    <h3>
                                                        <a href="service-details.html">
                                                            I will convert figma, xd and PSD to unbounce, instapage
                                                        </a>
                                                    </h3>									
                                                    <p className="loc-user-name">By Venassa</p>
                                                </div>
                                                <div className="gigs-card-footer">
                                                    <h5><span>From</span>Hrs.350</h5>
                                                    <div className="gigs-share">
                                                        <a href="javascript:void(0);">
                                                            <i className="feather-share-2"></i>
                                                        </a>
                                                        <span className="badge">Delivery in 2 days</span>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="gigs-grid">
                                            <div className="gigs-img">
                                                <div className="img-slider owl-carousel">
                                                    <div className="slide-images">
                                                        <a href="service-details.html">
                                                            <img src= {gigs07_1} className="img-fluid" alt="Gigs" />
                                                        </a>
                                                    </div>
                                                </div>										
                                                <div className="card-overlay-badge">
                                                    <a href="service.html"><span className="badge bg-info"><i className="fa-solid fa-circle"></i>Tech</span></a>
                                                </div>
                                            </div>
                                            <div className="gigs-content">
                                                <div className="gigs-info">
                                                    <p className="gigs-location"><img src= {mapPinCheck} alt="Icon" />Alabama</p>
                                                    <div className="star-rate">
                                                        <span><i className="fa-solid fa-star"></i>5.0 <span className="fw-semibold ms-1"> (28 Reviews)</span></span>
                                                    </div>
                                                </div>
                                                <div className="gigs-title">
                                                    <h3>
                                                        <a href="service-details.html">
                                                            I will give you mixing, mastering and production lessons
                                                        </a>
                                                    </h3>									
                                                    <p className="loc-user-name">By Aron Fletcher</p>
                                                </div>
                                                <div className="gigs-card-footer">
                                                    <h5><span>From</span>Hrs.830</h5>
                                                    <div className="gigs-share">
                                                        <a href="javascript:void(0);">
                                                            <i className="feather-share-2"></i>
                                                        </a>
                                                        <span className="badge">Delivery in 1 day</span>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="gigs-grid">
                                            <div className="gigs-img">
                                                <div className="img-slider owl-carousel">
                                                    <div className="slide-images">
                                                        <a href="service-details.html">
                                                            <img src= {gigs08_1} className="img-fluid" alt="Gigs" />
                                                        </a>
                                                    </div>
                                                </div>
                                                <div className="card-overlay-badge">
                                                    <a href="service.html"><span className="badge bg-info"><i className="fa-solid fa-circle"></i>Graphics</span></a>
                                                </div>
                                            </div>
                                            <div className="gigs-content">
                                                <div className="gigs-info">
                                                    <p className="gigs-location"><img src= {mapPinCheck} alt="Icon" />California</p>
                                                    <div className="star-rate">
                                                        <span><i className="fa-solid fa-star"></i>5.0 <span className="fw-semibold ms-1"> (28 Reviews)</span></span>
                                                    </div>
                                                </div>
                                                <div className="gigs-title">
                                                    <h3>
                                                        <a href="service-details.html">
                                                            I will do implementing chatbots on websites or messaging apps
                                                        </a>
                                                    </h3>									
                                                    <p className="loc-user-name">By John</p>
                                                </div>													
                                                <div className="gigs-card-footer">
                                                    <h5><span>From</span>Hrs.400</h5>
                                                    <div className="gigs-share">
                                                        <a href="javascript:void(0);">
                                                            <i className="feather-share-2"></i>
                                                        </a>
                                                        <span className="badge">Delivery in 6 days</span>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        {/* <!-- /USA --> */}

                        {/* <!-- India --> */}
                        <div className="tab-pane fade" id="india" role="tabpanel">
                            <div className="row aos" data-aos="fade-up" data-aos-delay="500">
                                <div className="col-md-12">
                                    <div className="gigs-card-slider listing-gigs owl-carousel">
                                        <div className="gigs-grid">
                                            <div className="gigs-img">
                                                <div className="img-slider owl-carousel">
                                                    <div className="slide-images">
                                                        <a href="service-details.html">
                                                            <img src= {gigs09_1} className="img-fluid" alt="Gigs" />
                                                        </a>
                                                    </div>
                                                </div>
                                                <div className="card-overlay-badge">
                                                    <a href="service.html"><span className="badge bg-info"><i className="fa-solid fa-circle"></i>Ui Design</span></a>
                                                </div>
                                            </div>
                                            <div className="gigs-content">
                                                <div className="gigs-info">
                                                    <p className="gigs-location"><img src= {mapPinCheck} alt="Icon" />California</p>
                                                    <div className="star-rate">
                                                        <span><i className="fa-solid fa-star"></i>5.0 <span className="fw-semibold ms-1"> (28 Reviews)</span></span>
                                                    </div>
                                                </div>
                                                <div className="gigs-title">
                                                    <h3>
                                                        <a href="service-details.html">
                                                            I will develop modern responsive webflow website
                                                        </a>
                                                    </h3>										
                                                    <p className="loc-user-name">By Regina</p>
                                                </div>	
                                                <div className="gigs-card-footer">
                                                    <h5><span>From</span>Hrs.780</h5>
                                                    <div className="gigs-share">
                                                        <a href="javascript:void(0);">
                                                            <i className="feather-share-2"></i>
                                                        </a>
                                                        <span className="badge">Delivery in 1 day</span>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="gigs-grid">
                                            <div className="gigs-img">
                                                <div className="img-slider owl-carousel">
                                                    <div className="slide-images">
                                                        <a href="service-details.html">
                                                            <img src= {gigs10_1} className="img-fluid" alt="Gigs" />
                                                        </a>
                                                    </div>
                                                </div>										
                                                <div className="card-overlay-badge">
                                                    <a href="service.html"><span className="badge bg-info"><i className="fa-solid fa-circle"></i>Artificial Intelligence</span></a>
                                                </div>
                                            </div>
                                            <div className="gigs-content">
                                                <div className="gigs-info">
                                                    <p className="gigs-location"><img src= {mapPinCheck} alt="Icon" />Newyork</p>
                                                    <div className="star-rate">
                                                        <span><i className="fa-solid fa-star"></i>5.0 <span className="fw-semibold ms-1"> (40 Reviews)</span></span>
                                                    </div>
                                                </div>
                                                <div className="gigs-title">
                                                    <h3>
                                                        <a href="service-details.html">
                                                            I will convert figma, xd and PSD to unbounce, instapage
                                                        </a>
                                                    </h3>									
                                                    <p className="loc-user-name">By Venassa</p>
                                                </div>
                                                <div className="gigs-card-footer">
                                                    <h5><span>From</span>Hrs.350</h5>
                                                    <div className="gigs-share">
                                                        <a href="javascript:void(0);">
                                                            <i className="feather-share-2"></i>
                                                        </a>
                                                        <span className="badge">Delivery in 2 days</span>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="gigs-grid">
                                            <div className="gigs-img">
                                                <div className="img-slider owl-carousel">
                                                    <div className="slide-images">
                                                        <a href="service-details.html">
                                                            <img src= {gigs11_1} className="img-fluid" alt="Gigs" />
                                                        </a>
                                                    </div>
                                                </div>										
                                                <div className="card-overlay-badge">
                                                    <a href="service.html"><span className="badge bg-info"><i className="fa-solid fa-circle"></i>Audio</span></a>
                                                </div>
                                            </div>
                                            <div className="gigs-content">
                                                <div className="gigs-info">
                                                    <p className="gigs-location"><img src= {mapPinCheck} alt="Icon" />Alabama</p>
                                                    <div className="star-rate">
                                                        <span><i className="fa-solid fa-star"></i>5.0 <span className="fw-semibold ms-1"> (28 Reviews)</span></span>
                                                    </div>
                                                </div>
                                                <div className="gigs-title">
                                                    <h3>
                                                        <a href="service-details.html">
                                                            I will give you mixing, mastering and production lessons
                                                        </a>
                                                    </h3>									
                                                    <p className="loc-user-name">By Aron Fletcher</p>
                                                </div>
                                                <div className="gigs-card-footer">
                                                    <h5><span>From</span>Hrs.830</h5>
                                                    <div className="gigs-share">
                                                        <a href="javascript:void(0);">
                                                            <i className="feather-share-2"></i>
                                                        </a>
                                                        <span className="badge">Delivery in 1 day</span>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="gigs-grid">
                                            <div className="gigs-img">
                                                <div className="img-slider owl-carousel">
                                                    <div className="slide-images">
                                                        <a href="service-details.html">
                                                            <img src= {gigs12_1} className="img-fluid" alt="Gigs" />
                                                        </a>
                                                    </div>
                                                </div>
                                                <div className="card-overlay-badge">
                                                    <a href="service.html"><span className="badge bg-info"><i className="fa-solid fa-circle"></i>Graphics & Design</span></a>
                                                </div>
                                            </div>
                                            <div className="gigs-content">
                                                <div className="gigs-info">
                                                    <p className="gigs-location"><img src= {mapPinCheck} alt="Icon" />California</p>
                                                    <div className="star-rate">
                                                        <span><i className="fa-solid fa-star"></i>5.0 <span className="fw-semibold ms-1"> (28 Reviews)</span></span>
                                                    </div>
                                                </div>
                                                <div className="gigs-title">
                                                    <h3>
                                                        <a href="service-details.html">
                                                            I will do implementing chatbots on websites or messaging apps
                                                        </a>
                                                    </h3>									
                                                    <p className="loc-user-name">By John</p>
                                                </div>													
                                                <div className="gigs-card-footer">
                                                    <h5><span>From</span>Hrs.400</h5>
                                                    <div className="gigs-share">
                                                        <a href="javascript:void(0);">
                                                            <i className="feather-share-2"></i>
                                                        </a>
                                                        <span className="badge">Delivery in 6 days</span>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        {/* <!-- /India --> */}

                        {/* <!-- Bolivia --> */}
                        <div className="tab-pane fade" id="bolivia" role="tabpanel">
                            <div className="row aos" data-aos="fade-up" data-aos-delay="500">
                                <div className="col-md-12">
                                    <div className="gigs-card-slider listing-gigs owl-carousel">
                                        <div className="gigs-grid">
                                            <div className="gigs-img">
                                                <div className="img-slider owl-carousel">
                                                    <div className="slide-images">
                                                        <a href="service-details.html">
                                                            <img src= {gigs13_1} className="img-fluid" alt="Gigs" />
                                                        </a>
                                                    </div>
                                                </div>
                                                <div className="card-overlay-badge">
                                                    <a href="service.html"><span className="badge bg-info"><i className="fa-solid fa-circle"></i>Graphics & Design</span></a>
                                                </div>
                                            </div>
                                            <div className="gigs-content">
                                                <div className="gigs-info">
                                                    <p className="gigs-location"><img src= {mapPinCheck} alt="Icon" />California</p>
                                                    <div className="star-rate">
                                                        <span><i className="fa-solid fa-star"></i>5.0 <span className="fw-semibold ms-1"> (28 Reviews)</span></span>
                                                    </div>
                                                </div>
                                                <div className="gigs-title">
                                                    <h3>
                                                        <a href="service-details.html">
                                                            I will develop modern responsive webflow website
                                                        </a>
                                                    </h3>										
                                                    <p className="loc-user-name">By Regina</p>
                                                </div>	
                                                <div className="gigs-card-footer">
                                                    <h5><span>From</span>Hrs.780</h5>
                                                    <div className="gigs-share">
                                                        <a href="javascript:void(0);">
                                                            <i className="feather-share-2"></i>
                                                        </a>
                                                        <span className="badge">Delivery in 1 day</span>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="gigs-grid">
                                            <div className="gigs-img">
                                                <div className="img-slider owl-carousel">
                                                    <div className="slide-images">
                                                        <a href="service-details.html">
                                                            <img src= {gigs14_1} className="img-fluid" alt="Gigs" />
                                                        </a>
                                                    </div>
                                                </div>										
                                                <div className="card-overlay-badge">
                                                    <a href="service.html"><span className="badge bg-info"><i className="fa-solid fa-circle"></i>Artificial Intelligence</span></a>
                                                </div>
                                            </div>
                                            <div className="gigs-content">
                                                <div className="gigs-info">
                                                    <p className="gigs-location"><img src= {mapPinCheck} alt="Icon" />Newyork</p>
                                                    <div className="star-rate">
                                                        <span><i className="fa-solid fa-star"></i>5.0 <span className="fw-semibold ms-1"> (40 Reviews)</span></span>
                                                    </div>
                                                </div>
                                                <div className="gigs-title">
                                                    <h3>
                                                        <a href="service-details.html">
                                                            I will convert figma, xd and PSD to unbounce, instapage
                                                        </a>
                                                    </h3>									
                                                    <p className="loc-user-name">By Venassa</p>
                                                </div>
                                                <div className="gigs-card-footer">
                                                    <h5><span>From</span>Hrs.350</h5>
                                                    <div className="gigs-share">
                                                        <a href="javascript:void(0);">
                                                            <i className="feather-share-2"></i>
                                                        </a>
                                                        <span className="badge">Delivery in 2 days</span>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="gigs-grid">
                                            <div className="gigs-img">
                                                <div className="img-slider owl-carousel">
                                                    <div className="slide-images">
                                                        <a href="service-details.html">
                                                            <img src= {gigs03_1} className="img-fluid" alt="Gigs" />
                                                        </a>
                                                    </div>
                                                </div>										
                                                <div className="card-overlay-badge">
                                                    <a href="service.html"><span className="badge bg-info"><i className="fa-solid fa-circle"></i>Programming & Tech</span></a>
                                                </div>
                                            </div>
                                            <div className="gigs-content">
                                                <div className="gigs-info">
                                                    <p className="gigs-location"><img src= {mapPinCheck} alt="Icon" />Alabama</p>
                                                    <div className="star-rate">
                                                        <span><i className="fa-solid fa-star"></i>5.0 <span className="fw-semibold ms-1"> (28 Reviews)</span></span>
                                                    </div>
                                                </div>
                                                <div className="gigs-title">
                                                    <h3>
                                                        <a href="service-details.html">
                                                            I will give you mixing, mastering and production lessons
                                                        </a>
                                                    </h3>									
                                                    <p className="loc-user-name">By Aron Fletcher</p>
                                                </div>
                                                <div className="gigs-card-footer">
                                                    <h5><span>From</span>Hrs.830</h5>
                                                    <div className="gigs-share">
                                                        <a href="javascript:void(0);">
                                                            <i className="feather-share-2"></i>
                                                        </a>
                                                        <span className="badge">Delivery in 1 day</span>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="gigs-grid">
                                            <div className="gigs-img">
                                                <div className="img-slider owl-carousel">
                                                    <div className="slide-images">
                                                        <a href="service-details.html">
                                                            <img src= {gigs04_1} className="img-fluid" alt="Gigs" />
                                                        </a>
                                                    </div>
                                                </div>
                                                <div className="card-overlay-badge">
                                                    <a href="service.html"><span className="badge bg-info"><i className="fa-solid fa-circle"></i>Graphics & Design</span></a>
                                                </div>
                                            </div>
                                            <div className="gigs-content">
                                                <div className="gigs-info">
                                                    <p className="gigs-location"><img src= {mapPinCheck} alt="Icon" />California</p>
                                                    <div className="star-rate">
                                                        <span><i className="fa-solid fa-star"></i>5.0 <span className="fw-semibold ms-1"> (28 Reviews)</span></span>
                                                    </div>
                                                </div>
                                                <div className="gigs-title">
                                                    <h3>
                                                        <a href="service-details.html">
                                                            I will do implementing chatbots on websites or messaging apps
                                                        </a>
                                                    </h3>									
                                                    <p className="loc-user-name">By John</p>
                                                </div>													
                                                <div className="gigs-card-footer">
                                                    <h5><span>From</span>Hrs.400</h5>
                                                    <div className="gigs-share">
                                                        <a href="javascript:void(0);">
                                                            <i className="feather-share-2"></i>
                                                        </a>
                                                        <span className="badge">Delivery in 6 days</span>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        {/* <!-- /Bolivia --> */}

                        {/* <!-- Canada --> */}
                        <div className="tab-pane fade" id="canada" role="tabpanel">
                            <div className="row aos" data-aos="fade-up" data-aos-delay="500">
                                <div className="col-md-12">
                                    <div className="gigs-card-slider listing-gigs owl-carousel">
                                        <div className="gigs-grid">
                                            <div className="gigs-img">
                                                <div className="img-slider owl-carousel">
                                                    <div className="slide-images">
                                                        <a href="service-details.html">
                                                            <img src= {gigs02_1} className="img-fluid" alt="Gigs" />
                                                        </a>
                                                    </div>
                                                </div>
                                                <div className="card-overlay-badge">
                                                    <a href="service.html"><span className="badge bg-info"><i className="fa-solid fa-circle"></i>Graphics & Design</span></a>
                                                </div>
                                            </div>
                                            <div className="gigs-content">
                                                <div className="gigs-info">
                                                    <p className="gigs-location"><img src= {mapPinCheck} alt="Icon" />California</p>
                                                    <div className="star-rate">
                                                        <span><i className="fa-solid fa-star"></i>5.0 <span className="fw-semibold ms-1"> (28 Reviews)</span></span>
                                                    </div>
                                                </div>
                                                <div className="gigs-title">
                                                    <h3>
                                                        <a href="service-details.html">
                                                            I will develop modern responsive webflow website
                                                        </a>
                                                    </h3>										
                                                    <p className="loc-user-name">By Regina</p>
                                                </div>	
                                                <div className="gigs-card-footer">
                                                    <h5><span>From</span>Hrs.780</h5>
                                                    <div className="gigs-share">
                                                        <a href="javascript:void(0);">
                                                            <i className="feather-share-2"></i>
                                                        </a>
                                                        <span className="badge">Delivery in 1 day</span>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="gigs-grid">
                                            <div className="gigs-img">
                                                <div className="img-slider owl-carousel">
                                                    <div className="slide-images">
                                                        <a href="service-details.html">
                                                            <img src= {gigs02_1} className="img-fluid" alt="Gigs" />
                                                        </a>
                                                    </div>
                                                </div>										
                                                <div className="card-overlay-badge">
                                                    <a href="service.html"><span className="badge bg-info"><i className="fa-solid fa-circle"></i>Digital Marketing</span></a>
                                                </div>
                                            </div>
                                            <div className="gigs-content">
                                                <div className="gigs-info">
                                                    <p className="gigs-location"><img src= {mapPinCheck} alt="Icon" />Newyork</p>
                                                    <div className="star-rate">
                                                        <span><i className="fa-solid fa-star"></i>5.0 <span className="fw-semibold ms-1"> (40 Reviews)</span></span>
                                                    </div>
                                                </div>
                                                <div className="gigs-title">
                                                    <h3>
                                                        <a href="service-details.html">
                                                            I will convert figma, xd and PSD to unbounce, instapage
                                                        </a>
                                                    </h3>									
                                                    <p className="loc-user-name">By Venassa</p>
                                                </div>
                                                <div className="gigs-card-footer">
                                                    <h5><span>From</span>Hrs.350</h5>
                                                    <div className="gigs-share">
                                                        <a href="javascript:void(0);">
                                                            <i className="feather-share-2"></i>
                                                        </a>
                                                        <span className="badge">Delivery in 2 days</span>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="gigs-grid">
                                            <div className="gigs-img">
                                                <div className="img-slider owl-carousel">
                                                    <div className="slide-images">
                                                        <a href="service-details.html">
                                                            <img src= {gigs12_1} className="img-fluid" alt="Gigs" />
                                                        </a>
                                                    </div>
                                                </div>										
                                                <div className="card-overlay-badge">
                                                    <a href="service.html"><span className="badge bg-info"><i className="fa-solid fa-circle"></i>Writing</span></a>
                                                </div>
                                            </div>
                                            <div className="gigs-content">
                                                <div className="gigs-info">
                                                    <p className="gigs-location"><img src= {mapPinCheck} alt="Icon" />Alabama</p>
                                                    <div className="star-rate">
                                                        <span><i className="fa-solid fa-star"></i>5.0 <span className="fw-semibold ms-1"> (28 Reviews)</span></span>
                                                    </div>
                                                </div>
                                                <div className="gigs-title">
                                                    <h3>
                                                        <a href="service-details.html">
                                                            I will give you mixing, mastering and production lessons
                                                        </a>
                                                    </h3>									
                                                    <p className="loc-user-name">By Aron Fletcher</p>
                                                </div>
                                                <div className="gigs-card-footer">
                                                    <h5><span>From</span>Hrs.830</h5>
                                                    <div className="gigs-share">
                                                        <a href="javascript:void(0);">
                                                            <i className="feather-share-2"></i>
                                                        </a>
                                                        <span className="badge">Delivery in 1 day</span>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="gigs-grid">
                                            <div className="gigs-img">
                                                <div className="img-slider owl-carousel">
                                                    <div className="slide-images">
                                                        <a href="service-details.html">
                                                            <img src= {gigs01_1} className="img-fluid" alt="Gigs" />
                                                        </a>
                                                    </div>
                                                </div>
                                                <div className="card-overlay-badge">
                                                    <a href="service.html"><span className="badge bg-info"><i className="fa-solid fa-circle"></i>Graphics & Design</span></a>
                                                </div>
                                            </div>
                                            <div className="gigs-content">
                                                <div className="gigs-info">
                                                    <p className="gigs-location"><img src= {mapPinCheck} alt="Icon" />California</p>
                                                    <div className="star-rate">
                                                        <span><i className="fa-solid fa-star"></i>5.0 <span className="fw-semibold ms-1"> (28 Reviews)</span></span>
                                                    </div>
                                                </div>
                                                <div className="gigs-title">
                                                    <h3>
                                                        <a href="service-details.html">
                                                            I will do implementing chatbots on websites or messaging apps
                                                        </a>
                                                    </h3>									
                                                    <p className="loc-user-name">By John</p>
                                                </div>													
                                                <div className="gigs-card-footer">
                                                    <h5><span>From</span>Hrs.400</h5>
                                                    <div className="gigs-share">
                                                        <a href="javascript:void(0);">
                                                            <i className="feather-share-2"></i>
                                                        </a>
                                                        <span className="badge">Delivery in 6 days</span>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        {/* <!-- /Canada --> */}

                        {/* <!-- Kuwait --> */}
                        <div className="tab-pane fade" id="kuwait" role="tabpanel">
                            <div className="row aos" data-aos="fade-up" data-aos-delay="500">
                                <div className="col-md-12">
                                    <div className="gigs-card-slider listing-gigs owl-carousel">
                                        <div className="gigs-grid">
                                            <div className="gigs-img">
                                                <div className="img-slider owl-carousel">
                                                    <div className="slide-images">
                                                        <a href="service-details.html">
                                                            <img src= {gigs02_1} className="img-fluid" alt="Gigs" />
                                                        </a>
                                                    </div>
                                                </div>
                                                <div className="card-overlay-badge">
                                                    <a href="service.html"><span className="badge bg-info"><i className="fa-solid fa-circle"></i>UI Design</span></a>
                                                </div>
                                            </div>
                                            <div className="gigs-content">
                                                <div className="gigs-info">
                                                    <p className="gigs-location"><img src= {mapPinCheck} alt="Icon" />California</p>
                                                    <div className="star-rate">
                                                        <span><i className="fa-solid fa-star"></i>5.0 <span className="fw-semibold ms-1"> (28 Reviews)</span></span>
                                                    </div>
                                                </div>
                                                <div className="gigs-title">
                                                    <h3>
                                                        <a href="service-details.html">
                                                            I will develop modern responsive webflow website
                                                        </a>
                                                    </h3>										
                                                    <p className="loc-user-name">By Regina</p>
                                                </div>	
                                                <div className="gigs-card-footer">
                                                    <h5><span>From</span>Hrs.780</h5>
                                                    <div className="gigs-share">
                                                        <a href="javascript:void(0);">
                                                            <i className="feather-share-2"></i>
                                                        </a>
                                                        <span className="badge">Delivery in 1 day</span>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="gigs-grid">
                                            <div className="gigs-img">
                                                <div className="img-slider owl-carousel">
                                                    <div className="slide-images">
                                                        <a href="service-details.html">
                                                            <img src= {gigs07_1} className="img-fluid" alt="Gigs" />
                                                        </a>
                                                    </div>
                                                </div>										
                                                <div className="card-overlay-badge">
                                                    <a href="service.html"><span className="badge bg-info"><i className="fa-solid fa-circle"></i>Marketing</span></a>
                                                </div>
                                            </div>
                                            <div className="gigs-content">
                                                <div className="gigs-info">
                                                    <p className="gigs-location"><img src= {mapPinCheck} alt="Icon" />Newyork</p>
                                                    <div className="star-rate">
                                                        <span><i className="fa-solid fa-star"></i>5.0 <span className="fw-semibold ms-1"> (40 Reviews)</span></span>
                                                    </div>
                                                </div>
                                                <div className="gigs-title">
                                                    <h3>
                                                        <a href="service-details.html">
                                                            I will convert figma, xd and PSD to unbounce, instapage
                                                        </a>
                                                    </h3>									
                                                    <p className="loc-user-name">By Venassa</p>
                                                </div>
                                                <div className="gigs-card-footer">
                                                    <h5><span>From</span>Hrs.350</h5>
                                                    <div className="gigs-share">
                                                        <a href="javascript:void(0);">
                                                            <i className="feather-share-2"></i>
                                                        </a>
                                                        <span className="badge">Delivery in 2 days</span>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="gigs-grid">
                                            <div className="gigs-img">
                                                <div className="img-slider owl-carousel">
                                                    <div className="slide-images">
                                                        <a href="service-details.html">
                                                            <img src= {gigs06_1} className="img-fluid" alt="Gigs" />
                                                        </a>
                                                    </div>
                                                </div>										
                                                <div className="card-overlay-badge">
                                                    <a href="service.html"><span className="badge bg-info"><i className="fa-solid fa-circle"></i>Programming & Tech</span></a>
                                                </div>
                                            </div>
                                            <div className="gigs-content">
                                                <div className="gigs-info">
                                                    <p className="gigs-location"><img src= {mapPinCheck} alt="Icon" />Alabama</p>
                                                    <div className="star-rate">
                                                        <span><i className="fa-solid fa-star"></i>5.0 <span className="fw-semibold ms-1"> (28 Reviews)</span></span>
                                                    </div>
                                                </div>
                                                <div className="gigs-title">
                                                    <h3>
                                                        <a href="service-details.html">
                                                            I will give you mixing, mastering and production lessons
                                                        </a>
                                                    </h3>									
                                                    <p className="loc-user-name">By Aron Fletcher</p>
                                                </div>
                                                <div className="gigs-card-footer">
                                                    <h5><span>From</span>Hrs.830</h5>
                                                    <div className="gigs-share">
                                                        <a href="javascript:void(0);">
                                                            <i className="feather-share-2"></i>
                                                        </a>
                                                        <span className="badge">Delivery in 1 day</span>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="gigs-grid">
                                            <div className="gigs-img">
                                                <div className="img-slider owl-carousel">
                                                    <div className="slide-images">
                                                        <a href="service-details.html">
                                                            <img src= {gigs05_1} className="img-fluid" alt="Gigs" />
                                                        </a>
                                                    </div>
                                                </div>
                                                <div className="card-overlay-badge">
                                                    <a href="service.html"><span className="badge bg-info"><i className="fa-solid fa-circle"></i>Graphics & Design</span></a>
                                                </div>
                                            </div>
                                            <div className="gigs-content">
                                                <div className="gigs-info">
                                                    <p className="gigs-location"><img src= {mapPinCheck} alt="Icon" />California</p>
                                                    <div className="star-rate">
                                                        <span><i className="fa-solid fa-star"></i>5.0 <span className="fw-semibold ms-1"> (28 Reviews)</span></span>
                                                    </div>
                                                </div>
                                                <div className="gigs-title">
                                                    <h3>
                                                        <a href="service-details.html">
                                                            I will do implementing chatbots on websites or messaging apps
                                                        </a>
                                                    </h3>									
                                                    <p className="loc-user-name">By John</p>
                                                </div>													
                                                <div className="gigs-card-footer">
                                                    <h5><span>From</span>Hrs.400</h5>
                                                    <div className="gigs-share">
                                                        <a href="javascript:void(0);">
                                                            <i className="feather-share-2"></i>
                                                        </a>
                                                        <span className="badge">Delivery in 6 days</span>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        {/* <!-- /Kuwait --> */}

                    </div>

                    <div className="cta-section">
                        <div className="cta-wrap">
                            <div className="row gx-0 align-items-center">
                                <div className="col-md-8">
                                    <div className="cta-info">
                                        <span className="badge">Exploring unique services for your needs</span>
                                        <h3>Looking to Buy/Sell a service?</h3>
                                    </div>
                                </div>
                                <div className="col-md-4 text-md-end">
                                    <div className="cta-btn">
                                        <a href="service.html" className="btn btn-primary">Find a Premium Provider<i className="fa-solid fa-caret-right"></i></a>
                                    </div>
                                </div>
                            </div>
                            <div className="cta-bg">
                                <div className="cta-bg1">
                                    <img src= {contactBg01} alt="Shape" />
                                </div>
                                <div className="cta-bg2">
                                    <img src= {contactBg02} alt="Shape" />
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="popular-services">
                        <div className="row">

                            <div className="col-md-12">
                                <div className="section-header aos" data-aos="fade-up">
                                    <h2><span>Explore</span> Popular Services 2025</h2>
                                </div>
                            </div>

                            {/* <!-- Categories List --> */}
                            <div className="col-xl-3 col-lg-4 col-sm-6">
                                <div className="category-item">
                                    <div className="category-img">
                                        <a href="service.html">
                                            <img src= {category13} className="img-fluid" alt="category img" />
                                        </a>
                                        <div className="category-slug">
                                            <a href="service.html">Gaming</a>
                                        </div>
                                    </div>
                                    <div className="category-list">
                                        <ul>
                                            <li>
                                                <a href="service.html">Game Coaching<i className="feather-arrow-up-right"></i></a>
                                            </li>
                                            <li>
                                                <a href="service.html">Game Sessions<i className="feather-arrow-up-right"></i></a>
                                            </li>
                                            <li>
                                                <a href="service.html">Gameplay Recording<i className="feather-arrow-up-right"></i></a>
                                            </li>
                                            <li>
                                                <a href="service.html">Game Testing<i className="feather-arrow-up-right"></i></a>
                                            </li>
                                            <li>
                                                <a href="service.html">Other Gaming Services<i className="feather-arrow-up-right"></i></a>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                            {/* <!-- /Categories List --> */}

                            {/* <!-- Categories List --> */}
                            <div className="col-xl-3 col-lg-4 col-sm-6">
                                <div className="category-item">
                                    <div className="category-img">
                                        <a href="service.html">
                                            <img src= {category02} className="img-fluid" alt="category img" />
                                        </a>
                                        <div className="category-slug">
                                            <a href="service.html">Self Improvement</a>
                                        </div>
                                    </div>
                                    <div className="category-list">
                                        <ul>
                                            <li>
                                                <a href="service.html">Self Improvement<i className="feather-arrow-up-right"></i></a>
                                            </li>
                                            <li>
                                                <a href="service.html">Online Tutoring<i className="feather-arrow-up-right"></i></a>
                                            </li>
                                            <li>
                                                <a href="service.html">Language Lessons<i className="feather-arrow-up-right"></i></a>
                                            </li>
                                            <li>
                                                <a href="service.html">Career Counseling<i className="feather-arrow-up-right"></i></a>
                                            </li>
                                            <li>
                                                <a href="service.html">Life Coaching<i className="feather-arrow-up-right"></i></a>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                            {/* <!-- /Categories List --> */}

                            {/* <!-- Categories List --> */}
                            <div className="col-xl-3 col-lg-4 col-sm-6">
                                <div className="category-item">
                                    <div className="category-img">
                                        <a href="service.html">
                                            <img src= {category03} className="img-fluid" alt="category img" />
                                        </a>
                                        <div className="category-slug">
                                            <a href="service.html">Wellness & Fitness</a>
                                        </div>
                                    </div>
                                    <div className="category-list">
                                        <ul>
                                            <li>
                                                <a href="service.html">Fitness Lessons<i className="feather-arrow-up-right"></i></a>
                                            </li>
                                            <li>
                                                <a href="service.html">Workout Plans<i className="feather-arrow-up-right"></i></a>
                                            </li>
                                            <li>
                                                <a href="service.html">Recipe Creation<i className="feather-arrow-up-right"></i></a>
                                            </li>
                                            <li>
                                                <a href="service.html">Meal Plans<i className="feather-arrow-up-right"></i></a>
                                            </li>
                                            <li>
                                                <a href="service.html">Nutrition Coaching<i className="feather-arrow-up-right"></i></a>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                            {/* <!-- /Categories List --> */}

                            {/* <!-- Categories List --> */}
                            <div className="col-xl-3 col-lg-4 col-sm-6">
                                <div className="category-item">
                                    <div className="category-img">
                                        <a href="service.html">
                                            <img src= {category04} className="img-fluid" alt="category img" />
                                        </a>
                                        <div className="category-slug">
                                            <a href="service.html">Lifestyle</a>
                                        </div>
                                    </div>
                                    <div className="category-list">
                                        <ul>
                                            <li>
                                                <a href="service.html">Product Photographers<i className="feather-arrow-up-right"></i></a>
                                            </li>
                                            <li>
                                                <a href="service.html">Food Photographers<i className="feather-arrow-up-right"></i></a>
                                            </li>
                                            <li>
                                                <a href="service.html">Lifestyle Photographers<i className="feather-arrow-up-right"></i></a>
                                            </li>
                                            <li>
                                                <a href="service.html">Fashion Photographers<i className="feather-arrow-up-right"></i></a>
                                            </li>
                                            <li>
                                                <a href="service.html">Outdoor<i className="feather-arrow-up-right"></i></a>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                            {/* <!-- /Categories List --> */}
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div className="con-bg">
            <img src= {contactBg} alt="Icon" />
        </div>
    </section>
    );
};

export default PopularLists