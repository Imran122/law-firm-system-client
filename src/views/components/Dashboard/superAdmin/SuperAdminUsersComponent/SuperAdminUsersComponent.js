import React from "react";
import { Route, Routes } from "react-router-dom";
import SuperAdminNormalUsersComponent from "./UsersDetailsComponent/NormalUsers/SuperAdminNormalUsersComponent";
import SuperAdminAgentsComponent from "./UsersDetailsComponent/Agents/SuperAdminAgentsComponent";
import SuperAdminEditorAdminComponent from "./UsersDetailsComponent/EditorsAdmin/SuperAdminEditorAdminComponent";
import SuperAdminNormalUsersSuspendComponent from "./UsersDetailsComponent/NormalUsers/SuperAdminNormalUsersSuspendComponent";
import SuperAdminEditorAdminDetailsComponent from "./UsersDetailsComponent/EditorsAdmin/SuperAdminEditorAdminDetailsComponent";
import SuperAdminAgentsDetailsComponent from "./UsersDetailsComponent/Agents/SuperAdminAgentsDetailsComponent";
import SuperAdminNormalUsersDetailsComponent from "./UsersDetailsComponent/NormalUsers/SuperAdminNormalUsersDetailsComponent";
import SuperAdminProfileComponent from "./UsersDetailsComponent/SuperAdminProfileComponent";
import "./Users.css";

const SuperAdminUsersComponent = () => {
  return (
    <>
      
      <div className="row g-0">
        <div className="col col-12 col-lg-10">
            <div className="not-dashboard-home-left-col">            
                
                <Routes>
                  <Route
                    index
                    element={<SuperAdminNormalUsersComponent/>}
                  />
                  <Route
                    path="super-admin/*"
                    element={<SuperAdminProfileComponent />}
                  />
                  <Route
                    path="agents/*"
                    element={<SuperAdminAgentsComponent />}
                  />
                  <Route
                    path="editor-admin/*"
                    element={<SuperAdminEditorAdminComponent />}
                  />
                  <Route
                    path="normal-user-details"
                    element={<SuperAdminNormalUsersDetailsComponent />}
                  />
                  <Route
                    path="normal-user-suspend"
                    element={<SuperAdminNormalUsersSuspendComponent />}
                  />
                  <Route
                    path="editor-admin/editor-admin-details"
                    element={<SuperAdminEditorAdminDetailsComponent />}
                  />
                  <Route
                    path="agents/agent-details"
                    element={<SuperAdminAgentsDetailsComponent />}
                  />
                </Routes>
            </div>
        </div>

        <div className="col col-12 col-lg-4">
          
        </div>
      </div>
    </>
  );
};

export default SuperAdminUsersComponent;
