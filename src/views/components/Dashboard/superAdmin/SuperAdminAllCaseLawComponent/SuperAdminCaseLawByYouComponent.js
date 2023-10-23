import { React, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import SuperAdminCaseLawYouListsComponent from "./SuperAdminCaseLawYouListsComponent";
const SuperAdminCaseLawByYouComponent = () => {

  return (
    <>
      <div className="row g-0">
        <div className="col col-12">
          <div className="users-list-div mt-3">
            {/* booking request card */}
              <div className="users-button">
                <Link to={"/dashboard/all-case-law"} className="active">
                  CASE LAW BY YOU
                </Link>

                <Link to={"/dashboard/all-case-law/by-contributors"}>
                  CASE LAW BY CONTRIBUTORS
                </Link>
                <SuperAdminCaseLawYouListsComponent/>
              </div>
            </div>
        </div>
      </div>
    </>
  );
};

export default SuperAdminCaseLawByYouComponent;
