import React from "react";
import SuperAdminCustomPackageBillingComponent from "./SuperAdminCustomPackageBillingComponent";
import SuperAdminCustomPackageFormComponent from "./SuperAdminCustomPackageFormComponent";
import "./CustomPackages.css";

const SuperAdminCustomPackageComponent = () => {
  
  return (
    <>
      <div className="container">
            <div className="row flex-xl-row-reverse mt-4">

                <div className="col col-12 col-lg-3">
                    <SuperAdminCustomPackageBillingComponent/>
                </div>

                <div className="col col-12 col-lg-9">
                    <SuperAdminCustomPackageFormComponent/>
                </div>

            </div>
        </div>
    </>
  );
};

export default SuperAdminCustomPackageComponent;
