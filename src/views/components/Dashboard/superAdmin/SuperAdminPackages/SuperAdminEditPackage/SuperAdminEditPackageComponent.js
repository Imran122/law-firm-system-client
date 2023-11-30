import React from "react";
import { Link, useNavigate } from "react-router-dom";
import SuperAdminPackageEditBillingComponent from "./SuperAdminPackageEditBillingComponent";
import SuperAdminEditPackageFormComponent from "./SuperAdminEditPackageFormComponent";
import "../Packages.css";

const SuperAdminEditPackageComponent = () => {
  
  return (
    <>
      <div className="container">
            <div className="row flex-xl-row-reverse mt-4">

                <div className="col col-12 col-lg-3">
                    <SuperAdminPackageEditBillingComponent/>
                </div>

                <div className="col col-12 col-lg-9">
                    <SuperAdminEditPackageFormComponent/>
                </div>

            </div>
        </div>
    </>
  );
};

export default SuperAdminEditPackageComponent;
