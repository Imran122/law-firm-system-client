import React, { useState, useEffect } from "react";
import { Link, useParams, useNavigate } from "react-router-dom";
import { BsCreditCard, BsPaypal, BsBank } from "react-icons/bs";
import { GrOfflineStorage } from "react-icons/gr";
import Select from "react-select";
import { loadStripe } from "@stripe/stripe-js";
import { Elements } from "@stripe/react-stripe-js";
import CheckoutForm from "./CheckoutForm";
import "./CustomPayment.css";
import useAuth from "../../../../../hooks/useAuth";
import { getCookie } from "../../../../../utilities/helper";
const stripePromise = loadStripe("pk_test_HPKejCek8U3wNVADQtxNlRjo00PhfE7FCO");

const MemberCustomPaymentFormComponent = ({ packageDetails }) => {
  const { membershipPaymentData, setMembershipPaymentData } = useAuth();
  console.log(
    "packageDetails MemberCustomPaymentFormComponent ",
    packageDetails
  );
  useEffect(() => {
    const newData = {
      paidAmount:
        parseFloat(packageDetails.packagesPrice) +
        (20.0 / 100) * parseFloat(packageDetails.packagesPrice),
      packagesPrice: packageDetails.packagesPrice,
    };
    setMembershipPaymentData(newData);
  }, [packageDetails]);
  const optionsPackageChargeTime = [
    { value: "Monthly", label: "Monthly", name: "packageChargeTimeName" },
    { value: "Yearly", label: "Yearly", name: "packageChargeTimeName" },
  ];

  const customStyles = {
    control: (provided, state) => ({
      ...provided,
      background: "#fff",
      borderColor: "#eaecf0",
      height: "45px",

      boxShadow: state.isFocused ? null : null,
      "&:hover": {
        // Overwrittes the different states of border
        borderColor: "#eaecf0",
      },
    }),
  };

  //choose country name
  let [allCountryName, setAllCountryName] = useState([]);

  //end select country
  /**********region list work************/
  let [allRegionName, setAllRegionName] = useState([]);

  const [value2, setValue2] = useState("credit");

  return (
    <>
      <div className="payment-box p-4">
        <h2 className="text-uppercase">CUSTOM PACKAGE PAYMENT</h2>
        <form>
          <div className="row g-3">
            <div className="col col-12">
              <h5 className="fw-300 mb-2 cc-input-label form-label">
                Contract Start Date :{" "}
                <strong>
                  {new Date(
                    packageDetails?.contractStartDate
                  ).toLocaleDateString()}
                </strong>
              </h5>
            </div>
            <div className="col col-12">
              <h5 className="fw-300 mb-2 cc-input-label form-label">
                Contract End Date :{" "}
                <strong>
                  {new Date(
                    packageDetails?.contractEndDate
                  ).toLocaleDateString()}
                </strong>
              </h5>
            </div>
            <div className="col col-12">
              <h5 className="fw-300 mb-2 cc-input-label form-label">
                Package Country :{" "}
                <strong>{packageDetails?.countryNameList}</strong>
              </h5>
            </div>
            <div className="col col-12">
              <h5 className="fw-300 mb-2 cc-input-label form-label">
                Package Region:{" "}
                <strong>{packageDetails?.regionNameList}</strong>
              </h5>
            </div>
            <div className="col col-12">
              <h5 className="fw-300 mb-2 cc-input-label form-label">
                Contant duration :{" "}
                <strong>
                  {packageDetails?.contactDurationForCustomPackage} years
                </strong>
              </h5>
            </div>
            <div className="col col-12">
              <h2 className="fw-300 mb-2 cc-input-label form-label">
                Package price : <strong>{packageDetails?.packagesPrice}</strong>
              </h2>
            </div>
            <div className="col col-12">
              <div className="input-wrapper">
                <div className="mb-3">
                  <div className="form-check form-check-inline">
                    <input
                      className="form-check-input"
                      type="radio"
                      name="inlineRadioOptions"
                      id="inlineRadio1"
                      defaultValue="credit"
                      checked={value2 === "credit"}
                      onChange={(e) => setValue2(e.currentTarget.value)}
                    />
                    <label className="form-check-label" htmlFor="inlineRadio1">
                      <BsCreditCard /> Credit/Debit Card
                    </label>
                  </div>
                  {/*  <div className="form-check form-check-inline">
                    <input
                      className="form-check-input"
                      type="radio"
                      name="inlineRadioOptions"
                      id="inlineRadio2"
                      defaultValue="paypal"
                    />
                    <label className="form-check-label" htmlFor="inlineRadio2">
                      <BsPaypal style={{ color: "#002C8A" }} /> Paypal
                    </label>
                  </div> */}
                  <div className="form-check form-check-inline">
                    <input
                      className="form-check-input"
                      type="radio"
                      name="inlineRadioOptions"
                      id="inlineRadio3"
                      defaultValue="offline"
                      checked={value2 === "offline"}
                      onChange={(e) => setValue2(e.currentTarget.value)}
                    />
                    <label className="form-check-label" htmlFor="inlineRadio3">
                      <GrOfflineStorage style={{ color: "#002C8A" }} /> Offline
                    </label>
                  </div>
                </div>
              </div>
            </div>
            {value2 === "offline" && (
              <div className="col col-12">
                <div className="input-wrapper">
                  <div className="mb-3 cc-in-g input-group">
                    <div className="col col-12">
                      <BsBank />
                      <p>Bank Details Here</p>
                    </div>
                  </div>
                </div>
              </div>
            )}
            {value2 === "credit" && (
              <Elements stripe={stripePromise}>
                <CheckoutForm />
              </Elements>
            )}
          </div>
        </form>
      </div>
    </>
  );
};

export default MemberCustomPaymentFormComponent;
