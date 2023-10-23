import { React, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import SuperAdminBooksContributorsListsComponent from "./SuperAdminBooksContributorsListsComponent";
const SuperAdminBooksByContributorsComponent = () => {

  return (
    <>
      <div className="row g-0">
        <div className="col col-12">
          <div className="users-list-div mt-3">
            {/* booking request card */}
              <div className="users-button">
                <Link to={"/dashboard/all-books/"}>
                  BOOKS BY YOU
                </Link>

                <Link to={"/dashboard/all-books/by-contributors"} className="active">
                  BOOKS BY CONTRIBUTORS
                </Link>
                <SuperAdminBooksContributorsListsComponent/>
              </div>
            </div>
        </div>
      </div>
    </>
  );
};

export default SuperAdminBooksByContributorsComponent;
