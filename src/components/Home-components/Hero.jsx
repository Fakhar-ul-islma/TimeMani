
import React, { useEffect } from "react";

// ✅ CSS Files
import "../../../assets/css/style.css";
import "../../../assets/css/bootstrap.min.css";
import "../../../assets/css/owl.carousel.min.css";
import "../../../assets/css/fontawesome.min.css"
import "../../../assets/css/aos.css"; // AOS CSS

// ✅ AOS Animation Library
import AOS from "aos";

// ✅ Images
import bannerBg1 from "../../../assets/images/banner-bg-01.png";
import bannerBg2 from "../../../assets/images/banner-bg-02.png";
import bannerBg3 from "../../../assets/images/banner-bg-03.png";
import bannerBg4 from "../../../assets/images/banner-bg-04.png";
import mapPinHeart from "../../../assets/images/map-pin-heart.svg";
import bannerImg from "../../../assets/images/banner-img.png";
import bannerSmallBg1 from "../../../assets/images/banner-small-bg-01.svg";
import bannerSmallBg2 from "../../../assets/images/banner-small-bg-02.png";

// ✅ React Select (if you want to use it)
import Select from "react-select";

// ✅ Category options for react-select
const categoryOptions = [
  { value: "digital-marketing", label: "Digital Marketing" },
  { value: "writing", label: "Writing" },
  { value: "social-media", label: "Social Media" },
];

const Hero = () => {
  // ✅ Initialize AOS
  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);

  return (
    <section className="hero-section">
      <div className="banner-bg-imgs">
        <img src={bannerBg1} className="banner-bg-one" alt="img" />
        <img src={bannerBg2} className="banner-bg-two" alt="img" />
        <img src={bannerBg3} className="banner-bg-three" alt="img" />
        <img src={bannerBg4} className="banner-bg-four" alt="img" />
      </div>
      <div className="container">
        <div className="row">
          <div className="col-lg-8">
            <div className="banner-content aos" data-aos="fade-up">
              <div className="banner-head">
                <h1>Discover Top Talent & Sell Your Skills by the Hour.</h1>
                <p>
                  Thousands are using Time Bank to monetize their skills and
                  bring ideas to life—one hour at a time.
                </p>
              </div>
              <div className="banner-form">
                {/* ✅ No action, handled via JS or React Router */}
                <form>
                  <div className="banner-search-list">
                    <div className="input-block">
                      <label>Category</label>
                      <Select options={categoryOptions} className="react-select-container" />
                    </div>
                    <div className="input-block">
                      <label>Location</label>
                      <div className="input-locaion">
                        <input
                          type="text"
                          className="form-control"
                          placeholder="Miami, USA"
                        />
                        <img src={mapPinHeart} alt="Icon" />
                      </div>
                    </div>
                    <div className="input-block border-0">
                      <label>Keyword</label>
                      <input
                        type="text"
                        className="form-control"
                        placeholder="Need Graphic Designer"
                      />
                    </div>
                  </div>
                  <div className="input-block-btn">
                    <button className="btn btn-primary" type="submit">
                      <i className="fas fa-magnifying-glass"></i> Search
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>

          <div className="col-lg-4">
            <div className="banner-img">
              <div className="banner-img-right">
                <img src={bannerImg} className="img-fluid" alt="img" />
              </div>
              <img src={bannerSmallBg1} className="banner-small-bg-one" alt="img" />
              <img src={bannerSmallBg2} className="banner-small-bg-two" alt="img" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
