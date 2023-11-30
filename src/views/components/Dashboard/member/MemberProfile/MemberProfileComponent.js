import React from "react";
import { Route, Routes } from "react-router-dom";
import EditPasswordComponent from "./ProfileComponent/EditPasswordComponent";
import EditProfileComponent from "./ProfileComponent/EditProfileComponent";
import ProfileComponent from "./ProfileComponent/ProfileComponent";

const MemberProfileComponent = () => {
  return (
    <>
      
      <div className="row g-0">
        <div className="col col-12 col-lg-10">
            <div className="not-dashboard-home-left-col">            
                <Routes>
                    <Route index element={<ProfileComponent />} />
                    <Route path="edit-profile" element={<EditProfileComponent />} />
                    <Route path="edit-password" element={<EditPasswordComponent />} />
                </Routes>
            </div>
        </div>

        <div className="col col-12 col-lg-2">
          
        </div>
      </div>
    </>
  );
};

export default MemberProfileComponent;
