import React from "react";
import { Route, Routes } from "react-router-dom";
import SuperAdminInsightsByContributorsComponent from "./SuperAdminInsightsByContributorsComponent";
import SuperAdminInsightsByYouComponent from "./SuperAdminInsightsByYouComponent";
const SuperAdminAllInsightsComponent = () => {
  return (
    <>
      
      <div className="row g-0">
        <div className="col col-12 col-lg-12">
            <div className="not-dashboard-home-left-col">            
                <Routes>
                  <Route
                    index
                    element={<SuperAdminInsightsByYouComponent/>}
                  />
                  <Route
                    path="by-contributors"
                    element={<SuperAdminInsightsByContributorsComponent />}
                  />
                </Routes>
            </div>
        </div>

        <div className="col col-12 col-lg-4">
          
        </div>
      </div>
    </>
  );
};

export default SuperAdminAllInsightsComponent;
