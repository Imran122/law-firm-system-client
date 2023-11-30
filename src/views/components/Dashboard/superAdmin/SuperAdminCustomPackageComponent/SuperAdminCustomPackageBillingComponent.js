import React from "react";
import { Link, useNavigate } from "react-router-dom";
import useAuth from "../../../../../hooks/useAuth";
import "./CustomPackages.css";

const SuperAdminCustomPackageBillingComponent = () => {
  const {
    user,
    setUser,
    upgrageMembershipPlan,
    setUpgrageMembershipPlan,
    packageDataInfo,
    setPackageDataInfo,
  } = useAuth();

  return (
    <>
      <div className="payment-box p-4 mb-3">
        <h2>Billings</h2>
        <table className="table table-borderless lm-tbl">
          <tbody>
            <tr>
              <td>Total</td>
              <td></td>
              <td>${packageDataInfo.packagesPrice}</td>
            </tr>
            <tr>
              <td colSpan={3}></td>
            </tr>
          </tbody>
        </table>
      </div>
    </>
  );
};

export default SuperAdminCustomPackageBillingComponent;
