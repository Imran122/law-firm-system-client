import { React, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import SuperAdminLawsYouListsComponent from "./SuperAdminLawsYouListsComponent";
const SuperAdminLawsByYouComponent = () => {

  return (
    <>
      <div className="row g-0">
        <div className="col col-12">
          <div className="users-list-div mt-3">
            {/* booking request card */}
              <div className="users-button">
                <Link to={"/dashboard/all-laws"} className="active">
                  LAWs BY YOU
                </Link>

                <Link to={"/dashboard/all-laws/by-contributors"}>
                  LAWs BY CONTRIBUTORS
                </Link>
                <SuperAdminLawsYouListsComponent/>
              </div>
            </div>
        </div>
      </div>
    </>
  );
};

export default SuperAdminLawsByYouComponent;
