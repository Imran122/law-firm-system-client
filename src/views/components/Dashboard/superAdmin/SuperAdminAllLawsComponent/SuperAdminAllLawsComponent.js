import React, { useEffect, useState } from "react";
import { Route, Routes } from "react-router-dom";

import SuperAdminLawsByContributorsComponent from "./SuperAdminLawsByContributorsComponent";
import SuperAdminLawsByYouComponent from "./SuperAdminLawsByYouComponent";
const SuperAdminAllLawsComponent = () => {
  return (
    <>
      <div className="row g-0">
        <div className="col col-12 col-lg-12">
          <div className="not-dashboard-home-left-col">
            <Routes>
              <Route index element={<SuperAdminLawsByYouComponent />} />
              <Route
                path="by-contributors"
                element={<SuperAdminLawsByContributorsComponent />}
              />
            </Routes>
          </div>
        </div>

        <div className="col col-12 col-lg-4"></div>
      </div>
    </>
  );
};

export default SuperAdminAllLawsComponent;
