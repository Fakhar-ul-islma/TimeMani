import React from "react";

import "../../../assets/css/style.css";
import "../../../assets/css/bootstrap.min.css";
import "../../../assets/css/owl.carousel.min.css";

import companyLogo01 from "../../../assets/images/company-logo-01.svg";
import companyLogo02 from "../../../assets/images/company-logo-02.svg";
import companyLogo03 from "../../../assets/images/company-logo-03.svg";
import companyLogo04 from "../../../assets/images/company-logo-04.svg";
import companyLogo05 from "../../../assets/images/company-logo-05.svg";
import companyLogo06 from "../../../assets/images/company-logo-06.svg";
import companyLogo07 from "../../../assets/images/company-logo-07.svg";


const Clients = () => {
    return (
        <div className="client-slider-sec">
			<div className="container">
				<div className="row">
					<div className="col-lg-12">
						<div className="section-header aos" data-aos="fade-up">
							<p>Trusted by 300+ Client around globe</p>
						</div>
						<div className="clients-slider owl-carousel">
							<div className="client-logo">
								<img src= {companyLogo01} className="w-auto" alt="img" />
							</div>
							<div className="client-logo">
								<img src={companyLogo02} className="w-auto" alt="img" />
							</div>
							<div className="client-logo">
								<img src={companyLogo03} className="w-auto" alt="img" />
							</div>
							<div className="client-logo">
								<img src={companyLogo04} className="w-auto" alt="img" />
							</div>
							<div className="client-logo">
								<img src={companyLogo05} className="w-auto" alt="img" />
							</div>
							<div className="client-logo">
								<img src={companyLogo06} className="w-auto" alt="img" />
							</div>
							<div className="client-logo">
								<img src={companyLogo07} className="w-auto" alt="img" />
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
    );
};

export default Clients