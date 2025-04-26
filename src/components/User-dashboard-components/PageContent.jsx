
import React from "react";

import "../../../assets/css/style.css";
import "../../../assets/css/bootstrap.min.css";
import "../../../assets/css/owl.carousel.min.css";

import user05 from "../../../assets/images/user-05.jpg";

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


import checkIcon from "../../../assets/images/check-icon.svg";


import sectionIcon from "../../../assets/images/section-icon.svg";

import vectorIcon from "../../../assets/images/vector-icon-01.svg";

import steamIcon01 from "../../../assets/images/steam-icon.svg";

import gigs01 from "../../../assets/images/gigs-01.jpg";
import gigs04 from "../../../assets/images/gigs-04.jpg";
import gigs06 from "../../../assets/images/gigs-06.jpg";
import gigs07 from "../../../assets/images/gigs-07.jpg";
import gigs08 from "../../../assets/images/gigs-08.jpg";
import gigs09 from "../../../assets/images/gigs-09.jpg";

const PageContent = () => {
    return (
<div className="page-content content">
			<div className="container">
				
				<div className="row">

					{/* <!-- Sidebar --> */}
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
										<a href="user-dashboard.html" className="active">
											<img src= {dashboardIcon01} className="img-fluid" alt="img" />Dashboard
										</a>
									</li>
									<li>
										<a href="user-gigs.html">
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
					{/* <!-- /Sidebar --> */}

					<div className="col-xl-9 col-lg-8">
						<div className="dashboard-header">							
							<div className="main-title">
								<h3>Overview</h3>
							</div>
							<div className="search-filter-selected select-icon">
								<div className="form-group">
									<span className="sort-text"><i className="feather-calendar"></i></span>
									<select className="select">
										<option>Jan 2024</option>
										<option>Feb 2024</option>
									</select>
								</div>
							</div>
						</div>

						{/* <!-- Overview --> */}
						<div className="row">
							<div className="col-md-3 d-flex">
								<div className="dash-widget flex-fill">
									<span className="dash-icon bg-warning">
										<img src= {checkIcon} className="img-fluid" alt="img" />
									</span>
									<p>Completed Gigs</p>
									<h3>08</h3>
								</div>
							</div>
							<div className="col-md-3 d-flex">
								<div className="dash-widget flex-fill">
									<span className="dash-icon bg-success">
										<img src= {sectionIcon} className="img-fluid" alt="img" />
									</span>
									<p>Recent Gigs</p>
									<h3>15</h3>
								</div>
							</div>
							<div className="col-md-6 d-flex">
								<div className="dash-earning flex-fill">
									<div className="earning-info">
										<p>Your Earning This month</p>
										<h3>$1,57,815</h3>
										<h6>Update your <span>setting</span></h6>
									</div>
									<div className="earning-btn">
										<a href="user-wallet.html" className="btn btn-primary">Wallet</a>
									</div>
								</div>
							</div>
							<div className="col-md-3 d-flex">
								<div className="dash-widget flex-fill">
									<span className="dash-icon bg-pending">
										<i className="feather-heart"></i>
									</span>
									<p>My Wishlist</p>
									<h3>45</h3>
								</div>
							</div>
							<div className="col-md-3 d-flex">
								<div className="dash-widget flex-fill">
									<span className="dash-icon bg-danger">
										<i className="feather-star"></i>
									</span>
									<p>Total Reviews</p>
									<h3>24</h3>
								</div>
							</div>
							<div className="col-xl-3 col-md-6 d-flex">
								<div className="dash-widget dash-credit flex-fill">
									<div className="dash-cont">
										<span className="dash-icon">
											<i className="feather-credit-card"></i>
										</span>
										<div className="dash-cash-info">
											<p>Total Credit</p>
											<h3>$1,292</h3>
										</div>
									</div>
									<div className="dash-grade">
										<p><img src= {vectorIcon} className="img-fluid" alt="img" /><span className="text-success">+10% </span> last week</p>
									</div>
								</div>
							</div>
							<div className="col-xl-3 col-md-6 d-flex">
								<div className="dash-widget dash-credit bg-pink-light flex-fill">
									<div className="dash-cont">
										<span className="dash-icon">
											<img src="images/steam-icon.svg" className="img-fluid" alt="img" />
										</span>
										<div className="dash-cash-info">
											<p>Total Debit</p>
											<h3>$100</h3>
										</div>
									</div>
									<div className="dash-grade">
										<p><img src= {steamIcon01} className="img-fluid" alt="img" /><span className="text-danger">-1% </span> last week</p>
									</div>
								</div>
							</div>
						</div>
						{/* <!-- /Overview --> */}

						<div className="row">

							{/* <!-- Sales Statistics --> */}
							<div className="col-lg-12">
								<div className="card dashboard-card">
									<div className="card-header">
										<div className="gig-card-head">
											<h4 className="card-title">Sales Statistics</h4>
											<ul className="gigs-list nav">
												<li><a href="#" data-bs-toggle="tab" data-bs-target="#amount">Amount</a></li>
												<li><a href="#" className="active" data-bs-toggle="tab" data-bs-target="#gig">Gigs</a></li>
											</ul>
										</div>
										<a href="user-sales.html" className="view-link">View All<i className="feather-arrow-right"></i></a>
									</div>
									<div className="card-body">
										<div className="tab-content">
											<div className="tab-pane fade" id="amount">
												<div id="amount-chart"></div>
											</div>
											<div className="tab-pane show active" id="gig">
												<div id="purchase-chart"></div>
											</div>
										</div>
									</div>
								</div>
							</div>
							{/* <!-- /Sales Statistics --> */}

						</div>

						<div className="row">

							{/* <!-- Recent Payments --> */}
							<div className="col-lg-12 d-flex">
								<div className="card dashboard-card card-gig flex-fill">
									<div className="card-header">
										<div className="gig-card-head">
											<h4 className="card-title">Gigs</h4>
											<ul className="gigs-list nav">
												<li><a href="#" className="active" data-bs-toggle="tab" data-bs-target="#purchase">Purchase</a></li>
												<li><a href="#" data-bs-toggle="tab" data-bs-target="#sales">Sales</a></li>
											</ul>
										</div>
										<a href="user-purchase.html" className="view-link">View All<i className="feather-arrow-right"></i></a>
									</div>
									<div className="card-body p-0">
										<div className="tab-content">
											<div className="tab-pane show active" id="purchase">
												<div className="table-responsive card-table">
													<table className="table">
														<tbody>
															<tr>
																<td>
																	<div className="d-flex align-items-center">
																		<div className="table-img">
																			<a href="javascript:void(0);"><img src= {gigs07} className="img-fluid" alt="img" /></a>
																		</div>
																		<div className="recent-payment">
																			<h6><a href="javascript:void(0);">Managing and optimizing paid advertising...</a></h6>
																			<ul>
																				<li>Delivery Date: 11/01/2024</li>
																				<li>Seller : <span className="text-dark">Jones</span></li>
																			</ul>
																		</div>
																	</div>
																</td>
																<td className="text-end">
																	<span className="badge badge-receive bg-info">New</span>
																</td>
																<td className="text-end">
																	<h6 className="mb-0">$1400</h6>
																</td>
															</tr>
															<tr>
																<td>
																	<div className="d-flex align-items-center">
																		<div className="table-img">
																			<a href="javascript:void(0);"><img src= {gigs08} className="img-fluid" alt="img" /></a>
																		</div>
																		<div className="recent-payment">
																			<h6><a href="javascript:void(0);">I will do collaborating with influencers...</a></h6>
																			<ul>
																				<li>Delivery Date: 10/01/2024</li>
																				<li>Seller : <span className="text-dark">James</span></li>
																			</ul>
																		</div>
																	</div>
																</td>
																<td className="text-end">
																	<span className="badge badge-receive bg-info">New</span>
																</td>
																<td className="text-end">
																	<h6 className="mb-0">$1400</h6>
																</td>
															</tr>
															<tr>
																<td>
																	<div className="d-flex align-items-center">
																		<div className="table-img">
																			<a href="javascript:void(0);"><img src= {gigs09} className="img-fluid" alt="img" /></a>
																		</div>
																		<div className="recent-payment">
																			<h6><a href="javascript:void(0);">I will do designing and executing targeted...</a></h6>
																			<ul>
																				<li>Delivery Date: 09/01/2024</li>
																				<li>Seller : <span className="text-dark">Linda</span></li>
																			</ul>
																		</div>
																	</div>
																</td>
																<td className="text-end">
																	<span className="badge badge-receive bg-info">New</span>
																</td>
																<td className="text-end">
																	<h6 className="mb-0">$1400</h6>
																</td>
															</tr>
															<tr>
																<td>
																	<div className="d-flex align-items-center">
																		<div className="table-img">
																			<a href="javascript:void(0);"><img src= {gigs04} className="img-fluid" alt="img" /></a>
																		</div>
																		<div className="recent-payment">
																			<h6><a href="javascript:void(0);">Embedded Android & AOSP customizations...</a></h6>
																			<ul>
																				<li>Delivery Date: 08/01/2024</li>
																				<li>Seller : <span className="text-dark">Jeffrey</span></li>
																			</ul>
																		</div>
																	</div>
																</td>
																<td className="text-end">
																	<span className="badge badge-receive bg-info">New</span>
																</td>
																<td className="text-end">
																	<h6 className="mb-0">$1400</h6>
																</td>
															</tr>
															<tr>
																<td>
																	<div className="d-flex align-items-center">
																		<div className="table-img">
																			<a href="javascript:void(0);"><img src= {gigs06} className="img-fluid" alt="img" /></a>
																		</div>
																		<div className="recent-payment">
																			<h6><a href="javascript:void(0);">I will do integrating AR elements into...</a></h6>
																			<ul>
																				<li>Delivery Date: 07/01/2024</li>
																				<li>Seller : <span className="text-dark">Robert</span></li>
																			</ul>
																		</div>
																	</div>
																</td>
																<td className="text-end">
																	<span className="badge badge-receive bg-success">Completed</span>
																</td>
																<td className="text-end">
																	<h6 className="mb-0">$1400</h6>
																</td>
															</tr>
														</tbody>
													</table>
												</div>
											</div>
											<div className="tab-pane fade" id="sales">
												<div className="table-responsive card-table">
													<table className="table">
														<tbody>
															<tr>
																<td>
																	<div className="d-flex align-items-center">
																		<div className="table-img">
																			<a href="javascript:void(0);"><img src= {gigs01} className="img-fluid" alt="img" /></a>
																		</div>
																		<div className="recent-payment">
																			<h6><a href="javascript:void(0);">I will do integrating AR elements into...</a></h6>
																			<ul>
																				<li>Date: 07/01/2024</li>
																				<li>Buyer : <span className="text-dark">Robert</span></li>
																			</ul>
																		</div>
																	</div>
																</td>
																<td className="text-end">
																	<span className="badge badge-receive bg-success">Completed</span>
																</td>
																<td className="text-end">
																	<h6 className="mb-0">$1400</h6>
																</td>
															</tr>
															<tr>
																<td>
																	<div className="d-flex align-items-center">
																		<div className="table-img">
																			<a href="javascript:void(0);"><img src= {gigs08} className="img-fluid" alt="img" /></a>
																		</div>
																		<div className="recent-payment">
																			<h6><a href="javascript:void(0);">I will do collaborating with influencers...</a></h6>
																			<ul>
																				<li>Date: 10/01/2024</li>
																				<li>Buyer : <span className="text-dark">James</span></li>
																			</ul>
																		</div>
																	</div>
																</td>
																<td className="text-end">
																	<span className="badge badge-receive bg-info">New</span>
																</td>
																<td className="text-end">
																	<h6 className="mb-0">$1400</h6>
																</td>
															</tr>
															<tr>
																<td>
																	<div className="d-flex align-items-center">
																		<div className="table-img">
																			<a href="javascript:void(0);"><img src= {gigs09} className="img-fluid" alt="img" /></a>
																		</div>
																		<div className="recent-payment">
																			<h6><a href="javascript:void(0);">Managing and optimizing paid advertising...</a></h6>
																			<ul>
																				<li>Date: 11/01/2024</li>
																				<li>Buyer : <span className="text-dark">Jones</span></li>
																			</ul>
																		</div>
																	</div>
																</td>
																<td className="text-end">
																	<span className="badge badge-receive bg-info">New</span>
																</td>
																<td className="text-end">
																	<h6 className="mb-0">$1000</h6>
																</td>
															</tr>
															<tr>
																<td>
																	<div className="d-flex align-items-center">
																		<div className="table-img">
																			<a href="javascript:void(0);"><img src= {gigs09} className="img-fluid" alt="img" /></a>
																		</div>
																		<div className="recent-payment">
																			<h6><a href="javascript:void(0);">I will do designing and executing targeted...</a></h6>
																			<ul>
																				<li>Date: 09/01/2024</li>
																				<li>Buyer : <span className="text-dark">Linda</span></li>
																			</ul>
																		</div>
																	</div>
																</td>
																<td className="text-end">
																	<span className="badge badge-receive bg-info">New</span>
																</td>
																<td className="text-end">
																	<h6 className="mb-0">$1400</h6>
																</td>
															</tr>
															<tr>
																<td>
																	<div className="d-flex align-items-center">
																		<div className="table-img">
																			<a href="javascript:void(0);"><img src= {gigs04} className="img-fluid" alt="img" /></a>
																		</div>
																		<div className="recent-payment">
																			<h6><a href="javascript:void(0);">Embedded Android & AOSP customizations...</a></h6>
																			<ul>
																				<li>Date: 08/01/2024</li>
																				<li>Buyer : <span className="text-dark">Jeffrey</span></li>
																			</ul>
																		</div>
																	</div>
																</td>
																<td className="text-end">
																	<span className="badge badge-receive bg-info">New</span>
																</td>
																<td className="text-end">
																	<h6 className="mb-0">$1400</h6>
																</td>
															</tr>
														</tbody>
													</table>
												</div>
											</div>
										</div>
									</div>
								</div>
							</div>
							{/* <!-- /Recent Payments --> */}

						</div>

					</div>
				</div>

			</div>
		</div>
    );
};

export default PageContent;

// // Image imports (آپ کو ان تصاویر کے صحیح راستے کی ضرورت ہوگی)
// import gigs01 from "../../../assets/images/gigs-01.jpg";
// // import gigs04 from "../../../assets/images/gigs-04.jpg";
// // import gigs06 from "../../../assets/images/gigs-06.jpg";
// import gigs07 from "../../../assets/images/gigs-07.jpg";

// const PageContent = () => {
//   const [activeTab, setActiveTab] = useState('purchase');

//   const handleTabClick = (tab) => {
//     setActiveTab(tab);
//   };

//   return (
//     <div className="row">
//       {/* Recent Payments */}
//       <div className="col-lg-12 d-flex">
//         <div className="card dashboard-card card-gig flex-fill">
//           <div className="card-header">
//             <div className="gig-card-head">
//               <h4 className="card-title">Gigs</h4>
//               <ul className="gigs-list nav">
//                 <li>
//                   <a
//                     href="#"
//                     className={activeTab === 'purchase' ? 'active' : ''}
//                     onClick={() => handleTabClick('purchase')}
//                     aria-label="Purchase Tab"
//                   >
//                     Purchase
//                   </a>
//                 </li>
//                 <li>
//                   <a
//                     href="#"
//                     className={activeTab === 'sales' ? 'active' : ''}
//                     onClick={() => handleTabClick('sales')}
//                     aria-label="Sales Tab"
//                   >
//                     Sales
//                   </a>
//                 </li>
//               </ul>
//             </div>
//             <a href="user-purchase.html" className="view-link">
//               View All<i className="feather-arrow-right"></i>
//             </a>
//           </div>
//           <div className="card-body p-0">
//             <div className="tab-content">
//               <div className={`tab-pane ${activeTab === 'purchase' ? 'show active' : ''}`} id="purchase">
//                 <div className="table-responsive card-table">
//                   <table className="table">
//                     <thead>
//                       <tr>
//                         <th>Gig</th>
//                         <th>Status</th>
//                         <th>Price</th>
//                       </tr>
//                     </thead>
//                     <tbody>
//                       {/* Example row */}
//                       <tr>
//                         <td>
//                           <div className="d-flex align-items-center">
//                             <div className="table-img">
//                               <a href="javascript:void(0);">
//                                 <img src={gigs07} className="img-fluid" alt="img" loading="lazy" />
//                               </a>
//                             </div>
//                             <div className="recent-payment">
//                               <h6>
//                                 <a href="javascript:void(0);">Managing and optimizing paid advertising...</a>
//                               </h6>
//                               <ul>
//                                 <li>Delivery Date: 11/01/2024</li>
//                                 <li>Seller: <span className="text-dark">Jones</span></li>
//                               </ul>
//                             </div>
//                           </div>
//                         </td>
//                         <td className="text-end">
//                           <span className="badge badge-receive bg-info">New</span>
//                         </td>
//                         <td className="text-end">
//                           <h6 className="mb-0">$1400</h6>
//                         </td>
//                       </tr>
//                       {/* Other rows can follow the same structure */}
//                     </tbody>
//                   </table>
//                 </div>
//               </div>
//               <div className={`tab-pane ${activeTab === 'sales' ? 'show active' : ''}`} id="sales">
//                 <div className="table-responsive card-table">
//                   <table className="table">
//                     <thead>
//                       <tr>
//                         <th>Gig</th>
//                         <th>Status</th>
//                         <th>Price</th>
//                       </tr>
//                     </thead>
//                     <tbody>
//                       {/* Example row */}
//                       <tr>
//                         <td>
//                           <div className="d-flex align-items-center">
//                             <div className="table-img">
//                               <a href="javascript:void(0);">
//                                 <img src={gigs01} className="img-fluid" alt="img" loading="lazy" />
//                               </a>
//                             </div>
//                             <div className="recent-payment">
//                               <h6>
//                                 <a href="javascript:void(0);">I will do integrating AR elements into...</a>
//                               </h6>
//                               <ul>
//                                 <li>Date: 07/01/2024</li>
//                                 <li>Buyer: <span className="text-dark">Robert</span></li>
//                               </ul>
//                             </div>
//                           </div>
//                         </td>
//                         <td className="text-end">
//                           <span className="badge badge-receive bg-success">Completed</span>
//                         </td>
//                         <td className="text-end">
//                           <h6 className="mb-0">$1400</h6>
//                         </td>
//                       </tr>
//                       {/* Other rows can follow the same structure */}
//                     </tbody>
//                   </table>
//                 </div>
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>
//       {/* /Recent Payments */}
//     </div>
//   );
// };

// export default PageContent;
