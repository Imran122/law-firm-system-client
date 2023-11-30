import React from "react";
import { Link } from "react-router-dom";
import "./HomeBanner.css";

const PublicHomeBannerComponent = () => {
  return (
    <header className="container-fluid">
        <div className="row legal-banner">
          
          <div className="col col-12 col-lg-6">
            <div className="banner-content-left-col d-flex align-items-center ">
                <div className="wrapper">
                  <h1 className="d-none d-xl-block slide-in-left">
                    Find and read the best legal book easily
                  </h1>
                  <h4>Law & Legal</h4>
                  <p>Lorem ipsum dolor sit lorem ipsum dolor sitlorem ipsum dolor sit. Lorem ipsum dolor sit lorem ipsum dolor sitlorem ipsum dolor sit. Lorem ipsum dolor sit lorem ipsum dolor sitlorem ipsum dolor sit.</p>
                  <Link to={'/'}>
                    Learn more
                  </Link>
                </div>
            </div>
          </div>

          <div className="col col-12 col-lg-6 legal-bg">

          </div>
        </div>
    </header>
  );
};

export default PublicHomeBannerComponent;