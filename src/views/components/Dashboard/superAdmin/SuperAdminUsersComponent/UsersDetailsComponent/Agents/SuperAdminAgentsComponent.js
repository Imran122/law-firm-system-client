import { React, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import "../../Users.css";
import SuperAdminUsersPurchaseComponent from "../SuperAdminUsersPurchaseComponent";
import SuperAdminAgentsListsComponent from "./SuperAdminAgentsListsComponent";

const SuperAdminAgentsComponent = () => {

  return (
    <>
      <SuperAdminUsersPurchaseComponent/>
      <div className="row g-0">
        <div className="col col-12">
          <div className="users-list-div mt-3">
            {/* booking request card */}
              <div className="users-button">
                <Link to={"/dashboard/users"}>
                    NORMAL USERS
                </Link>

                <Link to={"/dashboard/users/agents"} className="active">
                    AGENTS
                </Link>

                <Link to={"/dashboard/users/editor-admin"}>
                    EDITORS/ ADMIN
                </Link>
                <Link to={"/dashboard/users/super-admin"}>
                    SUPER ADMIN
                </Link>
                
                <SuperAdminAgentsListsComponent/>
              </div>
            </div>
        </div>
      </div>
    </>
  );
};

export default SuperAdminAgentsComponent;
