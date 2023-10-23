import React, { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import useAuth from "../../../../../hooks/useAuth";
import { getCookie } from "../../../../../utilities/helper";
import "./Payment.css";

const HomePaymentInvoiceComponent = () => {
  let { _id } = useParams();
  const navigate = useNavigate();
  const [packageDetails, setPackageDetails] = useState([]);
  const {
    user,
    setUser,
    isLoading,
    setIsLoading,
    authError,
    setAuthError,
    membershipPaymentData,
    setMembershipPaymentData,
  } = useAuth();
  useEffect(() => {
    fetch(`${process.env.REACT_APP_API}/api/package-details-info/${_id}`, {
      headers: {
        "Authorization": `Bearer ${getCookie("token")}`
      },
    })
      .then((response) => {
        if (response.status === 200) {
          return response.json();
        } else if (response.status === 401) {
          navigate("/dashboard", { replace: true });
        }
      })
      .then((data) => {
        /*  initialInfo = {
            packageName: data.packageName,
            packagesPrice: data.packagesPrice,
            discountPrice: data.discountPrice,
            vatAmount: data.vatAmount,
            cuponCode: data.cuponCode,
            cuponDiscountPrice: data.cuponDiscountPrice,
            cuponExpireDate: data.cuponExpireDate,
          }; */
        setPackageDetails(data);
      });
  }, []);

  const [promoCode, setPromoCode] = useState([]);
  const handleOnType = (e) => {
    const field = e.target.name;
    const value = e.target.value;
    const newData = { ...promoCode };
    newData[field] = value;
    setPromoCode(newData);
  };
  const promoCodeDataSubmit = (e) => {
    let paidAmount = 0;
    e.preventDefault();

    let amountAftercupon = 0;

    if (packageDetails.cuponCode === promoCode.promoCode) {
      amountAftercupon =
        membershipPaymentData.paidAmount -
        (packageDetails.cuponDiscountPrice * membershipPaymentData.paidAmount) /
          100;
      paidAmount = amountAftercupon;
      setMembershipPaymentData({ ...membershipPaymentData, paidAmount });
    } else {
      paidAmount = membershipPaymentData.paidAmount;
      setMembershipPaymentData({ ...membershipPaymentData, paidAmount });
    }
  };

  useEffect(() => {
    /***********invoice********/

    /*****************invoice**/
    let yearlyPaymentCharge = packageDetails.packagesPrice * 12;
    let amountAfterdiscount = 0;
    let paidAmount = 0;
    if (membershipPaymentData.packageChargeTimeName === "Monthly") {
      //if there is cupon code and discount price
      if (
        packageDetails.discountPrice != 0 ||
        packageDetails.discountPrice != ""
      ) {
        amountAfterdiscount =
          packageDetails.packagesPrice -
          (packageDetails.discountPrice * packageDetails.packagesPrice) / 100;
        const amountAfterVatAdd =
          amountAfterdiscount +
          (packageDetails.vatAmount * amountAfterdiscount) / 100;
        paidAmount = amountAfterVatAdd;

        setMembershipPaymentData({ ...membershipPaymentData, paidAmount });
      } else {
        const amountAfterVatAdd =
          packageDetails.packagesPrice +
          (packageDetails.vatAmount * packageDetails.packagesPrice) / 100;
        paidAmount = amountAfterVatAdd;
        setMembershipPaymentData({ ...membershipPaymentData, paidAmount });
      }
    } else {
      if (
        packageDetails.discountPrice != 0 ||
        packageDetails.discountPrice != ""
      ) {
        amountAfterdiscount =
          yearlyPaymentCharge -
          (packageDetails.discountPrice * yearlyPaymentCharge) / 100;
        const amountAfterVatAdd =
          amountAfterdiscount +
          (packageDetails.vatAmount * amountAfterdiscount) / 100;
        paidAmount = amountAfterVatAdd;

        setMembershipPaymentData({ ...membershipPaymentData, paidAmount });
      } else {
        const amountAfterVatAdd =
          yearlyPaymentCharge +
          (packageDetails.vatAmount * yearlyPaymentCharge) / 100;
        paidAmount = amountAfterVatAdd;
        setMembershipPaymentData({ ...membershipPaymentData, paidAmount });
      }
    }
  }, [membershipPaymentData.packageChargeTimeName]);

  return (
    <>
      <div className="payment-box p-4 mb-3">
        <h2>Invoice</h2>
        <table className="table table-borderless lm-tbl">
          <thead>
            <tr>
              <th>Charge</th>
              <th></th>
              <th>${packageDetails.packagesPrice}</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Discount</td>
              <td></td>
              <td>(-{packageDetails.discountPrice}%)</td>
            </tr>

            <tr>
              <td>Vat</td>
              <td></td>
              <td>(+{packageDetails.vatAmount}%) </td>
            </tr>
            <tr>
              <td></td>
              <td></td>
              <td></td>
            </tr>
            <tr>
              <td>Total</td>
              <td></td>
              {membershipPaymentData.paidAmount ? (
                <td>${membershipPaymentData.paidAmount}</td>
              ) : (
                <td>0</td>
              )}
            </tr>
          </tbody>
        </table>
        <form className="d-block" onSubmit={promoCodeDataSubmit}>
          <div className="row">
            <h6>{authError}</h6>
            <div className="col col-8" colSpan={2}>
              <input
                placeholder="Promo code"
                name="promoCode"
                onChange={handleOnType}
                className="form-control lm-border"
              />
            </div>
            <div className="col col-4">
              <button
                id="Submit_id"
                onClick={promoCodeDataSubmit}
                className="btn btn-primary w-100"
              >
                Apply
              </button>
            </div>
          </div>
        </form>
      </div>
    </>
  );
};

export default HomePaymentInvoiceComponent;
