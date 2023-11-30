import { React, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import SuperAdminSubAreaContributorsListsComponent from "./SuperAdminSubAreaContributorsListsComponent";
const SuperAdminSubAreaByContributorsComponent = () => {

  return (
    <>
      <div className="row g-0">
        <div className="col col-12">
          <div className="users-list-div mt-3">
            {/* booking request card */}
              <div className="users-button">
                <Link to={"/dashboard/all-subarea/"}>
                  SUBAREA BY YOU
                </Link>

                <Link to={"/dashboard/all-subarea/by-contributors"} className="active">
                  SUBAREA BY CONTRIBUTORS
                </Link>
                <SuperAdminSubAreaContributorsListsComponent/>
              </div>
            </div>
        </div>
      </div>
    </>
  );
};

export default SuperAdminSubAreaByContributorsComponent;
