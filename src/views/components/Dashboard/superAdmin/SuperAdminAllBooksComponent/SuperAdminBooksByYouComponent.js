import { React, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import SuperAdminBooksYouListsComponent from "./SuperAdminBooksYouListsComponent";
const SuperAdminBooksByYouComponent = () => {

  return (
    <>
      <div className="row g-0">
        <div className="col col-12">
          <div className="users-list-div mt-3">
            {/* booking request card */}
              <div className="users-button">
                <Link to={"/dashboard/all-books"} className="active">
                    BOOKS BY YOU
                </Link>

                <Link to={"/dashboard/all-books/by-contributors"}>
                  BOOKS BY CONTRIBUTORS
                </Link>
                <SuperAdminBooksYouListsComponent/>
              </div>
            </div>
        </div>
      </div>
    </>
  );
};

export default SuperAdminBooksByYouComponent;
