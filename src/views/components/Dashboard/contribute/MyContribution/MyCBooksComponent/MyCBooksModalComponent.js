import React, { useState } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import { RiFileUploadLine } from "react-icons/ri";
import { Modal } from "react-bootstrap";
import Select from "react-select";
import useAuth from "../../../../../../hooks/useAuth";
import { getCookie, setLocalStorage } from "../../../../../../utilities/helper";

const MyCBooksModalComponent = ({ setBooks,contributeEdit }) => {

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

  const bookCat = [
    { value: "Law", label: "Law", name: "bookCategory" },
    {
      value: "Politics & Relations",
      label: "Politics & Relations",
      name: "bookCategory",
    },
    { value: "History", label: "History", name: "bookCategory" },
    { value: "Economics", label: "Economics", name: "bookCategory" },
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
      boxShadow: state.isFocused ? null : null,
      "&:hover": {
        // Overwrittes the different states of border
        borderColor: "#eaecf0",
      },
    }),
  };

  const { contributeItemContext, setContributeItemContext } = useAuth();

  const [uploadDataForBook, setUploadDataForBook] = useState(contributeEdit);
  const handleCountryType = (e) => {
    const field = e.name;
    const value = e.value;
    const newData = { ...uploadDataForBook };
    newData[field] = value;
    setUploadDataForBook(newData);
  };
  const handleOnType = (e) => {
    const field = e.target.name;
    const value = e.target.value;
    const newData = { ...uploadDataForBook };
    newData[field] = value;
    setUploadDataForBook(newData);
  };
  //depnden condition drop down
  let dependentCountryList = [];

  dependentCountryList = allCountryName.filter(
    (o) => o.link === uploadDataForBook?.regionNameList
  );

  //depnden condition drop down

  const { user, setUser } = useAuth();
  let authorName = user?.firstname;
  let authorId = user?._id;

  const navigate = useNavigate();

  const submitBookUpload = (e) => {
    console.log('uploadDataForBook fro upload',uploadDataForBook)
    // let con = "Book";
    e.preventDefault();
    // const myData = {
    //   ...uploadDataForBook,
    //   contributetype: con,
    // };

    // setUploadDataForBook(myData);

    fetch(`${process.env.REACT_APP_API}/api/book-contribute-update`, {
      method: "PUT",
      headers: {
        "content-type": "application/json",
        Authorization: `Bearer ${getCookie("token")}`,
      },
      body: JSON.stringify(uploadDataForBook),
    })
      .then((response) => response.json())
      .then((data) => {
        console.log('datadatadatadata',data)
        if (data) {
          //e.target.reset();

          setLocalStorage("contributeItem", data.contributeid);
          setContributeItemContext(data);
          setUploadDataForBook("");
          setBooks(false);
          navigate("/dashboard/contribute-text-upload", { replace: true });
        }
      });
  };
  return (
    <>
      <Modal.Body>
        <form onSubmit={submitBookUpload}>
          <div className="col col-12">
            <label className="fw-300 mb-2 cc-input-label form-label">
              Book Title
            </label>
            <input
              type="text"
              name="title"
              onChange={handleOnType}
              className="form-control lm-border"
              value={uploadDataForBook.title}
              required
            />
          </div>
          <div className="col col-12">
            <label className="fw-300 mb-2 cc-input-label form-label">
              Publisher Name
            </label>
            <input
              type="text"
              name="publisherName"
              onChange={handleOnType}
              className="form-control lm-border"
              value={uploadDataForBook.publisherName}
              required
            />
          </div>

          {/*    <div className="mb-3">
          <label htmlFor="conType" className="form-label">
            Contribution Type
          </label>
          <Select
            options={conType}
            styles={customStyles}
            required
            id="conType"
          />
        </div> */}
          <div className="mb-3">
            <label htmlFor="bCat" className="form-label">
              Book Category
            </label>
            <Select
              options={bookCat}
              styles={customStyles}
              onChange={handleCountryType}
              defaultValue={{ label: uploadDataForBook.bookCategory, value: uploadDataForBook.bookCategory }}
              required
              id="conType"
            />
          </div>
          <div className="mt-4 mb-3 lm-file-upload">
            <label htmlFor="file_upload">
              <RiFileUploadLine />
              <h4 className="file-up-txt">
                Drag and Drop or <span>Click</span> to Upload Books
              </h4>
              <input
                type="file"
                name="bookUploadFile"
                id="file_upload"
                accept="image/*,.pdf"
              />
            </label>
          </div>
          <div className="mb-3">
            <label htmlFor="bTag" className="form-label">
              Tag Your Region
            </label>
            <Select
              //closeMenuOnSelect={false}
              // defaultValue={[tags[0], tags[1]]}
              //isMulti
              options={allRegionName}
              styles={customStyles}
              onChange={handleCountryType}
              defaultValue={{ label: uploadDataForBook.regionNameList, value: uploadDataForBook.regionNameList }}

            />
          </div>
          <div className="mb-3">
            <label className="form-label">Your Country</label>
            <Select
              options={dependentCountryList}
              styles={customStyles}
              onChange={handleCountryType}
              defaultValue={{ label: uploadDataForBook.countryNameList, value: uploadDataForBook.countryNameList }}

              required
            />
          </div>
          <button className="btn-next" onClick={submitBookUpload}>
            submit
          </button>
        </form>
      </Modal.Body>
    </>
  );
};

export default MyCBooksModalComponent;