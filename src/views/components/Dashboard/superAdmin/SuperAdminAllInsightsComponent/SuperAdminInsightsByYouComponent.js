import { React, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import SuperAdminInsightsYouListsComponent from "./SuperAdminInsightsYouListsComponent";
const SuperAdminInsightsByYouComponent = () => {

  return (
    <>
      <div className="row g-0">
        <div className="col col-12">
          <div className="users-list-div mt-3">
            {/* booking request card */}
              <div className="users-button">
                <Link to={"/dashboard/all-insights"} className="active">
                    INSIGHTS BY YOU
                </Link>

                <Link to={"/dashboard/all-insights/by-contributors"}>
                  INSIGHTS BY CONTRIBUTORS
                </Link>
                <SuperAdminInsightsYouListsComponent/>
              </div>
            </div>
        </div>
      </div>
    </>
  );
};

export default SuperAdminInsightsByYouComponent;
