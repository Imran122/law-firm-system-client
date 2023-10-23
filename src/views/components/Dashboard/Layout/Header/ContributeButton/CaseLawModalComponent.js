import React, { useEffect, useState } from "react";
import { Modal } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import Select from "react-select";
import useAuth from "../../../../../../hooks/useAuth";
import CreatableSelect from "react-select/creatable";
import { getCookie, setLocalStorage } from "../../../../../../utilities/helper";
import "./ContributeButton.css";

const CaseLawModalComponent = ({ setContributeCaseLaw }) => {
  /* const court = [
    { value: "Supreme Court", label: "Supreme Court", name: "court" },
    { value: "Court of Appeal", label: "Court of Appeal", name: "court" },
    { value: "High Court", label: "High Court", name: "court" },
    { value: "Magistrate Court", label: "Magistrate Court", name: "court" },
    { value: "Tribunals", label: "Tribunals", name: "court" },
  ]; */
  const caseClassOption = [
    { value: "Civil", label: "Civil", name: "caseClass" },
    { value: "Criminal", label: "Criminal", name: "caseClass" },
    { value: "Environmental", label: "Environmental", name: "caseClass" },
    { value: "Constitutional", label: "Constitutional", name: "caseClass" },
    { value: "Commercial", label: "Commercial", name: "caseClass" },
    { value: "International", label: "International", name: "caseClass" },
    { value: "Community", label: "Community", name: "caseClass" },
    { value: "Labour", label: "Labour", name: "caseClass" },
    { value: "Family", label: "Family", name: "caseClass" },
    { value: "Others", label: "Others", name: "caseClass" },
  ];
  const createableOptions = [
    { value: "test1", label: "Test1", name: "termsTagName" },
  ];

  const allRegionName = [
    { value: "East", label: "East", name: "regionNameList" },
    { value: "West", label: "West", name: "regionNameList" },
    { value: "North", label: "North", name: "regionNameList" },
    { value: "South", label: "south", name: "regionNameList" },
    { value: "Central", label: "Central", name: "regionNameList" },
  ];
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
  const [uploadDataForCase, setUploadDataForCase] = useState([]);

  //other work
  const handlePicklistValue = (e) => {
    const field = e.name;
    const value = e.value;
    const newData = { ...uploadDataForCase };
    newData[field] = value;
    setUploadDataForCase(newData);
  };
  const handleOnType = (e) => {
    const field = e.target.name;
    const value = e.target.value;
    const newData = { ...uploadDataForCase };
    newData[field] = value;
    setUploadDataForCase(newData);
  };
  //depnden condition drop down
  let dependentCountryList = [];

  dependentCountryList = allCountryName.filter(
    (o) => o.link === uploadDataForCase?.regionNameList
  );

  //depnden condition drop down
  const navigate = useNavigate();
  const { contributeItemContext, setContributeItemContext } = useAuth();

  // handleChange = () => {
  //   console.group('Value Changed');
  //   console.log(newValue);
  //   console.log(`action: ${actionMeta.action}`);
  //   console.groupEnd();
  // };

  const submitCaseUpload = (e) => {
    //

    let con = "caselaw";

    const myData = {
      ...uploadDataForCase,
      contributetype: con,
      caseHeadNotes: "",
      caseSummary: "",
      caseOpinions: "",
      //termsTagName: tags,
    };
    e.preventDefault();

    // console.log('myData ',myData)
    // setUploadDataForBook(myData);

    fetch(`${process.env.REACT_APP_API}/api/caselaw-contribute-create`, {
      method: "POST",
      headers: {
        "content-type": "application/json",
        Authorization: `Bearer ${getCookie("token")}`,
      },
      body: JSON.stringify(myData),
    })
      .then((response) => response.json())
      .then((data) => {
        if (data) {
          //e.target.reset();
          setLocalStorage("contributeItem", data.contributeid);
          setContributeItemContext(data);
          //   setUploadDataForBook("");
          setContributeCaseLaw(false);

          navigate("/dashboard/contribute-text-upload-case-law", {
            replace: true,
          });
        }
      });
  };
  return (
    <>
      <Modal.Body>
        <form onSubmit={submitCaseUpload}>
          <div className="mb-3">
            <label htmlFor="whatToAdd" className="form-label">
              Case Law Title
            </label>
            <input
              type="text"
              name="title"
              onChange={handleOnType}
              className="form-control lm-border"
              required
            />
          </div>
          <div className="mb-3">
            <label htmlFor="whatToAdd" className="form-label">
              Counsel Name
            </label>
            <input
              type="text"
              name="counselName"
              onChange={handleOnType}
              className="form-control lm-border"
              required
            />
          </div>
          <div className="mb-3">
            <label htmlFor="whatToAdd" className="form-label">
              Case Action
            </label>
            <input
              type="text"
              name="caseAction"
              onChange={handleOnType}
              className="form-control lm-border"
              required
            />
          </div>
          <div className="mb-3">
            <label htmlFor="whatToAdd" className="form-label">
              Case Citation
            </label>
            <input
              type="text"
              name="caseCitation"
              onChange={handleOnType}
              className="form-control lm-border"
              required
            />
          </div>
          <div className="mb-3">
            <label htmlFor="whatToAdd" className="form-label">
              Case Parties
            </label>
            <input
              type="text"
              name="caseParties"
              onChange={handleOnType}
              className="form-control lm-border"
              required
            />
          </div>
          <div className="mb-3">
            <label htmlFor="whatToAdd" className="form-label">
              Case Number
            </label>
            <input
              type="text"
              name="caseNumber"
              onChange={handleOnType}
              className="form-control lm-border"
              required
            />
          </div>
          <div className="mb-3">
            <label htmlFor="whatToAdd" className="form-label">
              Judge Name
            </label>
            <input
              type="text"
              name="judgeName"
              onChange={handleOnType}
              className="form-control lm-border"
              required
            />
          </div>
          <div className="mb-3">
            <label htmlFor="whatToAdd" className="form-label">
              Case Law Tag
            </label>
            <input
              type="text"
              name="termsTagName"
              onChange={handleOnType}
              className="form-control lm-border"
              required
            />
          </div>

          <div className="mb-3">
            <label htmlFor="conType" className="form-label">
              Select Case Class
            </label>
            <Select
              options={caseClassOption}
              styles={customStyles}
              onChange={handlePicklistValue}
              required
              id="conType"
            />
          </div>
          <div className="mb-3">
            <label htmlFor="jDate" className="form-label">
              Judgment Date
            </label>

            <input
              type="date"
              name="judgmentDate"
              onChange={handleOnType}
              className="form-control lm-border"
            />
          </div>
          <div className="mb-3">
            <label htmlFor="bTag" className="form-label">
              Select Your Region
            </label>
            <Select
              options={allRegionName}
              styles={customStyles}
              onChange={handlePicklistValue}
            />
          </div>
          <div className="mb-3">
            <label htmlFor="whatToAdd" className="form-label">
              Your Country
            </label>
            <Select
              options={dependentCountryList}
              styles={customStyles}
              onChange={handlePicklistValue}
              required
            />
          </div>
          <div className="mb-3">
            <label htmlFor="bCat" className="form-label">
              Write an overview
            </label>

            <textarea
              className="form-control lm-border"
              name="caseBookOverview"
              onChange={handleOnType}
              placeholder="Write an overview..."
            ></textarea>
          </div>

          <button className="btn-next" onClick={submitCaseUpload}>
            Submit Contribution
          </button>
        </form>
      </Modal.Body>
    </>
  );
};

export default CaseLawModalComponent;
