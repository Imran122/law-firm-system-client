import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { BsCreditCard, BsPaypal } from "react-icons/bs";
import Select from "react-select";
import "../Packages.css";
import { getCookie } from "../../../../../../utilities/helper";
import useAuth from "../../../../../../hooks/useAuth";

const SuperAdminAddPackageFormComponent = () => {
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

  const customStylesCountry = {
    control: (provided, state) => ({
      ...provided,
      background: "#fff",
      borderColor: "#eaecf0",
      height: "auto",

      boxShadow: state.isFocused ? null : null,
      "&:hover": {
        // Overwrittes the different states of border
        borderColor: "#eaecf0",
      },
    }),
  };


  const {
    user,
    isLoading,
    setIsLoading,
    packageTotalWhileAdd,
    setPackageTotalWhileAdd,
  } = useAuth();
  const navigate = useNavigate();
  const [packageDataInfo, setPackageDataInfo] = useState([]);
  //wokring normal type related work to store in state
  let result = 0;
  const handleOnChange = (e) => {
    const field = e.target.name;
    const value = e.target.value;
    const newData = { ...packageDataInfo };

    newData[field] = value;
    setPackageDataInfo(newData);
    //calculation part
    const packagesPrice = newData?.packagesPrice;
    const discountPrice = newData?.discountPrice;
    const vatAmount = newData?.vatAmount;
    const cuponDiscountPrice = newData?.cuponDiscountPrice;
    const cuponCode = newData?.cuponCode;
    let amountAfterdiscount = 0;

    if (newData?.packageName) {
      setPackageTotalWhileAdd(result);
    }

    //if there is cupon code and discount price
    if (cuponCode || discountPrice != 0) {
      amountAfterdiscount =
        packagesPrice - (discountPrice * packagesPrice) / 100;
      const amountAfterVatReduce =
        amountAfterdiscount - (vatAmount * amountAfterdiscount) / 100;
      let amountAftercupon = 0;
      if (cuponCode) {
        amountAftercupon =
          amountAfterVatReduce -
          (cuponDiscountPrice * amountAfterVatReduce) / 100;
        result = amountAftercupon;
        setPackageTotalWhileAdd(result);
      } else {
        result = amountAfterVatReduce;
        setPackageTotalWhileAdd(result);
      }
    } else {
      const amountAfterVatReduce =
        packagesPrice - (vatAmount * packagesPrice) / 100;
      result = amountAfterVatReduce;
      setPackageTotalWhileAdd(result);
    }
    //....if cupon presernt but no discount is available

    if (cuponCode && discountPrice === 0) {
      let amountAftercupon = 0;
      let amountAfterVatReduce = 0;
      amountAftercupon =
        packagesPrice - (cuponDiscountPrice * packagesPrice) / 100;
      amountAfterVatReduce =
        amountAftercupon - (vatAmount * amountAftercupon) / 100;
      result = amountAfterVatReduce;
      setPackageTotalWhileAdd(result);
    }
    //....end if cupon presernt but no discount is available
    //if only discount price is available then
    /*  if (discountPrice != 0 && cuponCode === "") {
      let amountAfterVatReduce = 0;
      amountAfterdiscount =
        packagesPrice - (discountPrice * packagesPrice) / 100;
      amountAfterVatReduce =
        amountAfterdiscount - (vatAmount * amountAfterdiscount) / 100;
      result = amountAfterVatReduce;
      setPackageTotalWhileAdd(result);
      console.log("res cu", result);
    } */
  };

  //feautre list
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
  //feautre list end

  //here working on multiple country select
  const [countryList, setCountryList] = useState(null);
  const handleType = (data) => {
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
  //calculation part

  const submitPackageData = (e) => {
    e.preventDefault();
    setIsLoading(true);
    const dataList = {
      ...packageDataInfo,
      ...countryList,
      ...regionList,
      featuresList: featuresList,
      packageType: "fixed-package",
    };

    fetch(`${process.env.REACT_APP_API}/api/create-packages`, {
      method: "POST",
      headers: {
        "content-type": "application/json",
        "Authorization": `Bearer ${getCookie("token")}`
      },
      body: JSON.stringify(dataList),
    })
      .then((response) => response.json())
      .then((data) => {
        if (data) {
          e.target.reset();
          setPackageTotalWhileAdd("");
          setIsLoading(false);
          //navigate("/super-admin-add-package", { replace: true });
        }
      });
  };
  return (
    <>
      <div className="payment-box p-4">
        <h2>Customized Pricing </h2>
        <form onSubmit={submitPackageData}>
          <div className="row g-3">
            {/* input */}
            <div className="col col-12 col-lg-6">
              <label className="fw-300 mb-2 cc-input-label form-label">
                Package Name
              </label>
              <input
                type="text"
                name="packageName"
                onBlur={handleOnChange}
                className="form-control lm-border"
              />
            </div>
            <div className="col col-12 col-lg-6">
              <label className="fw-300 mb-2 cc-input-label form-label">
                Price Monthly
              </label>
              <input
                type="text"
                name="packagesPrice"
                onBlur={handleOnChange}
                className="form-control lm-border"
                required
              />
            </div>
            <div className="col col-12 col-lg-6">
              <label className="fw-300 mb-2 cc-input-label form-label">
                Discount Amount
              </label>
              <input
                type="text"
                name="discountPrice"
                onBlur={handleOnChange}
                className="form-control lm-border"
              />
            </div>
            <div className="col col-12 col-lg-6">
              <label className="fw-300 mb-2 cc-input-label form-label">
                Vat Amount
              </label>
              <input
                type="text"
                name="vatAmount"
                onBlur={handleOnChange}
                className="form-control lm-border"
                required
              />
            </div>

            <div className="col col-12 col-lg-6">
              <label className="fw-300 mb-2 cc-input-label form-label">
                Coupon Code
              </label>
              <input
                type="text"
                name="cuponCode"
                onBlur={handleOnChange}
                className="form-control lm-border"
              />
            </div>
            <div className="col col-12 col-lg-6">
              <label className="fw-300 mb-2 cc-input-label form-label">
                Coupon Discount Price
              </label>
              <input
                type="text"
                name="cuponDiscountPrice"
                onBlur={handleOnChange}
                className="form-control lm-border"
              />
            </div>
            <div className="col col-12 col-lg-6">
              <label className="fw-300 mb-2 cc-input-label form-label">
                Cupon Expire Date
              </label>
              <input
                type="date"
                name="cuponExpireDate"
                onBlur={handleOnChange}
                className="form-control lm-border"
              />
            </div>
            <div className="col col-12 ">
              <label className="fw-300 mb-2 cc-input-label form-label">
                Select Country
              </label>
              <Select
                options={allCountryName}
                styles={customStylesCountry}
                onChange={handleType}
                required
                closeMenuOnSelect={false}
                isMulti
              />
            </div>

            <div className="col col-12 ">
              <label className="fw-300 mb-2 cc-input-label form-label">
                Select Region
              </label>
              <Select
                options={allRegionName}
                styles={customStylesCountry}
                onChange={handleRegionType}
                required
                closeMenuOnSelect={false}
                isMulti
              />
            </div>

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
                        Case Law
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
                      <label className="form-check-label" htmlFor="fea4">
                        Insights
                      </label>
                      <input
                        className="form-check-input"
                        type="checkbox"
                        value="Insights"
                        id="fea4"
                        name="featuresOffered"
                        onClick={handleOnClick}
                      />
                    </div>
                  </div>
                  <div className="col col-6 col-lg-4 mt-3">
                    <div className="form-check ra-border">
                      <label className="form-check-label" htmlFor="fea5">
                        Books
                      </label>
                      <input
                        className="form-check-input"
                        type="checkbox"
                        value="Books"
                        id="fea5"
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
                </div>
              </div>
            </div>

            {/*  <div className="col col-12">
              <label className="fw-300 mb-2 cc-input-label form-label">
                <strong>Total Amount</strong>
              </label>
              <input type="text" className="form-control lm-border" />
            </div> */}

            <div className="col col-12 col-lg-4 d-none d-lg-block"></div>
            <div className="col col-12 col-lg-4">
              <button onClick={() => submitPackageData} className="btn-cancel">
                Submit
              </button>
            </div>
            <div className="col col-12 col-lg-4 d-none d-lg-block"></div>
          </div>
        </form>
      </div>
    </>
  );
};

export default SuperAdminAddPackageFormComponent;
