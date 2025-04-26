
import React from "react";

import "../../../assets/css/style.css";
import "../../../assets/css/bootstrap.min.css";
import "../../../assets/css/owl.carousel.min.css";

import bannerBg03 from "../../../assets/images/banner-bg-03.png";

const Breadcrumb = () => {
  return (
    <div className="breadcrumb-bar breadcrumb-bar-info">
            <div className="breadcrumb-img">
                <div className="breadcrumb-left">
                    <img src= {bannerBg03} alt="img" />
                </div>
            </div>
            <div className="container">
                <div className="row">
                    <div className="col-md-12 col-12">
                        <nav aria-label="breadcrumb" className="page-breadcrumb">
                            <ol className="breadcrumb">
                                <li className="breadcrumb-item">
                                    <a href="index.html">Home</a>
                                </li>
                                <li className="breadcrumb-item" aria-current="page">User Dashboard</li>
                            </ol>
                        </nav>						
                        <h2 className="breadcrumb-title mb-0">
                            User Dashboard
                        </h2>
                    </div>
                </div>
            </div>
        </div>
  );
};

export default Breadcrumb;
