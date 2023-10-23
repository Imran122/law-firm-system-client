import React from "react";
import { Link, useNavigate } from "react-router-dom";
import "../Packages.css";

const SuperAdminPackageEditBillingComponent = () => {
  
  return (
    <>
      <div className="payment-box p-4 mb-3">
            <h2>Billings</h2>
            <table className="table table-borderless lm-tbl">
                <tbody>
                    <tr>
                        <td>Total</td>
                        <td></td>
                        <td>$50</td>
                    </tr>
                    
                </tbody>
            </table>
            
        </div>
    </>
  );
};

export default SuperAdminPackageEditBillingComponent;
