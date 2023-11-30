import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { BsCreditCard, BsPaypal, BsBank } from "react-icons/bs";
import { FaStripeS } from "react-icons/fa";
import PhoneInput from "react-phone-input-2";
import Select from "react-select";
import "./CustomPackages.css";
import useAuth from "../../../../../hooks/useAuth";
import { getCookie } from "../../../../../utilities/helper";

const SuperAdminCustomPackageFormComponent = () => {
  const [phonevalue, setPhonevalue] = useState();

  const allCountryName = [
    { value: "Algeria", label: "Algeria", name: "countryNameList" },
    { value: "Egypt", label: "Egypt", name: "countryNameList" },
    { value: "Libya", label: "Libya", name: "countryNameList" },
    { value: "Morocco", label: "Morocco", name: "countryNameList" },
    { value: "Sudan", label: "Sudan", name: "countryNameList" },
    { value: "Tunisia", label: "Tunisia", name: "countryNameList" },
    { value: "Angola", label: "Angola", name: "countryNameList" },
    { value: "Cameroon", label: "Cameroon", name: "countryNameList" },
    {
      value: "Central African Republic",
      label: "Central African Republic",
      name: "countryNameList",
    },
    { value: "Chad", label: "Chad", name: "countryNameList" },
    {
      value: "Congo Republic - Brazzaville",
      label: "Congo Republic - Brazzaville",
      name: "countryNameList",
    },
    {
      value: "Democratic Republic of Congo",
      label: "Democratic Republic of Congo",
      name: "countryNameList",
    },
    {
      value: "Equatorial Guinea",
      label: "Equatorial Guinea",
      name: "countryNameList",
    },
    { value: "Gabon", label: "Gabon", name: "countryNameList" },
    {
      value: "São Tomé & Principe",
      label: "São Tomé & Principe",
      name: "countryNameList",
    },
    { value: "Botswana", label: "Botswana", name: "countryNameList" },
    { value: "Lesotho", label: "Lesotho", name: "countryNameList" },
    { value: "Namibia", label: "Namibia", name: "countryNameList" },
    { value: "South Africa", label: "South Africa", name: "countryNameList" },
    { value: "Swaziland", label: "Swaziland", name: "countryNameList" },
    { value: "Burundi", label: "Burundi", name: "countryNameList" },
    { value: "Comoros", label: "Comoros", name: "countryNameList" },
    { value: "Djibouti", label: "Djibouti", name: "countryNameList" },
    { value: "Ethiopia", label: "Ethiopia", name: "countryNameList" },
    { value: "Eritrea", label: "Eritrea", name: "countryNameList" },
    { value: "Kenya", label: "Kenya", name: "countryNameList" },
    { value: "Madagascar", label: "Madagascar", name: "countryNameList" },
    { value: "Malawi", label: "Malawi", name: "countryNameList" },
    { value: "Mauritius", label: "Mauritius", name: "countryNameList" },
    { value: "Mozambique", label: "Mozambique", name: "countryNameList" },
    { value: "Rwanda", label: "Rwanda", name: "countryNameList" },
    { value: "Seychelles", label: "Seychelles", name: "countryNameList" },
    { value: "Somalia", label: "Somalia", name: "countryNameList" },
    { value: "Tanzania", label: "Tanzania", name: "countryNameList" },
    { value: "Uganda", label: "Uganda", name: "countryNameList" },
    { value: "Zambia", label: "Zambia", name: "countryNameList" },
    { value: "Zimbabwe", label: "Zimbabwe", name: "countryNameList" },
    { value: "Benin", label: "Benin", name: "countryNameList" },
    { value: "Burkina Faso", label: "Burkina Faso", name: "countryNameList" },
    { value: "Cape Verde", label: "Cape Verde", name: "countryNameList" },
    { value: "Côte D Ivoire", label: "Côte D Ivoire", name: "countryNameList" },
    { value: "Gambia", label: "Gambia", name: "countryNameList" },
    { value: "Ghana", label: "Ghana", name: "countryNameList" },
    { value: "Guinea", label: "Guinea", name: "countryNameList" },
    { value: "Guinea-Bissau", label: "Guinea-Bissau", name: "countryNameList" },
    { value: "Liberia", label: "Liberia", name: "countryNameList" },
    { value: "Mali", label: "Mali", name: "countryNameList" },
    { value: "Mauritania", label: "Mauritania", name: "countryNameList" },
    { value: "Niger", label: "Niger", name: "countryNameList" },
    { value: "Nigeria", label: "Nigeria", name: "countryNameList" },
    { value: "Senegal", label: "Senegal", name: "countryNameList" },
    { value: "Sierra Leone", label: "Sierra Leone", name: "countryNameList" },
  ];
  const allRegionName = [
    { value: "East", label: "East", name: "regionNameList" },
    { value: "West", label: "West", name: "regionNameList" },
    { value: "North", label: "North", name: "regionNameList" },
    { value: "South", label: "south", name: "regionNameList" },
    { value: "Central", label: "Central", name: "regionNameList" },
  ];

  const InstitutionName = [
    { value: "East West University", label: "East West University" },
    { value: "East West University", label: "East West University" },
    { value: "East West University", label: "East West University" },
    { value: "East West University", label: "East West University" },
  ];

  const Position = [
    { value: "Lecturer", label: "Lecturer", name: "postionOfThePerson" },
    {
      value: "Head Of Dept",
      label: "Head Of Dept",
      name: "postionOfThePerson",
    },
    { value: "Agent Owner", label: "Agent Owner", name: "postionOfThePerson" },
    {
      value: "Law Firm Owner",
      label: "Law Firm Owner",
      name: "postionOfThePerson",
    },
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
  const {
    user,
    setUser,
    upgrageMembershipPlan,
    setUpgrageMembershipPlan,
    packageDataInfo,
    setPackageDataInfo,
  } = useAuth();
  //feautre list end
  const navigate = useNavigate();
  const handleOnChange = (e) => {
    const field = e.target.name;
    const value = e.target.value;
    const newData = { ...packageDataInfo };

    newData[field] = value;
    setPackageDataInfo(newData);
  };
  const handleOnPosition = (e) => {
    const field = e.name;
    const value = e.value;
    const newData = { ...packageDataInfo };

    newData[field] = value;
    setPackageDataInfo(newData);
  };

  //here working on multiple country select
  const [countryList, setCountryList] = useState(null);
  const handleCountryType = (data) => {
    let catArray = [];
    data.map((o) => catArray.push(o.value));

    setCountryList({ countryList: catArray });
    //setSelectedOption(value);
  };

  //handle region list and multiple selections
  const [regionList, setRegionList] = useState(null);
  const handleRegionType = (data) => {
    let catArray = [];
    data.map((o) => catArray.push(o.value));

    setRegionList({ regionList: catArray });
  };

  //click
  let [featuresList, setFeaturesList] = useState([]);

  const handleOnClick = (data) => {
    let catArray = [];
    var cbChecked = data.target.checked;

    if (cbChecked === true) {
      let x = data.target.value;
      catArray.push(x);
      setFeaturesList([...featuresList, x]);
    }
  };

  const submitCustomPackage = (e) => {
    e.preventDefault();
    const dataList = {
      ...packageDataInfo,
      ...countryList,
      ...regionList,
      featuresList: featuresList,
      phonevalue: phonevalue,
      packageType: "custom-package",
    };

    fetch(`${process.env.REACT_APP_API}/api/create-packages`, {
      method: "POST",
      headers: {
        "content-type": "application/json",
        Authorization: `Bearer ${getCookie("token")}`,
      },
      body: JSON.stringify(dataList),
    })
      .then((response) => response.json())
      .then((data) => {
        if (data) {
          //e.target.reset();

          //setIsLoading(false);
          setPackageDataInfo("");
          navigate("/dashboard", { replace: true });
        }
      });
  };

  return (
    <>
      <div className="payment-box p-4">
        <h2>Add a Institution</h2>
        <form onSubmit={submitCustomPackage}>
          <div className="row g-3 mt-2">
            {/* input */}
            <div className="col col-6">
              <label className="fw-300 mb-2 cc-input-label form-label">
                Institution Name
              </label>
              <input
                type="text"
                name="institutionName"
                onChange={handleOnChange}
                className="form-control lm-border"
              />
            </div>
            <div className="col col-6">
              <label className="fw-300 mb-2 cc-input-label form-label">
                Packages Price
              </label>
              <input
                type="text"
                name="packagesPrice"
                onChange={handleOnChange}
                className="form-control lm-border"
              />
            </div>
            <div className="col col-12">
              <label className="fw-300 mb-2 cc-input-label form-label">
                Location
              </label>
              <input
                type="text"
                name="locationOfTheInstitute"
                onChange={handleOnChange}
                className="form-control lm-border"
              />
            </div>
            <div className="col col-12">
              <label className="fw-300 mb-2 cc-input-label form-label">
                Position
              </label>
              <Select
                options={Position}
                onChange={handleOnPosition}
                styles={customStyles}
                required
              />
            </div>
            <div className="col col-12">
              <label className="fw-300 mb-2 cc-input-label form-label">
                Email
              </label>
              <input
                type="text"
                name="emailOfThePerson"
                onChange={handleOnChange}
                className="form-control lm-border"
                required
              />
            </div>

            <div className="col col-12">
              <label className="fw-300 mb-2 cc-input-label form-label">
                Phone Number
              </label>
              <PhoneInput
                country={"us"}
                value={phonevalue}
                onChange={setPhonevalue}
                name="phoneOfThePerson"
                defaultValue="(208) 555-0112"
                className="text-input-field2"
              />
            </div>

            <div className="col col-12 col-lg-12 mt-4">
              <h2>Features Offered</h2>
              <label className="fw-300 mb-2 cc-input-label form-label">
                Country
              </label>
              <div className="row">
                <div className="col col-9 col-lg-9">
                  <Select
                    options={allCountryName}
                    onChange={handleCountryType}
                    styles={customStyles}
                    required
                    closeMenuOnSelect={false}
                    isMulti
                    height={"auto"}
                  />
                </div>
                {/*  <div className="col col-3 col-lg-3">
                  <div className="form-check ra-border">
                    <label className="form-check-label" htmlFor="con1">
                      All Country
                    </label>
                    <input
                      className="form-check-input"
                      type="checkbox"
                      value="All Country"
                      id="con1"
                      name="featuresOffered"
                    />
                  </div>
                </div> */}
              </div>
            </div>
            <div className="col col-12 col-lg-12 mt-4">
              <label className="fw-300 mb-2 cc-input-label form-label">
                Region
              </label>
              <div className="row">
                <div className="col col-9 col-lg-9">
                  <Select
                    options={allRegionName}
                    onChange={handleRegionType}
                    styles={customStyles}
                    required
                    closeMenuOnSelect={false}
                    isMulti
                  />
                </div>
              </div>
            </div>
            <hr />
            <div className="row">
              <div className="col col-12 col-lg-12">
                <label className="fw-300 mb-2 cc-input-label form-label mt-2">
                  Features Offered
                </label>
                <div className="row">
                  <div className="col col-6 col-lg-4 mt-3">
                    <div className="form-check ra-border">
                      <label className="form-check-label" htmlFor="fea1">
                        Journal Articles
                      </label>
                      <input
                        className="form-check-input"
                        type="checkbox"
                        value="Journal Articles"
                        id="fea1"
                        name="featuresOffered"
                        onClick={handleOnClick}
                      />
                    </div>
                  </div>
                  {/*   <div className="col col-6 col-lg-4 mt-3">
                    <div className="form-check ra-border">
                      <label className="form-check-label" htmlFor="fea2">
                        Law
                      </label>
                      <input
                        className="form-check-input"
                        type="checkbox"
                        defaultValue=""
                        id="fea2"
                        name="featuresOffered" onChange={handleOnChange}
                      />
                    </div>
                  </div> */}
                  <div className="col col-6 col-lg-4 mt-3">
                    <div className="form-check ra-border">
                      <label className="form-check-label" htmlFor="fea3">
                        Laws
                      </label>
                      <input
                        className="form-check-input"
                        type="checkbox"
                        value="Case Law"
                        id="fea3"
                        name="featuresOffered"
                        onClick={handleOnClick}
                      />
                    </div>
                  </div>
                  <div className="col col-6 col-lg-4 mt-3">
                    <div className="form-check ra-border">
                      <label className="form-check-label" htmlFor="fea6">
                        Subject Area
                      </label>
                      <input
                        className="form-check-input"
                        type="checkbox"
                        value="Subject Area"
                        id="fea6"
                        name="featuresOffered"
                        onClick={handleOnClick}
                      />
                    </div>
                  </div>
                  <div className="col col-6 col-lg-4 mt-3">
                    <div className="form-check ra-border">
                      <label className="form-check-label" htmlFor="fea5">
                        Insights
                      </label>
                      <input
                        className="form-check-input"
                        type="checkbox"
                        value="Insights"
                        id="fea5"
                        name="featuresOffered"
                        onClick={handleOnClick}
                      />
                    </div>
                  </div>
                  <div className="col col-6 col-lg-4 mt-3">
                    <div className="form-check ra-border">
                      <label className="form-check-label" htmlFor="fea6">
                        Books
                      </label>
                      <input
                        className="form-check-input"
                        type="checkbox"
                        value="Books"
                        id="fea6"
                        name="featuresOffered"
                        onClick={handleOnClick}
                      />
                    </div>
                  </div>
                </div>
              </div>
              <hr />
              <div className="col col-12 col-lg-12">
                <label className="fw-300 mb-2 cc-input-label form-label mt-2">
                  Contact Duration Yearly
                </label>
                <div className="row">
                  <div className="col col-6 col-lg-3 mt-3">
                    <div className="form-check ra-border">
                      <label className="form-check-label" htmlFor="rad1">
                        1 years
                      </label>
                      <input
                        className="form-check-input"
                        type="radio"
                        value="1 year"
                        id="rad1"
                        name="contactDurationForCustomPackage"
                        onChange={handleOnChange}
                      />
                    </div>
                  </div>
                  <div className="col col-6 col-lg-3 mt-3">
                    <div className="form-check ra-border">
                      <label className="form-check-label" htmlFor="rad2">
                        2 years
                      </label>
                      <input
                        className="form-check-input"
                        type="radio"
                        value="2 year"
                        id="rad1"
                        name="contactDurationForCustomPackage"
                        onChange={handleOnChange}
                      />
                    </div>
                  </div>

                  <div className="col col-6 col-lg-3 mt-3">
                    <div className="form-check ra-border">
                      <label className="form-check-label" htmlFor="rad3">
                        3 years
                      </label>
                      <input
                        className="form-check-input"
                        type="radio"
                        value="3 year"
                        id="rad2"
                        name="contactDurationForCustomPackage"
                        onChange={handleOnChange}
                      />
                    </div>
                  </div>
                  <div className="col col-6 col-lg-3 mt-3">
                    <div className="form-check ra-border">
                      <label className="form-check-label" htmlFor="rad4">
                        4 years
                      </label>
                      <input
                        className="form-check-input"
                        type="radio"
                        value="4 year"
                        id="rad3"
                        name="contactDurationForCustomPackage"
                        onChange={handleOnChange}
                      />
                    </div>
                  </div>
                  <div className="col col-6 col-lg-3 mt-3">
                    <div className="form-check ra-border">
                      <label className="form-check-label" htmlFor="rad5">
                        5 years
                      </label>
                      <input
                        className="form-check-input"
                        type="radio"
                        value="5 year"
                        id="rad4"
                        name="contactDurationForCustomPackage"
                        onChange={handleOnChange}
                      />
                    </div>
                  </div>
                  <div className="col col-6 col-lg-3 mt-3">
                    <div className="form-check ra-border">
                      <label className="form-check-label" htmlFor="rad6">
                        10 years
                      </label>
                      <input
                        className="form-check-input"
                        type="radio"
                        value="10 year"
                        id="rad5"
                        name="contactDurationForCustomPackage"
                        onChange={handleOnChange}
                      />
                    </div>
                  </div>
                </div>
                <hr />
                <div className="row">
                  <label className="fw-300 mb-2 cc-input-label form-label mt-2">
                    Contact Duration Monthly
                  </label>
                  <div className="col col-6 col-lg-3 mt-3">
                    <div className="form-check ra-border">
                      <label className="form-check-label" htmlFor="rad5">
                        1 month
                      </label>
                      <input
                        className="form-check-input"
                        type="radio"
                        value="1 month"
                        id="rad4"
                        name="contactDurationForCustomPackage"
                        onChange={handleOnChange}
                      />
                    </div>
                  </div>
                  <div className="col col-6 col-lg-3 mt-3">
                    <div className="form-check ra-border">
                      <label className="form-check-label" htmlFor="rad6">
                        3 month
                      </label>
                      <input
                        className="form-check-input"
                        type="radio"
                        value="3 month"
                        id="rad5"
                        name="contactDurationForCustomPackage"
                        onChange={handleOnChange}
                      />
                    </div>
                  </div>
                  <div className="col col-6 col-lg-3 mt-3">
                    <div className="form-check ra-border">
                      <label className="form-check-label" htmlFor="rad6">
                        6 month
                      </label>
                      <input
                        className="form-check-input"
                        type="radio"
                        value="6 month"
                        id="rad5"
                        name="contactDurationForCustomPackage"
                        onChange={handleOnChange}
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <hr />
            <div className="row mt-2">
              <div className="col col-12 col-lg-6">
                <label className="fw-300 mb-2 cc-input-label form-label">
                  Contract Start Date
                </label>
                <input
                  type="date"
                  name="contractStartDate"
                  onChange={handleOnChange}
                  className="form-control lm-border"
                />
              </div>
              <div className="col col-12 col-lg-6">
                <label className="fw-300 mb-2 cc-input-label form-label">
                  Contract End Date
                </label>
                <input
                  type="date"
                  name="contractEndDate"
                  onChange={handleOnChange}
                  className="form-control lm-border"
                />
              </div>
              <div className="col col-12 mt-2">
                <label className="fw-300 mb-2 cc-input-label form-label">
                  Note
                </label>
                <textarea
                  placeholder={"Write your note here..."}
                  className="form-control lm-border"
                  name="noteForCustomPackage"
                  onChange={handleOnChange}
                />
              </div>
            </div>
          </div>
          <button className="btn-cancel mt-4" onClick={submitCustomPackage}>
            Pay & Add Now
          </button>
        </form>
      </div>
    </>
  );
};

export default SuperAdminCustomPackageFormComponent;
