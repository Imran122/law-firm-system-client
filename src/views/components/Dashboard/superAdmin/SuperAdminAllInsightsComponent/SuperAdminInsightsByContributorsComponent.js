import { React, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import SuperAdminInsightsContributorsListsComponent from "./SuperAdminInsightsContributorsListsComponent";
const SuperAdminInsightsByContributorsComponent = () => {

  return (
    <>
      <div className="row g-0">
        <div className="col col-12">
          <div className="users-list-div mt-3">
            {/* booking request card */}
              <div className="users-button">
                <Link to={"/dashboard/all-insights/"}>
                    INSIGHTS BY YOU
                </Link>

                <Link to={"/dashboard/all-insights/by-contributors"} className="active">
                  INSIGHTS BY CONTRIBUTORS
                </Link>
                <SuperAdminInsightsContributorsListsComponent/>
              </div>
            </div>
        </div>
      </div>
    </>
  );
};

export default SuperAdminInsightsByContributorsComponent;
