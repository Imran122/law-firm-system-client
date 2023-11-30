import React from "react";
import { Route, Routes } from "react-router-dom";
import SuperAdminBooksByContributorsComponent from "./SuperAdminBooksByContributorsComponent";
import SuperAdminBooksByYouComponent from "./SuperAdminBooksByYouComponent";
const SuperAdminAllBooksComponent = () => {
  return (
    <>
      
      <div className="row g-0">
        <div className="col col-12 col-lg-12">
            <div className="not-dashboard-home-left-col">            
                <Routes>
                  <Route
                    index
                    element={<SuperAdminBooksByYouComponent/>}
                  />
                  <Route
                    path="by-contributors"
                    element={<SuperAdminBooksByContributorsComponent />}
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

export default SuperAdminAllBooksComponent;
