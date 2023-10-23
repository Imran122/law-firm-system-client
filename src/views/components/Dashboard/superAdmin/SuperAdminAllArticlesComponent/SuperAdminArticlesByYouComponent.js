import { React, useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";

import SuperAdminArticlesYouListsComponent from "./SuperAdminArticlesYouListsComponent";
const SuperAdminArticlesByYouComponent = () => {
  return (
    <>
      <div className="row g-0">
        <div className="col col-12">
          <div className="users-list-div mt-3">
            {/* booking request card */}
            <div className="users-button">
              <Link to={"/dashboard/all-articles"} className="active">
                ARTICLES BY YOU
              </Link>

              <Link to={"/dashboard/all-articles/by-contributors"}>
                ARTICLES BY CONTRIBUTORS
              </Link>
              <SuperAdminArticlesYouListsComponent />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default SuperAdminArticlesByYouComponent;
