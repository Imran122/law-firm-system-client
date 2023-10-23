import { React, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import SuperAdminArticlesContributorsListsComponent from "./SuperAdminArticlesContributorsListsComponent";
const SuperAdminArticlesByContributorsComponent = () => {

  return (
    <>
      <div className="row g-0">
        <div className="col col-12">
          <div className="users-list-div mt-3">
            {/* booking request card */}
              <div className="users-button">
                <Link to={"/dashboard/all-articles/"}>
                    ARTICLES BY YOU
                </Link>

                <Link to={"/dashboard/all-articles/by-contributors"} className="active">
                    ARTICLES BY CONTRIBUTORS
                </Link>
                <SuperAdminArticlesContributorsListsComponent/>
              </div>
            </div>
        </div>
      </div>
    </>
  );
};

export default SuperAdminArticlesByContributorsComponent;
