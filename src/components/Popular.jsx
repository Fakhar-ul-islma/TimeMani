import React from "react";

import "../../assets/css/style.css";
import "../../assets/css/bootstrap.min.css";
import "../../assets/css/owl.carousel.min.css";

import bannerBg04 from "../../assets/images/banner-bg-04.png";
import banner08 from "../../assets//images/shape-08.png";

import categoryIcon03 from "../../assets/images/category-icon-03.svg";
import categoryIcon04 from "../../assets/images/category-icon-04.svg";
import categoryIcon05 from "../../assets/images/category-icon-05.svg";
import categoryIcon06 from "../../assets/images/category-icon-06.svg";
import categoryIcon07 from "../../assets/images/category-icon-07.svg";
import categoryIcon08 from "../../assets/images/category-icon-08.svg";
import categoryIcon09 from "../../assets/images/category-icon-09.svg";
import categoryIcon10 from "../../assets/images/category-icon-10.svg";
import categoryIcon11 from "../../assets/images/category-icon-11.svg";
import categoryIcon12 from "../../assets/images/category-icon-12.svg";

import service01 from "../../assets/images/service-01.jpg";
import service02 from "../../assets/images/service-02.jpg";
import service03 from "../../assets/images/service-03.jpg";
import service04 from "../../assets/images/service-04.jpg";
import service05 from "../../assets/images/service-05.jpg";
import service06 from "../../assets/images/service-06.jpg";
import service07 from "../../assets/images/service-07.jpg";
import service08 from "../../assets/images/service-08.jpg";
import service09 from "../../assets/images/service-09.jpg";
import service11 from "../../assets/images/service-11.jpg";

const Popular = () => {
  return (
    <section className="popular-section">
			<div className="popular-img">
				<div className="popular-img-left">
					<img src= {bannerBg04} alt="Shape" />
				</div>
				<div className="popular-img-right">
					<img src= {banner08} alt="Shape" />
				</div>
			</div>
			<div className="container">
				<div className="section-header aos" data-aos="fade-up">
					<h2 className="text-white"><span>Popular</span> Categories.</h2>
				</div>
				<div className="row row-cols-xl-5 row-cols-lg-4 row-cols-md-3 row-cols-sm-2 row-cols-1 align-items-center">

					{/* <!-- Category Grid --> */}
                    <div className="col d-flex aos" data-aos="fade-up">
                        <div className="category-grid flex-fill">
                            <div className="popular-icon">
                            	<span>
                            		<img src= {categoryIcon03} alt="Icon" />
                            	</span>
                            </div>
                            <div className="popular-content">
                            	<h5>Digital Marketing</h5>
                            	<p>100 Services</p>
                            </div>
                            <div className="category-overlay">
                            	<a href="categories.html">
	                            	<div className="category-overlay-img">
	                            		<img src= {service06} className="img-fluid" alt="Service" />
	                            		<div className="category-overlay-content">
		                            		<h5>Digital Marketing</h5>
		                            		<i className="feather-arrow-up-right"></i>
		                            	</div>
	                            	</div>
	                            </a>
                            </div>
                        </div>
                    </div>
                    {/* <!-- /Category Grid --> */}

                    {/* <!-- Category Grid --> */}
                    <div className="col d-flex aos" data-aos="fade-up">
                        <div className="category-grid flex-fill">
                            <div className="popular-icon">
                            	<span>
                            		<img src= {categoryIcon04} alt="Icon" />
                            	</span>
                            </div>
                            <div className="popular-content">
                            	<h5>Programming & Tech</h5>
                            	<p>200 Services</p>
                            </div>
                            <div className="category-overlay">
                            	<a href="categories.html">
	                            	<div className="category-overlay-img">
	                            		<img src= {service05} className="img-fluid" alt="Service" />
	                            		<div className="category-overlay-content">
		                            		<h5>Programming & Tech</h5>
		                            		<i className="feather-arrow-up-right"></i>
		                            	</div>
	                            	</div>
	                            </a>
                            </div>
                        </div>
                    </div>
                    {/* <!-- /Category Grid --> */}

                    {/* <!-- Category Grid --> */}
                    <div className="col d-flex aos" data-aos="fade-up">
                        <div className="category-grid flex-fill">
                            <div className="popular-icon">
                            	<span>
                            		<img src= {categoryIcon05} alt="Icon" />
                            	</span>
                            </div>
                            <div className="popular-content">
                            	<h5>Writing Translation</h5>
                            	<p>180 Services</p>
                            </div>
                            <div className="category-overlay">
                            	<a href="categories.html">
	                            	<div className="category-overlay-img">
	                            		<img src= {service07} className="img-fluid" alt="Service" />
	                            		<div className="category-overlay-content">
		                            		<h5>Writing Translation</h5>
		                            		<i className="feather-arrow-up-right"></i>
		                            	</div>
	                            	</div>
	                            </a>
                            </div>
                        </div>
                    </div>
                    {/* <!-- /Category Grid --> */}

                    {/* <!-- Category Grid --> */}
                    <div className="col d-flex aos" data-aos="fade-up">
                        <div className="category-grid flex-fill">
                            <div className="popular-icon">
                            	<span>
                            		<img src= {categoryIcon06} alt="Icon" />
                            	</span>
                            </div>
                            <div className="popular-content">
                            	<h5>Photography</h5>
                            	<p>230 Services</p>
                            </div>
                            <div className="category-overlay">
                            	<a href="categories.html">
	                            	<div className="category-overlay-img">
	                            		<img src= {service08} className="img-fluid" alt="Service" />
	                            		<div className="category-overlay-content">
		                            		<h5>Photography</h5>
		                            		<i className="feather-arrow-up-right"></i>
		                            	</div>
	                            	</div>
	                            </a>
                            </div>
                        </div>
                    </div>
                    {/* <!-- /Category Grid --> */}

                    {/* <!-- Category Grid --> */}
                    <div className="col d-flex aos" data-aos="fade-up">
                        <div className="category-grid flex-fill">
                            <div className="popular-icon">
                            	<span>
                            		<img src= {categoryIcon07} alt="Icon" />
                            	</span>
                            </div>
                            <div className="popular-content">
                            	<h5>Artificial Intelligence</h5>
                            	<p>310 Services</p>
                            </div>
                            <div className="category-overlay">
                            	<a href="categories.html">
	                            	<div className="category-overlay-img">
	                            		<img src= {service02} className="img-fluid" alt="Service" />
	                            		<div className="category-overlay-content">
		                            		<h5>Artificial Intelligence</h5>
		                            		<i className="feather-arrow-up-right"></i>
		                            	</div>
	                            	</div>
	                            </a>
                            </div>
                        </div>
                    </div>
                    {/* <!-- /Category Grid --> */}

                    {/* <!-- Category Grid --> */}
                    <div className="col d-flex aos" data-aos="fade-up">
                        <div className="category-grid flex-fill">
                            <div className="popular-icon">
                            	<span>
                            		<img src= {categoryIcon08} alt="Icon" />
                            	</span>
                            </div>
                            <div className="popular-content">
                            	<h5>Music & Audio</h5>
                            	<p>270 Services</p>
                            </div>
                            <div className="category-overlay">
                            	<a href="categories.html">
	                            	<div className="category-overlay-img">
	                            		<img src= {service04} className="img-fluid" alt="Service" />
	                            		<div className="category-overlay-content">
		                            		<h5>Music & Audio</h5>
		                            		<i className="feather-arrow-up-right"></i>
		                            	</div>
	                            	</div>
	                            </a>
                            </div>
                        </div>
                    </div>
                    {/* <!-- /Category Grid --> */}

                    {/* <!-- Category Grid --> */}
                    <div className="col d-flex aos" data-aos="fade-up">
                        <div className="category-grid flex-fill">
                            <div className="popular-icon">
                            	<span>
                            		<img src= {categoryIcon09} alt="Icon" />
                            	</span>
                            </div>
                            <div className="popular-content">
                            	<h5>Design</h5>
                            	<p>450 Services</p>
                            </div>
                            <div className="category-overlay">
                            	<a href="categories.html">
	                            	<div className="category-overlay-img">
	                            		<img src= {service11} className="img-fluid" alt="Service" />
	                            		<div className="category-overlay-content">
		                            		<h5>Design</h5>
		                            		<i className="feather-arrow-up-right"></i>
		                            	</div>
	                            	</div>
	                            </a>
                            </div>
                        </div>
                    </div>
                    {/* <!-- /Category Grid --> */}

                    {/* <!-- Category Grid --> */}
                    <div className="col d-flex aos" data-aos="fade-up">
                        <div className="category-grid flex-fill">
                            <div className="popular-icon">
                            	<span>
                            		<img src= {categoryIcon10} alt="Icon" />
                            	</span>
                            </div>
                            <div className="popular-content">
                            	<h5>Business</h5>
                            	<p>330 Services</p>
                            </div>
                            <div className="category-overlay">
                            	<a href="categories.html">
	                            	<div className="category-overlay-img">
	                            		<img src= {service03} className="img-fluid" alt="Service" />
	                            		<div className="category-overlay-content">
		                            		<h5>Business</h5>
		                            		<i className="feather-arrow-up-right"></i>
		                            	</div>
	                            	</div>
	                            </a>
                            </div>
                        </div>
                    </div>
                    {/* <!-- /Category Grid --> */}

                    {/* <!-- Category Grid --> */}
                    <div className="col d-flex aos" data-aos="fade-up">
                        <div className="category-grid flex-fill">
                            <div className="popular-icon">
                            	<span>
                            		<img src= {categoryIcon11} alt="Icon" />
                            	</span>
                            </div>
                            <div className="popular-content">
                            	<h5>Marketing & Sales</h5>
                            	<p>250 Services</p>
                            </div>
                            <div className="category-overlay">
                            	<a href="categories.html">
	                            	<div className="category-overlay-img">
	                            		<img src= {service09} className="img-fluid" alt="Service" />
	                            		<div className="category-overlay-content">
		                            		<h5>Marketing & Sales</h5>
		                            		<i className="feather-arrow-up-right"></i>
		                            	</div>
	                            	</div>
	                            </a>
                            </div>
                        </div>
                    </div>
                    {/* <!-- /Category Grid --> */}

                    {/* <!-- Category Grid --> */}
                    <div className="col d-flex aos" data-aos="fade-up">
                        <div className="category-grid flex-fill">
                            <div className="popular-icon">
                            	<span>
                            		<img src= {categoryIcon12} alt="Icon" />
                            	</span>
                            </div>
                            <div className="popular-content">
                            	<h5>Social Media</h5>
                            	<p>180 Services</p>
                            </div>
                            <div className="category-overlay">
                            	<a href="categories.html">
	                            	<div className="category-overlay-img">
	                            		<img src= {service01} className="img-fluid" alt="Service" />
	                            		<div className="category-overlay-content">
		                            		<h5>Social Media</h5>
		                            		<i className="feather-arrow-up-right"></i>
		                            	</div>
	                            	</div>
	                            </a>
                            </div>
                        </div>
                    </div>
                    {/* <!-- /Category Grid --> */}

				</div>
			</div>
		</section>
  
  );
};

export default Popular;
