import React from "react";
import { Link, useNavigate } from "react-router-dom";
import useAuth from "../../../../../../hooks/useAuth";
import "../Packages.css";

const SuperAdminPackageBillingComponent = () => {
  const { packageTotalWhileAdd, setPackageTotalWhileAdd } = useAuth();
  return (
    <>
      <div className="payment-box p-4 mb-3">
        <h2>Billings</h2>
        <table className="table table-borderless lm-tbl">
          <tbody>
            <tr>
              <td>Total</td>
              <td></td>
              {packageTotalWhileAdd != 0 && <td>${packageTotalWhileAdd}</td>}
            </tr>
          </tbody>
        </table>
      </div>
    </>
  );
};

export default SuperAdminPackageBillingComponent;
