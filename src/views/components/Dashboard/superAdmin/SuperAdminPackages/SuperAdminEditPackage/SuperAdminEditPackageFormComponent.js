import React, { useState, useEffect } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import { BsCreditCard, BsPaypal } from "react-icons/bs";
import Select from "react-select";
import "../Packages.css";
import { getCookie } from "../../../../../../utilities/helper";
import useAuth from "../../../../../../hooks/useAuth";

const SuperAdminEditPackageFormComponent = () => {
  const { isLoading, setIsLoading } = useAuth();
  const allCountryOption = [
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
  const allRegionOption = [
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


  let { id } = useParams();
  let initialInfo = {};
  let [featuresOffered, setFeaturesOffered] = useState([]);
  const [packageDetails, setPackageDetails] = useState([]);
  const navigate = useNavigate();
  useEffect(() => {
    fetch(`${process.env.REACT_APP_API}/api/package-details-info/${id}`, {
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
        initialInfo = {
          packageName: data.packageName,
          packagesPrice: data.packagesPrice,
          discountPrice: data.discountPrice,
          vatAmount: data.vatAmount,
          cuponCode: data.cuponCode,
          cuponDiscountPrice: data.cuponDiscountPrice,
          cuponExpireDate: data.cuponExpireDate,
        };
        setPackageDetails(data);
        setFeaturesOffered(data.featuresOffered);
      });
  }, []);

  const [cuponDate, setCuponDate] = useState("");
  function convert(str) {
    var date = new Date(str),
      mnth = ("0" + (date.getMonth() + 1)).slice(-2),
      day = ("0" + date.getDate()).slice(-2);
    return [date.getFullYear(), mnth, day].join("-");
  }
  let dates = convert(packageDetails?.cuponExpireDate);
  useEffect(() => {
    setCuponDate(dates);
  }, [packageDetails?.cuponExpireDate]);

  //************start wokring normal type*************** */
  //wokring normal type related work to store in state
  const [packageDataInfo, setPackageDataInfo] = useState(initialInfo);
  let result = 0;
  const handleOnChange = (e) => {
    const field = e.target.name;
    const value = e.target.value;
    const newData = { ...packageDataInfo };
    newData[field] = value;

    setPackageDataInfo(newData);
  };

  //************end wokring normal type*************** */
  //default country name

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

  //default value for region

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

  //check box default value set

  //end of checkbox default value set

  //..................check box work.........................

  //feautre list

  const handleOnClick = (data) => {
    let catArray = [];
    var cbChecked = data.target.checked;

    if (cbChecked === false) {
      let clickValue = data.target.value;

      const index = featuresOffered.indexOf(clickValue);
      if (index > -1) {
        featuresOffered.splice(index, 1);
      }
      //catArray.push(clickValue);
      setFeaturesOffered([...featuresOffered]);
    }

    if (cbChecked === true) {
      let x = data.target.value;

      catArray.push(x);
      setFeaturesOffered([...featuresOffered, x]);
    }
  };

  //feautre list end
  //..................check box work.........................
  //here working on multiple country select
  const [countryNameList, setCountryNameList] = useState(null);
  const handleCountryType = (data) => {
    setAllCountryName(data);
    let catArray = [];
    data.map((o) => catArray.push(o.value));

    setCountryNameList({ countryNameList: catArray });
    //setSelectedOption(value);
  };
  //****************************************************** */
  //handle region list and multiple selections
  const [regionNameList, setRegionNameList] = useState();
  const handleRegionType = (data) => {
    setAllRegionName(data);
    let catArray = [];
    data.map((o) => catArray.push(o.value));

    setRegionNameList({ regionNameList: catArray });
  };

  const updatePackageData = (e) => {
    e.preventDefault();
    const allData = {
      ...packageDataInfo,
      ...regionNameList,
      ...countryNameList,
      featuresOffered,
    };

    //update data by call api
    fetch(`${process.env.REACT_APP_API}/api/update-package`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
        "Authorization": `Bearer ${getCookie("token")}`,
        id: id,
      },
      body: JSON.stringify(allData),
    })
      .then((response) => {
        if (response.status === 200) {
          return response.json();
        } else if (response.status === 401) {
          navigate("/dashboard/super-admin-package-list", { replace: true });
        }
      })
      .then((data) => {
        if (data) {
          navigate("/dashboard/super-admin-package-list", { replace: true });
        }
      });
  };

  return (
    <>
      <div className="payment-box p-4">
        <h2>Customized Pricing</h2>
        <form onSubmit={updatePackageData}>
          <div className="row g-3">
            {/* input */}
            <div className="col col-12 col-lg-6">
              <label className="fw-300 mb-2 cc-input-label form-label">
                Package Name
              </label>
              <input
                type="text"
                name="packageName"
                onChange={handleOnChange}
                defaultValue={packageDetails.packageName}
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
                onChange={handleOnChange}
                defaultValue={packageDetails.packagesPrice}
                className="form-control lm-border"
              />
            </div>
            <div className="col col-12 col-lg-6">
              <label className="fw-300 mb-2 cc-input-label form-label">
                Discount Amount
              </label>
              <input
                type="text"
                name="discountPrice"
                onChange={handleOnChange}
                defaultValue={packageDetails.discountPrice}
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
                onChange={handleOnChange}
                defaultValue={packageDetails.vatAmount}
                className="form-control lm-border"
              />
            </div>

            <div className="col col-12 col-lg-6">
              <label className="fw-300 mb-2 cc-input-label form-label">
                Coupon Code
              </label>
              <input
                type="text"
                name="cuponCode"
                onChange={handleOnChange}
                defaultValue={packageDetails.cuponCode}
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
                onChange={handleOnChange}
                defaultValue={packageDetails.cuponDiscountPrice}
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
                onChange={handleOnChange}
                defaultValue={cuponDate}
                className="form-control lm-border"
              />
            </div>

            {allCountryName && (
              <div className="col col-12 ">
                <label className="fw-300 mb-2 cc-input-label form-label">
                  Select Country
                </label>
                <Select
                  value={allCountryName}
                  options={allCountryOption}
                  styles={customStylesCountry}
                  onChange={handleCountryType}
                  required
                  closeMenuOnSelect={false}
                  isMulti
                />
              </div>
            )}

            {allRegionName && (
              <div className="col col-12 ">
                <label className="fw-300 mb-2 cc-input-label form-label">
                  Select Region
                </label>
                <Select
                  value={allRegionName}
                  options={allRegionOption}
                  styles={customStyles}
                  onChange={handleRegionType}
                  required
                  closeMenuOnSelect={false}
                  isMulti
                />
              </div>
            )}

            <div className="row">
              <div className="col col-12 col-lg-12">
                <label className="fw-300 mb-2 cc-input-label form-label">
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
                        checked={
                          featuresOffered.find(
                            (x) => x === "Journal Articles"
                          ) === "Journal Articles"
                        }
                        onChange={handleOnClick}
                      />
                    </div>
                  </div>
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
                        checked={
                          featuresOffered.find((x) => x === "Case Law") ===
                          "Case Law"
                        }
                        onChange={handleOnClick}
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
                        checked={
                          featuresOffered.find((x) => x === "Insights") ===
                          "Insights"
                        }
                        onChange={handleOnClick}
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
                        checked={
                          featuresOffered.find((x) => x === "Books") === "Books"
                        }
                        onChange={handleOnClick}
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
                        onChange={handleOnClick}
                        checked={
                          featuresOffered.find((x) => x === "Subject Area") ===
                          "Subject Area"
                        }
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
              <button
                type="submit"
                className="btn-cancel"
                onClick={updatePackageData}
              >
                Update
              </button>
            </div>
            <div className="col col-12 col-lg-4 d-none d-lg-block"></div>
          </div>
        </form>
      </div>
    </>
  );
};

export default SuperAdminEditPackageFormComponent;
