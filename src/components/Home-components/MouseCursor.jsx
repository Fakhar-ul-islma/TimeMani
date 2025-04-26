import React from "react";

import "../../../assets/css/fontawesome.min.css"
import "../../../assets/css/bootstrap.min.css";
import "../../../assets/css/feather.css";

import arrowBadgeUp from "../../../assets/images/arrow-badge-up.svg";

const MouseCursor = () => {
    return (
        <>
            <div className="mouse-cursor cursor-outer"></div>
            <div className="mouse-cursor cursor-inner"></div>

            {/* Top Scroll */}
            <div className="back-to-top">
                <a className="back-to-top-icon align-items-center justify-content-center d-flex" href="#top">
                    <img src={arrowBadgeUp} alt="img" />
                </a>
            </div>
        </>
    );
};

export default MouseCursor;
