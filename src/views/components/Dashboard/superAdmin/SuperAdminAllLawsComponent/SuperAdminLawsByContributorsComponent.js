import { React, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import SuperAdminLawsContributorsListsComponent from "./SuperAdminLawsContributorsListsComponent";
const SuperAdminLawsByContributorsComponent = () => {

  return (
    <>
      <div className="row g-0">
        <div className="col col-12">
          <div className="users-list-div mt-3">
            {/* booking request card */}
              <div className="users-button">
                <Link to={"/dashboard/all-laws/"}>
                  LAWs BY YOU
                </Link>

                <Link to={"/dashboard/all-laws/by-contributors"} className="active">
                  LAWs BY CONTRIBUTORS
                </Link>
                <SuperAdminLawsContributorsListsComponent/>
              </div>
            </div>
        </div>
      </div>
    </>
  );
};

export default SuperAdminLawsByContributorsComponent;
