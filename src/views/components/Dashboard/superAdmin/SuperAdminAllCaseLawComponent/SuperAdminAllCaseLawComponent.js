import React from "react";
import { Route, Routes } from "react-router-dom";
import SuperAdminCaseLawByContributorsComponent from "./SuperAdminCaseLawByContributorsComponent";
import SuperAdminCaseLawByYouComponent from "./SuperAdminCaseLawByYouComponent";
const SuperAdminAllCaseLawComponent = () => {
  return (
    <>
      
      <div className="row g-0">
        <div className="col col-12 col-lg-12">
            <div className="not-dashboard-home-left-col">            
                <Routes>
                  <Route
                    index
                    element={<SuperAdminCaseLawByYouComponent/>}
                  />
                  <Route
                    path="by-contributors"
                    element={<SuperAdminCaseLawByContributorsComponent />}
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

export default SuperAdminAllCaseLawComponent;
