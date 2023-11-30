import { React, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import "../../Users.css";
import SuperAdminUsersPurchaseComponent from "../SuperAdminUsersPurchaseComponent";
import SuperAdminEditorAdminListsComponent from "./SuperAdminEditorAdminListsComponent";

const SuperAdminEditorAdminComponent = () => {

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

              <Link to={"/dashboard/users/agents"}>
                  AGENTS
              </Link>

              <Link to={"/dashboard/users/editor-admin"} className="active">
                  EDITORS/ ADMIN
              </Link>
              
              <Link to={"/dashboard/users/super-admin"}>
                    SUPER ADMIN
              </Link>

              <SuperAdminEditorAdminListsComponent/>
            </div>
          </div>
      </div>
    </div>
    </>
    
  );
};

export default SuperAdminEditorAdminComponent;
