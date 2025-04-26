
import React from "react";

import "../../../assets/css/style.css";
import "../../../assets/css/bootstrap.min.css";
import "../../../assets/css/owl.carousel.min.css";

import user05 from "../../../assets/images/user-05.jpg";
import user01 from "../../../assets/images/user-01.jpg";
import user02 from "../../../assets/images/user-02.jpg";
import user03 from "../../../assets/images/user-03.jpg";
import user04 from "../../../assets/images/user-04.jpg";
import user06 from "../../../assets/images/user-06.jpg";


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


import calendarIcon from "../../../assets/images/calendar-icon.svg";


import uploadIcon from "../../../assets/images/upload-icon.svg";

import userHeart from "../../../assets/images/user-heart.svg";


import gigs02 from "../../../assets/images/gigs-02.jpg";
import gigs03 from "../../../assets/images/gigs-03.jpg";
import gigs04 from "../../../assets/images/gigs-04.jpg";
import gigs05 from "../../../assets/images/gigs-05.jpg";
import gigs09 from "../../../assets/images/gigs-09.jpg";
import gigs13 from "../../../assets/images/gigs-13.jpg";




const PageContent = () => {
    return (
		<div className="page-content">
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
									<a href="user-profile.html" className="user-edit"><i className="fa-solid fa-user-pen"></i></a>
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
										<a href="user-files.html" className="active">
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

					{/* <!--User Files --> */}
					<div className="col-xl-9 col-lg-8">
						<div className="dashboard-header">
							<div className="main-title">
								<h3>Uploaded Files</h3>
								<div id="tableinfo"></div>
							</div>
							<div className="head-info">
								<p>Total Files <span className="text-primary">(17)</span></p>
							</div>
						</div>
						<div className="table-filter">
							<ul className="filter-item">
								<li>
									<p>Filter</p>
								</li>
								<li>
									<div className="form-sort form-wrap">
										<span className="form-icon">
											<img src= {calendarIcon} alt="icon" />
										</span>
										<input type="text" className="form-control datetimepicker" placeholder="From Date" />
									</div>
								</li>
								<li>
									<div className="form-sort form-wrap">
										<span className="form-icon">
											<img src= {calendarIcon} alt="icon" />
										</span>
										<input type="text" className="form-control datetimepicker" placeholder="To Date" />
									</div>
								</li>
								<li>
									<div className="form-sort form-wrap">
										<span className="form-icon">
											<img src= {uploadIcon} alt="icon" />
										</span>
										<select className="select">
											<option>Uploaded for</option>
											<option>I will do designing..</option>
											<option>Develop opena..</option>
											<option>Professional lifestyle</option>
										</select>
									</div>
								</li>
								<li>
									<div className="form-sort form-wrap">
										<span className="form-icon">
											<img src= {userHeart} alt="icon" />
										</span>
										<select className="select">
											<option>Uploaded By</option>
											<option>Jones</option>
											<option>Andrea</option>
											<option>Martin</option>
										</select>
									</div>
								</li>
							</ul>
							<div id="tablefilter"></div>
						</div>
						<div className="table-responsive custom-table">
							<table className="table table-stripe datatable">
								<thead className="thead-light">
									<tr>
										<th>ID</th>
										<th>Uploaded For</th>
										<th>Uploaded On</th>
										<th>Uploaded By</th>
										<th>File Type</th>
										<th>Action</th>
									</tr>
								</thead>
								<tbody>
									<tr>
										<td>#120</td>
										<td>
											<h2 className="table-avatar d-flex align-items-center">
												<a href="javascript:void(0);" className="avatar">
													<img src= {gigs09} className="rounded" alt="User Image" />
												</a>
												<a href="javascript:void(0);" className="text-dark">I will do designing and executing targeted email campaigns</a>
											</h2>
										</td>
										<td>22 May 2023</td>
										<td>
											<h2 className="table-avatar d-flex align-items-center">
												<a href="user-profile.html" className="avatar">
													<img src= {user01} alt="User Image" />
												</a>
												<a href="user-profile.html">Jones</a>
											</h2>
										</td>
										<td>Jpg</td>
										<td>
											<div className="table-action">
												<a href="javascript:void(0);" data-bs-toggle="modal" data-bs-target="#file_view"><i className="feather-eye"></i></a>
												<a href="javascript:void(0);"><i className="feather-download"></i></a>
											</div>
										</td>
									</tr>
									<tr>
										<td>#119</td>
										<td>
											<h2 className="table-avatar d-flex align-items-center">
												<a href="javascript:void(0);" className="avatar">
													<img src= {user03} className="rounded" alt="User Image" />
												</a>
												<a href="javascript:void(0);" className="text-dark">I will develop openai, dalle, chat gpt app for mobile</a>
											</h2>
										</td>
										<td>20 May 2023</td>
										<td>
											<h2 className="table-avatar d-flex align-items-center">
												<a href="user-profile.html" className="avatar">
													<img src= {user02} alt="User Image" />
												</a>
												<a href="user-profile.html">Adrian</a>
											</h2>
										</td>
										<td>Mp4</td>
										<td>
											<div className="table-action">
												<a href="javascript:void(0);" data-bs-toggle="modal" data-bs-target="#file_view"><i className="feather-eye"></i></a>
												<a href="javascript:void(0);"><i className="feather-download"></i></a>
											</div>
										</td>
									</tr>
									<tr>
										<td>#118</td>
										<td>
											<h2 className="table-avatar d-flex align-items-center">
												<a href="javascript:void(0);" className="avatar">
													<img src= {gigs02} className="rounded" alt="User Image" />
												</a>
												<a href="javascript:void(0);" className="text-dark">I will do professional lifestyle and product photography</a>
											</h2>
										</td>
										<td>15 May 2023</td>
										<td>
											<h2 className="table-avatar d-flex align-items-center">
												<a href="user-profile.html" className="avatar">
													<img src= {user02} alt="User Image" />
												</a>
												<a href="user-profile.html">Andrea</a>
											</h2>
										</td>
										<td>Png</td>
										<td>
											<div className="table-action">
												<a href="javascript:void(0);" data-bs-toggle="modal" data-bs-target="#file_view"><i className="feather-eye"></i></a>
												<a href="javascript:void(0);"><i className="feather-download"></i></a>
											</div>
										</td>
									</tr>
									<tr>
										<td>#117</td>
										<td>
											<h2 className="table-avatar d-flex align-items-center">
												<a href="javascript:void(0);" className="avatar">
													<img src= {gigs04} className="rounded" alt="User Image" />
												</a>
												<a href="javascript:void(0);" className="text-dark">Embedded Android & AOSP customizations</a>
											</h2>
										</td>
										<td>27 Apr 2023</td>
										<td>
											<h2 className="table-avatar d-flex align-items-center">
												<a href="user-profile.html" className="avatar">
													<img src= {user04} alt="User Image" />
												</a>
												<a href="user-profile.html">Martin</a>
											</h2>
										</td>
										<td>Png</td>
										<td>
											<div className="table-action">
												<a href="javascript:void(0);" data-bs-toggle="modal" data-bs-target="#file_view"><i className="feather-eye"></i></a>
												<a href="javascript:void(0);"><i className="feather-download"></i></a>
											</div>
										</td>
									</tr>
									<tr>
										<td>#116</td>
										<td>
											<h2 className="table-avatar d-flex align-items-center">
												<a href="javascript:void(0);" className="avatar">
													<img src= {gigs13} className="rounded" alt="User Image" />
												</a>
												<a href="javascript:void(0);" className="text-dark">I will do creating and promoting video content to engage audiences</a>
											</h2>
										</td>
										<td>19 Apr 2023</td>
										<td>
											<h2 className="table-avatar d-flex align-items-center">
												<a href="user-profile.html" className="avatar">
													<img src= {user05} alt="User Image" />
												</a>
												<a href="user-profile.html">James</a>
											</h2>
										</td>
										<td>Png</td>
										<td>
											<div className="table-action">
												<a href="javascript:void(0);" data-bs-toggle="modal" data-bs-target="#file_view"><i className="feather-eye"></i></a>
												<a href="javascript:void(0);"><i className="feather-download"></i></a>
											</div>
										</td>
									</tr>
									<tr>
										<td>#115</td>
										<td>
											<h2 className="table-avatar d-flex align-items-center">
												<a href="javascript:void(0);" className="avatar">
													<img src= {gigs05} className="rounded" alt="User Image" />
												</a>
												<a href="javascript:void(0);" className="text-dark">I will do implementing chatbots on websites or messaging apps</a>
											</h2>
										</td>
										<td>03 Apr 2023</td>
										<td>
											<h2 className="table-avatar d-flex align-items-center">
												<a href="user-profile.html" className="avatar">
													<img src= {user06} alt="User Image" />
												</a>
												<a href="user-profile.html">Hendy</a>
											</h2>
										</td>
										<td>MP4</td>
										<td>
											<div className="table-action">
												<a href="javascript:void(0);" data-bs-toggle="modal" data-bs-target="#file_view"><i className="feather-eye"></i></a>
												<a href="javascript:void(0);"><i className="feather-download"></i></a>
											</div>
										</td>
									</tr>
									<tr>
										<td>#120</td>
										<td>
											<h2 className="table-avatar d-flex align-items-center">
												<a href="javascript:void(0);" className="avatar">
													<img src= {gigs03} className="rounded" alt="User Image" />
												</a>
												<a href="javascript:void(0);" className="text-dark">I will develop openai, dalle, chat gpt app for mobile</a>
											</h2>
										</td>
										<td>20 May 2023</td>
										<td>
											<h2 className="table-avatar d-flex align-items-center">
												<a href="user-profile.html" className="avatar">
													<img src= {user02} alt="User Image" />
												</a>
												<a href="user-profile.html">Adrian</a>
											</h2>
										</td>
										<td>Mp4</td>
										<td>
											<div className="table-action">
												<a href="javascript:void(0);" data-bs-toggle="modal" data-bs-target="#file_view"><i className="feather-eye"></i></a>
												<a href="javascript:void(0);"><i className="feather-download"></i></a>
											</div>
										</td>
									</tr>
									<tr>
										<td>#121</td>
										<td>
											<h2 className="table-avatar d-flex align-items-center">
												<a href="javascript:void(0);" className="avatar">
													<img src= {gigs02} className="rounded" alt="User Image" />
												</a>
												<a href="javascript:void(0);" className="text-dark">I will do professional lifestyle and product photography</a>
											</h2>
										</td>
										<td>15 May 2023</td>
										<td>
											<h2 className="table-avatar d-flex align-items-center">
												<a href="user-profile.html" className="avatar">
													<img src= {user03} alt="User Image" />
												</a>
												<a href="user-profile.html">Andrea</a>
											</h2>
										</td>
										<td>Png</td>
										<td>
											<div className="table-action">
												<a href="javascript:void(0);" data-bs-toggle="modal" data-bs-target="#file_view"><i className="feather-eye"></i></a>
												<a href="javascript:void(0);"><i className="feather-download"></i></a>
											</div>
										</td>
									</tr>
									<tr>
										<td>#122</td>
										<td>
											<h2 className="table-avatar d-flex align-items-center">
												<a href="javascript:void(0);" className="avatar">
													<img src= {gigs04} className="rounded" alt="User Image" />
												</a>
												<a href="javascript:void(0);" className="text-dark">Embedded Android & AOSP customizations</a>
											</h2>
										</td>
										<td>27 Apr 2023</td>
										<td>
											<h2 className="table-avatar d-flex align-items-center">
												<a href="user-profile.html" className="avatar">
													<img src= {user04} alt="User Image" />
												</a>
												<a href="user-profile.html">Martin</a>
											</h2>
										</td>
										<td>Png</td>
										<td>
											<div className="table-action">
												<a href="javascript:void(0);" data-bs-toggle="modal" data-bs-target="#file_view"><i className="feather-eye"></i></a>
												<a href="javascript:void(0);"><i className="feather-download"></i></a>
											</div>
										</td>
									</tr>
									<tr>
										<td>#123</td>
										<td>
											<h2 className="table-avatar d-flex align-items-center">
												<a href="javascript:void(0);" className="avatar">
													<img src= {gigs13} className="rounded" alt="User Image" />
												</a>
												<a href="javascript:void(0);" className="text-dark">I will do creating and promoting video content to engage audiences</a>
											</h2>
										</td>
										<td>19 Apr 2023</td>
										<td>
											<h2 className="table-avatar d-flex align-items-center">
												<a href="user-profile.html" className="avatar">
													<img src= {user05} alt="User Image" />
												</a>
												<a href="user-profile.html">James</a>
											</h2>
										</td>
										<td>Png</td>
										<td>
											<div className="table-action">
												<a href="javascript:void(0);" data-bs-toggle="modal" data-bs-target="#file_view"><i className="feather-eye"></i></a>
												<a href="javascript:void(0);"><i className="feather-download"></i></a>
											</div>
										</td>
									</tr>
									<tr>
										<td>#124</td>
										<td>
											<h2 className="table-avatar d-flex align-items-center">
												<a href="javascript:void(0);" className="avatar">
													<img src= {gigs05} className="rounded" alt="User Image" />
												</a>
												<a href="javascript:void(0);" className="text-dark">I will do implementing chatbots on websites or messaging apps</a>
											</h2>
										</td>
										<td>03 Apr 2023</td>
										<td>
											<h2 className="table-avatar d-flex align-items-center">
												<a href="user-profile.html" className="avatar">
													<img src= {user06} alt="User Image" />
												</a>
												<a href="user-profile.html">Hendy</a>
											</h2>
										</td>
										<td>MP4</td>
										<td>
											<div className="table-action">
												<a href="javascript:void(0);" data-bs-toggle="modal" data-bs-target="#file_view"><i className="feather-eye"></i></a>
												<a href="javascript:void(0);"><i className="feather-download"></i></a>
											</div>
										</td>
									</tr>
								</tbody>
							</table>
						</div>
						<div className="table-footer">
							<div id="tablepage"></div>
						</div>
					</div>
					{/* <!-- /User Files --> */}

				</div>
			</div>
		</div>
    );
};

export default PageContent;
