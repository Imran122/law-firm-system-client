import React from "react";
import { Route, Routes } from "react-router-dom";
import SuperAdminSubAreaByContributorsComponent from "./SuperAdminSubAreaByContributorsComponent";
import SuperAdminSubAreaByYouComponent from "./SuperAdminSubAreaByYouComponent";
import SuperAdminSubAreaEditComponent from "./SuperAdminSubAreaEditComponent";

const SuperAdminAllSubAreaComponent = () => {
  return (
    <>
      <div className="row g-0">
        <div className="col col-12 col-lg-12">
          <div className="not-dashboard-home-left-col">
            <Routes>
              <Route index element={<SuperAdminSubAreaByYouComponent />} />
              <Route
                path="by-contributors"
                element={<SuperAdminSubAreaByContributorsComponent />}
              />
              <Route
                path="edit"
                element={<SuperAdminSubAreaEditComponent />}
              />
            </Routes>
          </div>
        </div>

        <div className="col col-12 col-lg-4"></div>
      </div>
    </>
  );
};

export default SuperAdminAllSubAreaComponent;
