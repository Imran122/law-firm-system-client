import React from "react";
import { Link, useNavigate } from "react-router-dom";
import SuperAdminPackageBillingComponent from "./SuperAdminPackageBillingComponent";
import SuperAdminAddPackageFormComponent from "./SuperAdminAddPackageFormComponent";
import "../Packages.css";

const SuperAdminAddPackageComponent = () => {
  
  return (
    <>
      <div className="container">
            <div className="row flex-xl-row-reverse mt-4">

                <div className="col col-12 col-lg-3">
                    <SuperAdminPackageBillingComponent/>
                </div>

                <div className="col col-12 col-lg-9">
                    <SuperAdminAddPackageFormComponent/>
                </div>

            </div>
        </div>
    </>
  );
};

export default SuperAdminAddPackageComponent;
