import React from "react";
import { Route, Routes } from "react-router-dom";
import SuperAdminArticlesByContributorsComponent from "./SuperAdminArticlesByContributorsComponent";
import SuperAdminArticlesByYouComponent from "./SuperAdminArticlesByYouComponent";
const SuperAdminAllArticlesComponent = () => {
  return (
    <>
      
      <div className="row g-0">
        <div className="col col-12 col-lg-12">
            <div className="not-dashboard-home-left-col">            
                <Routes>
                  <Route
                    index
                    element={<SuperAdminArticlesByYouComponent/>}
                  />
                  <Route
                    path="by-contributors"
                    element={<SuperAdminArticlesByContributorsComponent />}
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

export default SuperAdminAllArticlesComponent;
