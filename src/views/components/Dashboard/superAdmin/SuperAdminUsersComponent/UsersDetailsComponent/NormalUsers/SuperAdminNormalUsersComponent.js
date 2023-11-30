import { React, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import SuperAdminUsersPurchaseComponent from "../SuperAdminUsersPurchaseComponent";
import SuperAdminNormalUsersListsComponent from "./SuperAdminNormalUsersListsComponent";
import "../../Users.css";

const SuperAdminNormalUsersComponent = () => {

  return (
    <>
      <SuperAdminUsersPurchaseComponent/>
      <div className="row g-0">
        <div className="col col-12">
          <div className="users-list-div mt-3">
            {/* booking request card */}
              <div className="users-button">
                <Link to={"/dashboard/users"} className="active">
                    NORMAL USERS
                </Link>

                <Link to={"/dashboard/users/agents"}>
                    AGENTS
                </Link>

                <Link to={"/dashboard/users/editor-admin"}>
                    EDITORS/ ADMIN
                </Link>
                <Link to={"/dashboard/users/super-admin"}>
                    SUPER ADMIN
                </Link>
                <SuperAdminNormalUsersListsComponent/>
              </div>
            </div>
        </div>
      </div>
    </>
  );
};

export default SuperAdminNormalUsersComponent;
