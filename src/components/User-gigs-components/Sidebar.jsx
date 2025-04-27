
import React from "react";



import "../../../assets/css/style.css";
import "../../../assets/css/bootstrap.min.css";
import "../../../assets/css/owl.carousel.min.css";


import dashboardIcon01 from "../../../assets/images/dashboard-icon-01.svg";
import dashboardIcon02 from "../../../assets/images/dashboard-icon-02.svg";
import dashboardIcon03 from "../../../assets/images/dashboard-icon-03.svg";
import dashboardIcon04 from "../../../assets/images/dashboard-icon-04.svg";
import dashboardIcon05 from "../../../assets/images/dashboard-icon-05.svg";
import dashboardIcon06 from "../../../assets/images/dashboard-icon-06.svg";
import dashboardIcon07 from "../../../assets/images/dashboard-icon-07.svg";
import dashboardIcon08 from "../../../assets/images/dashboard-icon-08.svg";
import dashboardIcon09 from "../../../assets/images/dashboard-icon-09.svg";
import dashboardIcon10 from "../../../assets/images/dashboard-icon-10.svg";
import dashboardIcon11 from "../../../assets/images/dashboard-icon-11.svg";

import user05 from "../../../assets/images/user-05.jpg";

const Sidebar = () => {
  return (
    // <!-- Sidebar -->
					<div className="col-lg-4 col-xl-3 theiaStickySidebar">
						<div className="user-sidebar">
							<div className="user-head">
								<span className="flex-shrink-0">
									<img src= {user05} className="img-fluid" alt="img" />
								</span>
								<div className="user-information">
									<div>
										<h6>Hanzala Ahmed</h6>
										<ul>
											<li>USA</li>
											<li><i className="fa-solid fa-star"></i> 5.0 (45)</li>
										</ul>
									</div>
									<a href="#" className="user-edit"><i className="fa-solid fa-user-pen"></i></a>
								</div>
							</div>
							<div className="user-body">
								<ul>
									<li>
										<a href="user-dashboard.html">
											<img src= {dashboardIcon01} className="img-fluid" alt="img" />Dashboard
										</a>
									</li>
									<li>
										<a href="user-gigs.html" className="active">
											<img src= {dashboardIcon02} className="img-fluid" alt="img" />Manage Gigs
										</a>
									</li>
									<li>
										<a href="user-purchase.html">
											<img src= {dashboardIcon03} className="img-fluid" alt="img" />Purchase
										</a>
									</li>
									<li>
										<a href="user-sales.html">
											<img src= {dashboardIcon04} className="img-fluid" alt="img" />Sales
										</a>
									</li>
									<li>
										<a href="user-files.html">
											<img src= {dashboardIcon05} className="img-fluid" alt="img" />Files
										</a>
									</li>
									<li>
										<a href="user-reviews.html">
											<img src= {dashboardIcon06} className="img-fluid" alt="img" />My Reviews
										</a>
									</li>
									<li>
										<a href="user-wishlist.html">
											<img src= {dashboardIcon07} className="img-fluid" alt="img" />Wishlist
										</a>
									</li>
									<li>
										<a href="user-message.html">
											<img src= {dashboardIcon08} className="img-fluid" alt="img" />Messages
										</a>
									</li>
									<li>
										<a href="user-wallet.html">
											<img src= {dashboardIcon09} className="img-fluid" alt="img" />Wallet
										</a>
									</li>
									<li>
										<a href="user-payments.html">
											<img src= {dashboardIcon10} className="img-fluid" alt="img" />Payments
										</a>
									</li>
									<li>
										<a href="user-settings.html">
											<img src= {dashboardIcon11} className="img-fluid" alt="img" />Settings
										</a>
									</li>
								</ul>
							</div>
						</div>
					</div>
					// {/* <!-- /Sidebar --> */}

  );
};

export default Sidebar;
