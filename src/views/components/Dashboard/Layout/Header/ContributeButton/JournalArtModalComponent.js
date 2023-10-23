import React, { useState } from "react";
import { Modal } from "react-bootstrap";
import { RiFileUploadLine } from "react-icons/ri";
import { useNavigate } from "react-router-dom";
import Select from "react-select";
import useAuth from "../../../../../../hooks/useAuth";
import { getCookie, setLocalStorage } from "../../../../../../utilities/helper";
import "./ContributeButton.css";

const JournalArtModalComponent = ({ setContributeJournalArticle }) => {
  const artCat = [
    {
      value: "Research Article",
      label: "Research Article",
      name: "journalArticleCategorey",
    },
    {
      value: "Book Review",
      label: "Book Review",
      name: "journalArticleCategorey",
    },
    {
      value: "Case Report",
      label: "Case Report",
      name: "journalArticleCategorey",
    },
    { value: "Editorial", label: "ditorial", name: "journalArticleCategorey" },
    {
      value: "Brief Report",
      label: "Brief Report",
      name: "journalArticleCategorey",
    },
    {
      value: "Books Received",
      label: "Books Received",
      name: "journalArticleCategorey",
    },

    { value: "Others", label: "Others", name: "journalArticleCategorey" },
  ];
  const subjectAreaArticle = [
    {
      value: "Comparitive Law",
      label: "Comparitive Law",
      name: "subjectAreaForArticle",
    },
    {
      value: "Competition Law",
      label: "Competition Law",
      name: "subjectAreaForArticle",
    },
    { value: "Family Law", label: "Family Law", name: "subjectAreaForArticle" },

    { value: "Others", label: "Others", name: "subjectAreaForArticle" },
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
  const { contributeItemContext, setContributeItemContext } = useAuth();
  const [uploadDataForJournalArticle, setUploadDataForJournalArticle] =
    useState([]);
  const handleOptionType = (e) => {
    const field = e.name;
    const value = e.value;
    const newData = { ...uploadDataForJournalArticle };
    newData[field] = value;
    setUploadDataForJournalArticle(newData);
  };
  const handleOnType = (e) => {
    const field = e.target.name;
    const value = e.target.value;
    const newData = { ...uploadDataForJournalArticle };
    newData[field] = value;
    setUploadDataForJournalArticle(newData);
  };
  //depnden condition drop down
  let dependentCountryList = [];

  dependentCountryList = allCountryName.filter(
    (o) => o.link === uploadDataForJournalArticle?.regionNameList
  );

  //depnden condition drop down
  const { user, setUser } = useAuth();
  let authorName = user?.firstname;
  let authorId = user?._id;

  const navigate = useNavigate();
  const submitJournalUpload = (e) => {
    let con = "Journal Article";
    e.preventDefault();
    const myData = {
      ...uploadDataForJournalArticle,
      contributetype: con,
    };

    setUploadDataForJournalArticle(myData);

    fetch(`${process.env.REACT_APP_API}/api/book-contribute-create`, {
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
          console.log("datadatadatadata", data);
          //e.target.reset();

          setLocalStorage("contributeItem", data.contributeid);
          setContributeItemContext(data);
          setUploadDataForJournalArticle("");
          setContributeJournalArticle(false);
          navigate("/dashboard/contribute-text-upload", { replace: true });
        }
      });
  };
  return (
    <>
      <Modal.Body>
        <form onSubmit={submitJournalUpload}>
          <div className="col col-12">
            <label className="fw-300 mb-2 cc-input-label form-label">
              Journal Article Title
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
            <label htmlFor="bTag" className="form-label">
              Tag Your Region
            </label>
            <Select
              options={allRegionName}
              onChange={handleOptionType}
              styles={customStyles}
            />
          </div>
          <div className="mb-3">
            <label className="form-label">Your Country</label>
            <Select
              options={dependentCountryList}
              onChange={handleOptionType}
              styles={customStyles}
              required
            />
          </div>
          <div className="mb-3">
            <label htmlFor="bCat" className="form-label">
              Article Category
            </label>
            <Select
              options={artCat}
              styles={customStyles}
              onChange={handleOptionType}
              required
              id="conType"
            />
          </div>

          <div className="mb-3">
            <label htmlFor="bTag" className="form-label">
              Select Subject Area In Article
            </label>
            <Select
              options={subjectAreaArticle}
              onChange={handleOptionType}
              styles={customStyles}
            />
          </div>
          <div className="mb-3">
            <label htmlFor="whatToAdd" className="form-label">
              Journal Volume Number
            </label>
            <input
              type="text"
              name="journalVolumeNumber"
              onChange={handleOnType}
              className="form-control lm-border"
              required
            />
          </div>
          <div className="mb-3">
            <label htmlFor="whatToAdd" className="form-label">
              Journal Issue
            </label>
            <input
              type="text"
              name="journalIssue"
              onChange={handleOnType}
              className="form-control lm-border"
              required
            />
          </div>
          <div className="mb-3">
            <label htmlFor="whatToAdd" className="form-label">
              Journal Keyword Add
            </label>
            <input
              type="text"
              name="journalkeyword"
              onChange={handleOnType}
              className="form-control lm-border"
              required
            />
          </div>
          <div className="mb-3">
            <label htmlFor="jDate" className="form-label">
              Enter Year Of The Journal
            </label>

            <input
              type="text"
              onChange={handleOnType}
              name="journalYearForCitation"
              className="form-control lm-border"
            />
          </div>

          <div className="mb-3">
            <label htmlFor="bCat" className="form-label">
              Write an overview
            </label>

            <textarea
              className="form-control lm-border"
              name="journalOverview"
              onChange={handleOnType}
              placeholder="Write an overview..."
            ></textarea>
          </div>
          <button onClick={submitJournalUpload} className="btn-next">
            Submit
          </button>
        </form>
      </Modal.Body>
    </>
  );
};

export default JournalArtModalComponent;
