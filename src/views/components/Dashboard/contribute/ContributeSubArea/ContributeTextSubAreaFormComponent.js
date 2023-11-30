import React, { useEffect, useState } from "react";
import Modal from "react-bootstrap/Modal";
import { useNavigate } from "react-router-dom";
import useAuth from "../../../../../hooks/useAuth";
import { getCookie } from "../../../../../utilities/helper";
import SubAreaDisputeModalComponent from "./SubAreaDisputeModalComponent";
import SubAreaFeatureModalComponent from "./SubAreaFeatureModalComponent";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Select from "react-select";
const ContributeTextSubAreaFormComponent = () => {
  const customStyles = {
    control: (provided, state) => ({
      ...provided,
      background: "#fff",
      borderColor: "#eaecf0",
      boxShadow: state.isFocused ? null : null,
      "&:hover": {
        // Overwrittes the different states of border
        borderColor: "#eaecf0",
      },
    }),
  };

  const allCountryName = [
    //northRegionCountryList
    {
      value: "Algeria",
      label: "Algeria",
      name: "countryNameList",
      link: "North",
    },
    { value: "Egypt", label: "Egypt", name: "countryNameList", link: "North" },
    { value: "Libya", label: "Libya", name: "countryNameList", link: "North" },

    {
      value: "Sahrawi Arab Democratic Republic",
      label: "Sahrawi Arab Democratic Republic",
      name: "countryNameList",
      link: "North",
    },
    {
      value: "Morocco",
      label: "Morocco",
      name: "countryNameList",
      link: "North",
    },
    {
      value: "Tunisia",
      label: "Tunisia",
      name: "countryNameList",
      link: "North",
    },
    //southRegionCountryList
    {
      value: "Angola",
      label: "Angola",
      name: "countryNameList",
      link: "South",
    },
    {
      value: "Botswana",
      label: "Botswana",
      name: "countryNameList",
      link: "South",
    },
    {
      value: "Lesotho",
      label: "Lesotho",
      name: "countryNameList",
      link: "South",
    },
    {
      value: "Eswatini",
      label: "Eswatini",
      name: "countryNameList",
      link: "South",
    },
    {
      value: "Lesotho",
      label: "Lesotho",
      name: "countryNameList",
      link: "South",
    },
    {
      value: "Malawi",
      label: "Malawi",
      name: "countryNameList",
      link: "South",
    },
    {
      value: "Mozambique",
      label: "Mozambique",
      name: "countryNameList",
      link: "South",
    },
    {
      value: "Namibia",
      label: "Namibia",
      name: "countryNameList",
      link: "South",
    },
    {
      value: "South Africa",
      label: "South Africa",
      name: "countryNameList",
      link: "South",
    },
    {
      value: "Zambia",
      label: "Zambia",
      name: "countryNameList",
      link: "South",
    },
    {
      value: "Zimbabwe",
      label: "Zimbabwe",
      name: "countryNameList",
      link: "South",
    },
    //eastRegionCountryList
    {
      value: "Comoros",
      label: "Comoros",
      name: "countryNameList",
      link: "East",
    },
    {
      value: "Djibouti",
      label: "Djibouti",
      name: "countryNameList",
      link: "East",
    },
    {
      value: "Ethiopia",
      label: "Ethiopia",
      name: "countryNameList",
      link: "East",
    },
    {
      value: "Eritrea",
      label: "Eritrea",
      name: "countryNameList",
      link: "East",
    },
    { value: "Kenya", label: "Kenya", name: "countryNameList", link: "East" },
    {
      value: "Madagascar",
      label: "Madagascar",
      name: "countryNameList",
      link: "East",
    },

    {
      value: "Mauritius",
      label: "Mauritius",
      name: "countryNameList",
      link: "East",
    },

    {
      value: "Rwanda",
      label: "Rwanda",
      name: "countryNameList",
      link: "East",
    },
    {
      value: "Seychelles",
      label: "Seychelles",
      name: "countryNameList",
      link: "East",
    },
    {
      value: "Somalia",
      label: "Somalia",
      name: "countryNameList",
      link: "East",
    },
    {
      value: "South Sudan",
      label: "South Sudan",
      name: "countryNameList",
      link: "South",
    },
    { value: "Sudan", label: "Sudan", name: "countryNameList", link: "East" },
    {
      value: "Tanzania",
      label: "Tanzania",
      name: "countryNameList",
      link: "East",
    },
    {
      value: "Uganda",
      label: "Uganda",
      name: "countryNameList",
      link: "East",
    },
    //westRegionCountryList
    { value: "Benin", label: "Benin", name: "countryNameList", link: "West" },
    {
      value: "Burkina Faso",
      label: "Burkina Faso",
      name: "countryNameList",
      link: "West",
    },
    {
      value: "Cape Verde",
      label: "Cape Verde",
      name: "countryNameList",
      link: "West",
    },
    {
      value: "Côte D Ivoire",
      label: "Côte D Ivoire",
      name: "countryNameList",
      link: "West",
    },
    { value: "Gambia", label: "Gambia", name: "countryNameList", link: "West" },
    { value: "Ghana", label: "Ghana", name: "countryNameList", link: "West" },
    { value: "Guinea", label: "Guinea", name: "countryNameList", link: "West" },
    {
      value: "Guinea-Bissau",
      label: "Guinea-Bissau",
      name: "countryNameList",
      link: "West",
    },
    {
      value: "Liberia",
      label: "Liberia",
      name: "countryNameList",
      link: "West",
    },
    { value: "Mali", label: "Mali", name: "countryNameList", link: "West" },
    { value: "Niger", label: "Niger", name: "countryNameList", link: "West" },
    {
      value: "Nigeria",
      label: "Nigeria",
      name: "countryNameList",
      link: "West",
    },
    {
      value: "Senegal",
      label: "Senegal",
      name: "countryNameList",
      link: "West",
    },
    {
      value: "Sierra Leone",
      label: "Sierra Leone",
      name: "countryNameList",
      link: "West",
    },
    { value: "Togo", label: "Togo", name: "countryNameList", link: "West" },
    {
      value: "Mauritania",
      label: "Mauritania",
      name: "countryNameList",
      link: "West",
    },
    //centralRegionCountryList
    {
      value: "Burundi",
      label: "Burundi",
      name: "countryNameList",
      link: "Central",
    },
    {
      value: "Cameroon",
      label: "Cameroon",
      name: "countryNameList",
      link: "Central",
    },
    {
      value: "Central African Republic",
      label: "Central African Republic",
      name: "countryNameList",
      link: "Central",
    },
    { value: "Chad", label: "Chad", name: "countryNameList", link: "Central" },
    {
      value: "Congo Republic - Brazzaville",
      label: "Congo Republic - Brazzaville",
      name: "countryNameList",
      link: "Central",
    },
    {
      value: "Democratic Republic of Congo",
      label: "Democratic Republic of Congo",
      name: "countryNameList",
      link: "Central",
    },
    {
      value: "Equatorial Guinea",
      label: "Equatorial Guinea",
      name: "countryNameList",
      link: "Central",
    },
    {
      value: "Gabon",
      label: "Gabon",
      name: "countryNameList",
      link: "Central",
    },
    {
      value: "São Tomé & Principe",
      label: "São Tomé & Principe",
      name: "countryNameList",
      link: "Central",
    },
  ];

  const allRegionName = [
    { value: "East", label: "East", name: "regionNameList" },
    { value: "West", label: "West", name: "regionNameList" },
    { value: "North", label: "North", name: "regionNameList" },
    { value: "South", label: "south", name: "regionNameList" },
    { value: "Central", label: "Central", name: "regionNameList" },
  ];
  const [dispute, setDisputeShow] = useState(false);
  const [feature, setFeatureShow] = useState(false);

  const disputeClose = () => setDisputeShow(false);
  const disputeShow = () => setDisputeShow(true);

  const featureClose = () => setFeatureShow(false);
  const featureShow = () => setFeatureShow(true);
  const { user, subjectAreaPostData, setSubjectAreaPostData } = useAuth();
  //toast
  const showToastMessage = () => {
    toast.success("data save successfully!", {
      position: toast.POSITION.TOP_RIGHT,
    });
  };
  const handleOnType = (e) => {
    const field = e.target.name;
    const value = e.target.value;
    const newData = { ...subjectAreaPostData };
    newData[field] = value;
    setSubjectAreaPostData(newData);
  };

  const navigate = useNavigate();

  const handleCountryType = (e) => {
    const field = e.name;
    const value = e.value;
    const newData = { ...subjectAreaPostData };
    newData[field] = value;
    setSubjectAreaPostData(newData);
  };

  //depnden condition drop down
  let dependentCountryList = [];

  dependentCountryList = allCountryName.filter(
    (o) => o.link === subjectAreaPostData?.regionNameList
  );

  //depnden condition drop down
  console.log("main", subjectAreaPostData);
  const submitData = (e) => {
    e.preventDefault();

    fetch(`${process.env.REACT_APP_API}/api/subject-area-create`, {
      method: "POST",
      headers: {
        "content-type": "application/json",
        Authorization: `Bearer ${getCookie("token")}`,
      },
      body: JSON.stringify(subjectAreaPostData),
    })
      .then((response) => response.json())
      .then((data) => {
        if (data) {
          //e.target.reset();

          setSubjectAreaPostData({
            disputeResolutionList: [],
            featuredList: [],
          });

          navigate("/dashboard", {
            replace: true,
          });
        }
      });
  };
  return (
    <>
      <div className="add-books-form">
        <ToastContainer />
        <div className="add-articles mb-3">
          <button className="navbar-list-btn-primary" onClick={disputeShow}>
            Add Dispute
          </button>
          <button className="navbar-list-btn-primary" onClick={featureShow}>
            Add Feature
          </button>
          <Modal show={dispute} onHide={disputeClose}>
            <Modal.Header closeButton>
              <Modal.Title>Add Dispute</Modal.Title>
            </Modal.Header>
            <SubAreaDisputeModalComponent setDisputeShow={setDisputeShow} />
          </Modal>

          <Modal show={feature} onHide={featureClose}>
            <Modal.Header closeButton>
              <Modal.Title>Add Feature</Modal.Title>
            </Modal.Header>
            <SubAreaFeatureModalComponent setFeatureShow={setFeatureShow} />
          </Modal>
        </div>
        <form onSubmit={submitData}>
          {/* <div className="mb-3">
            <input
              type="text"
              
              className="form-control lm-border"
              id="exampleTitle"
            
              placeholder="Enter a Feature Title"
            />
          </div> */}
          <div className="mb-3">
            <label htmlFor="bTag" className="form-label">
              Tag Your Region
            </label>
            <Select
              options={allRegionName}
              styles={customStyles}
              onChange={handleCountryType}
            />
          </div>
          <div className="mb-3">
            <label className="form-label">Your Country</label>
            <Select
              options={dependentCountryList}
              styles={customStyles}
              onChange={handleCountryType}
              required
            />
          </div>
          <div className="mb-3">
            <input
              name="subsidaryPrinciple"
              onChange={handleOnType}
              className="form-control lm-border"
              placeholder="Amount Of Subsidary Principle...Ex: 1"
              required
            />
          </div>
          <div className="mb-3">
            <textarea
              name="practiceArea"
              onChange={handleOnType}
              className="form-control lm-border"
              placeholder="Write paractice areas..."
            ></textarea>
          </div>
          <div className="mb-3">
            <textarea
              name="sectors"
              onChange={handleOnType}
              className="form-control lm-border"
              placeholder="Write  sectors..."
            ></textarea>
          </div>
          <div className="mb-3">
            <textarea
              name="resources"
              onChange={handleOnType}
              className="form-control lm-border"
              placeholder="Write  resources..."
            ></textarea>
          </div>
          <div className="row">
            <div className="col col-12 col-lg-4"></div>
            <div className="col col-12 col-lg-4">
              <button onClick={submitData} className="btn-save-content">
                Save content
              </button>
            </div>
            <div className="col col-12 col-lg-4"></div>
          </div>
        </form>
      </div>
    </>
  );
};

export default ContributeTextSubAreaFormComponent;
