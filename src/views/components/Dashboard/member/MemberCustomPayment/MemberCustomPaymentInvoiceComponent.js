import React, { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import useAuth from "../../../../../hooks/useAuth";
import { getCookie } from "../../../../../utilities/helper";
import "./CustomPayment.css";

const MemberCustomPaymentInvoiceComponent = () => {
  const {
    membershipPaymentData,
    setMembershipPaymentData,
  } = useAuth();
  return (
    <>
      <div className="payment-box p-4 mb-3">
        <h2>Invoice</h2>
        <table className="table table-borderless lm-tbl">
          <thead>
            <tr>
              <th>Charge</th>
              <th></th>
              <th>${membershipPaymentData.packagesPrice}</th>
            </tr>
          </thead>
          <tbody>
            {/* <tr>
              <td>Discount</td>
              <td></td>
              <td>(-00%)</td>
            </tr> */}

            <tr>
              <td>Vat</td>
              <td></td>
              <td>(+20%) </td>
            </tr>
            <tr>
              <td></td>
              <td></td>
              <td></td>
            </tr>
            <tr>
              <td>Total</td>
              <td></td>
              
              <td>${membershipPaymentData.paidAmount}</td>
            </tr>
          </tbody>
        </table>
        {/* <form className="d-block" >
          <div className="row">
            <h6>title</h6>
            <div className="col col-8" colSpan={2}>
              <input
                placeholder="Promo code"
                name="promoCode"
                className="form-control lm-border"
              />
            </div>
            <div className="col col-4">
              <button
                id="Submit_id"
                className="btn btn-primary w-100"
              >
                Apply
              </button>
            </div>
          </div>
        </form> */}
      </div>
    </>
  );
};

export default MemberCustomPaymentInvoiceComponent;
