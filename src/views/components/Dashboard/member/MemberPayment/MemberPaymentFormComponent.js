import React, { useState, useEffect } from "react";
import { Link, useParams, useNavigate } from "react-router-dom";
import { BsCreditCard, BsPaypal, BsBank } from "react-icons/bs";
import { GrOfflineStorage } from "react-icons/gr";
import Select from "react-select";
import { loadStripe } from "@stripe/stripe-js";
import { Elements } from "@stripe/react-stripe-js";
import CheckoutForm from "./CheckoutForm";
import "./Payment.css";
import useAuth from "../../../../../hooks/useAuth";
import { getCookie } from "../../../../../utilities/helper";

const stripePromise = loadStripe("pk_test_HPKejCek8U3wNVADQtxNlRjo00PhfE7FCO");
const MemberPaymentFormComponent = () => {
  const {
    user,
    setUser,
    upgrageMembershipPlan,
    setUpgrageMembershipPlan,
    membershipPaymentData,
    setMembershipPaymentData,
  } = useAuth();

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
  let { _id } = useParams();
  const navigate = useNavigate();
  const [packageDetails, setPackageDetails] = useState([]);

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

  //choose plan
  const [packageChargeTimeName, setPackageChargeTimeName] = useState([]);
  const handleOnTypeTimePlan = (e) => {
    const field = e.name;
    const value = e.value;
    const newData = { ...membershipPaymentData };
    newData[field] = value;
    setMembershipPaymentData(newData);
  };
  //choose country name
  let [allCountryName, setAllCountryName] = useState([]);
  useEffect(() => {
    let data = [];
    for (
      let index = 0;
      index < packageDetails?.countryNameList?.length;
      index++
    ) {
      const element = packageDetails?.countryNameList[index];
      data.push({
        value: element,
        label: element,
        name: "countryNameList",
      });
    }
    setAllCountryName(data);
  }, [packageDetails?.countryNameList]);

  const handleCountryType = (e) => {
    const field = e.name;
    const value = e.value;
    const newData = { ...membershipPaymentData };
    newData[field] = value;
    setMembershipPaymentData(newData);
  };

  //end select country
  /**********region list work************/
  let [allRegionName, setAllRegionName] = useState([]);

  useEffect(() => {
    let data = [];
    for (
      let index = 0;
      index < packageDetails?.regionNameList?.length;
      index++
    ) {
      let element = packageDetails?.regionNameList[index];
      data.push({
        value: element,
        label: element,
        name: "regionNameList",
      });
    }
    setAllRegionName(data);
  }, [packageDetails?.regionNameList]);

  const handleRegionType = (e) => {
    const field = e.name;
    const value = e.value;
    const newData = { ...membershipPaymentData };
    newData[field] = value;
    setMembershipPaymentData(newData);
  };

  /**********end region list work************/
  //function for payment data
  useEffect(() => {
    if (packageDetails.packageName === "platinum") {
      setMembershipPaymentData({
        ...membershipPaymentData,
        regionNameList: packageDetails?.regionNameList,
        countryNameList: packageDetails?.countryNameList,
      });
    }
  }, [packageDetails.packageName === "platinum"]);
  const submitPaymentData = (e) => {
    e.preventDefault();
  };

  const [value2, setValue2] = useState("credit");

  return (
    <>
      <div className="payment-box p-4">
        <h2 className="text-uppercase">
          {packageDetails.packageName} PACKAGE PAYMENT{" "}
        </h2>
        <form onSubmit={submitPaymentData}>
          <div className="row g-3">
            <div className="col col-12 ">
              <div className="input-wrapper">
                <label className="fw-400 mb-2 cc-input-label form-label">
                  <strong>Choose Time Plan</strong>
                </label>
                <Select
                  styles={customStyles}
                  onChange={handleOnTypeTimePlan}
                  options={optionsPackageChargeTime}
                  //defaultValue={optionsPackageChargeTime[0]}
                />
              </div>
            </div>
            {/* input */}
            {packageDetails.packageName === "silver" && (
              <div className="col col-12">
                <label className="fw-300 mb-2 cc-input-label form-label">
                  <strong>Select Country</strong>
                </label>

                {allCountryName && (
                  <Select
                    //value={allCountryName}
                    options={allCountryName}
                    styles={customStyles}
                    onChange={handleCountryType}
                    required
                  />
                )}
              </div>
            )}
            {packageDetails.packageName === "gold" && (
              <div className="col col-12">
                <label className="fw-300 mb-2 cc-input-label form-label">
                  <strong>Select Region</strong>
                </label>
                <Select
                  options={allRegionName}
                  styles={customStyles}
                  onChange={handleRegionType}
                  required
                />
              </div>
            )}

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
                    <BsBank /><p>Bank Details Here</p>
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

export default MemberPaymentFormComponent;
