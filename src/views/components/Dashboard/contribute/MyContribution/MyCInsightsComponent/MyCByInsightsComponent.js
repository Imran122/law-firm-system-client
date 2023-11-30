import { React, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import MyCInsightListsComponent from "./MyCInsightListsComponent";
const MyCByInsightsComponent = () => {

  return (
    <>
      <div className="row g-0">
        <div className="col col-12">
          <div className="users-list-div mt-3">
            {/* booking request card */}
              <div className="users-button">
                <Link to={"/dashboard/my-contribution/"}>
                  Books
                </Link>

                <Link to={"/dashboard/my-contribution/articles"}>
                  Articles
                </Link>

                <Link to={"/dashboard/my-contribution/insights"} className="active">
                  Insights
                </Link>

                <Link to={"/dashboard/my-contribution/cases"}>
                  Cases
                </Link>

                <Link to={"/dashboard/my-contribution/laws"}>
                  Laws
                </Link>

                <Link to={"/dashboard/my-contribution/sub-area"}>
                  Subject Area
                </Link>

                <MyCInsightListsComponent/>

              </div>
            </div>
        </div>
      </div>
    </>
  );
};

export default MyCByInsightsComponent;
