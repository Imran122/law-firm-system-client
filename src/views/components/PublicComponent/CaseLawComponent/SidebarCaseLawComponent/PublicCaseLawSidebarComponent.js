import { React, useState } from "react";
import { Link } from "react-router-dom";
import { Offcanvas } from "react-bootstrap";
import { BsFilterSquareFill } from "react-icons/bs";
import { BsSearch } from "react-icons/bs";
import Accordion from "react-bootstrap/Accordion";
import Select from "react-select";
import "../CaseLaw.css";

const PublicCaseLawSidebarComponent = () => {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

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

  const sJournal = [
    { value: "journal1", label: "The Journal of Competitive la..." },
    { value: "journal2", label: "The Journal of Competitive la..." },
    { value: "journal3", label: "The Journal of Competitive la..." },
  ];

  const jyears = [
    { value: "2009", label: "2009" },
    { value: "2010", label: "2010" },
    { value: "2011", label: "2011" },
    { value: "2012", label: "2012" },
    { value: "2013", label: "2013" },
    { value: "2014", label: "2014" },
  ];

  const jvolume = [
    { value: "65", label: "65" },
    { value: "66", label: "66" },
    { value: "67", label: "67" },
    { value: "68", label: "68" },
    { value: "69", label: "69" },
    { value: "70", label: "70" },
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

  return (
    <>
      <div className="col col-12 col-lg-2 ja-sidebar-w ms-4">
        <div className="d-none d-md-block siderbar-filtering ja-sidebar-bg">
          <div className="filter-title">
            <h3>Filter by</h3>
            <Link to={"/books"}>Reset filter</Link>
          </div>
          <div className="book-filter-form mt-4 mb-3">
            {/* <h4>Search terms tags</h4>
            <div className="input-group mb-3">
              <input
                type="text"
                className="form-control lm-border"
                placeholder="Enter search terms"
                aria-label="searchTerms"
                aria-describedby="basic-addon1"
              />
              <button className="input-group-text lm-bg" id="basic-addon1">
                <BsSearch />
              </button>
  </div> */}

            <div className="mb-3">
              <label htmlFor="whatToAdd" className="form-label">
                Country
              </label>
              <Select options={allCountryName} styles={customStyles} />
            </div>

            {/*  <div className="mb-3">
              <div className="row">
                <div className="col col-6">
                  <div className="form-check">
                    <input
                      className="form-check-input"
                      type="radio"
                      name="pageNumber"
                      id="pageNumber1"
                    />
                    <label className="form-check-label" for="pageNumber1">
                      Page Number
                    </label>
                  </div>
                </div>
                <div className="col col-6">
                  <div className="form-check">
                    <input
                      className="form-check-input"
                      type="radio"
                      name="pageNumber"
                      id="pageNumber2"
                    />
                    <label className="form-check-label" for="pageNumber2">
                      Para Number
                    </label>
                  </div>
                </div>
              </div>
              <div className="mt-3">
                <input
                  type="text"
                  placeholder="100"
                  className="form-control lm-border"
                />
              </div>
            </div>*/}

            <div className="mb-3">
              <label className="form-label">Judgement Date</label>
              <input
                type="date"
                placeholder="28 Apr 2022"
                className="form-control lm-border"
              />
            </div>

            <h4>Court</h4>
            <div className="input-group mb-3">
              <input
                type="text"
                className="form-control lm-border"
                placeholder="Search courts"
                aria-label="searchCourt"
                aria-describedby="basic-addon3"
              />
              <button className="input-group-text lm-bg" id="basic-addon3">
                <BsSearch />
              </button>
            </div>

            <div className="form-check mb-2">
              <input
                className="form-check-input lm-check-in"
                type="checkbox"
                defaultValue={""}
                id="all"
              />
              <label className="form-check-label lm-check" htmlFor="all">
                Civil
              </label>
            </div>

            <div className="form-check mb-2">
              <input
                className="form-check-input lm-check-in"
                type="checkbox"
                defaultValue={""}
                id="caCivil"
              />
              <label className="form-check-label lm-check" htmlFor="caCivil">
                Criminal
              </label>
            </div>

            <div className="form-check mb-2">
              <input
                className="form-check-input lm-check-in"
                type="checkbox"
                defaultValue={""}
                id="caCriminal"
              />
              <label className="form-check-label lm-check" htmlFor="caCriminal">
                Environmental
              </label>
            </div>

            <div className="form-check mb-2">
              <input
                className="form-check-input lm-check-in"
                type="checkbox"
                defaultValue={""}
                id="caLand"
              />
              <label className="form-check-label lm-check" htmlFor="caLand">
                Constitutional
              </label>
            </div>

            <div className="form-check mb-2">
              <input
                className="form-check-input lm-check-in"
                type="checkbox"
                defaultValue={""}
                id="caProperty"
              />
              <label className="form-check-label lm-check" htmlFor="caProperty">
                Commercial
              </label>
            </div>

            <div className="form-check mb-2">
              <input
                className="form-check-input lm-check-in"
                type="checkbox"
                defaultValue={""}
                id="caTrafficCourt"
              />
              <label
                className="form-check-label lm-check"
                htmlFor="caTrafficCourt"
              >
                International
              </label>
            </div>

            <div className="form-check mb-2">
              <input
                className="form-check-input lm-check-in"
                type="checkbox"
                defaultValue={""}
                id="caMilCourt"
              />
              <label className="form-check-label lm-check" htmlFor="caMilCourt">
                Community
              </label>
            </div>
            <div className="form-check mb-2">
              <input
                className="form-check-input lm-check-in"
                type="checkbox"
                defaultValue={""}
                id="caMilCourt"
              />
              <label className="form-check-label lm-check" htmlFor="caMilCourt">
                Labour
              </label>
            </div>
            <div className="form-check mb-2">
              <input
                className="form-check-input lm-check-in"
                type="checkbox"
                defaultValue={""}
                id="caMilCourt"
              />
              <label className="form-check-label lm-check" htmlFor="caMilCourt">
                Family
              </label>
            </div>
            <div className="mb-3 mt-3">
              <button className="btn btn-primary">Apply filter</button>
            </div>
            <h4>Judges</h4>
            <div className="input-group mb-3">
              <input
                type="text"
                className="form-control lm-border"
                placeholder="Search judges"
                aria-label="searchJudges"
                aria-describedby="basic-addon4"
              />
              <button className="input-group-text lm-bg" id="basic-addon4">
                <BsSearch />
              </button>
            </div>

            <h4>Counsel</h4>
            <div className="input-group mb-3">
              <input
                type="text"
                className="form-control lm-border"
                placeholder="Counsel"
                aria-label="counsel"
                aria-describedby="basic-addon5"
              />
              <button className="input-group-text lm-bg" id="basic-addon5">
                <BsSearch />
              </button>
            </div>
          </div>
        </div>

        <div className="d-flex align-items-center d-md-none mb-4">
          <button className="border-0 bg-transparent ms-4" onClick={handleShow}>
            <BsFilterSquareFill size={24} /> Filter by
          </button>

          <Offcanvas show={show} onHide={handleClose}>
            <Offcanvas.Header closeButton></Offcanvas.Header>
            <Offcanvas.Body>
              <div className="siderbar-filtering">
                <div className="filter-title">
                  <h3>Filter by</h3>
                  <Link to={"/books"}>Reset filter</Link>
                </div>
                <div className="book-filter-form mt-4 mb-3">
                  <h4>Search terms</h4>
                  <div className="input-group mb-3">
                    <input
                      type="text"
                      className="form-control lm-border"
                      placeholder="Enter search terms"
                      aria-label="searchTerms"
                      aria-describedby="basic-addon1"
                    />
                    <button
                      className="input-group-text lm-bg"
                      id="basic-addon1"
                    >
                      <BsSearch />
                    </button>
                  </div>

                  <div className="mb-3">
                    <label htmlFor="whatToAdd" className="form-label">
                      Country
                    </label>
                    <Select options={allCountryName} styles={customStyles} />
                  </div>

                  <div className="mb-3">
                    <div className="row">
                      <div className="col col-6">
                        <div className="form-check">
                          <input
                            className="form-check-input"
                            type="radio"
                            name="pageNumber"
                            id="pageNumber1"
                          />
                          <label className="form-check-label" for="pageNumber1">
                            Page Number
                          </label>
                        </div>
                      </div>
                      <div className="col col-6">
                        <div className="form-check">
                          <input
                            className="form-check-input"
                            type="radio"
                            name="pageNumber"
                            id="pageNumber2"
                          />
                          <label className="form-check-label" for="pageNumber2">
                            Para Number
                          </label>
                        </div>
                      </div>
                    </div>
                    <div className="mt-3">
                      <input
                        type="text"
                        placeholder="100"
                        className="form-control lm-border"
                      />
                    </div>
                  </div>

                  <div className="mb-3">
                    <label className="form-label">Judgement Date</label>
                    <input
                      type="date"
                      placeholder="28 Apr 2022"
                      className="form-control lm-border"
                    />
                  </div>

                  <h4>Court</h4>
                  <div className="input-group mb-3">
                    <input
                      type="text"
                      className="form-control lm-border"
                      placeholder="Search courts"
                      aria-label="searchCourt"
                      aria-describedby="basic-addon3"
                    />
                    <button
                      className="input-group-text lm-bg"
                      id="basic-addon3"
                    >
                      <BsSearch />
                    </button>
                  </div>

                  <div className="form-check mb-2">
                    <input
                      className="form-check-input lm-check-in"
                      type="checkbox"
                      defaultValue={""}
                      id="all"
                    />
                    <label className="form-check-label lm-check" htmlFor="all">
                      All
                    </label>
                  </div>

                  <div className="form-check mb-2">
                    <input
                      className="form-check-input lm-check-in"
                      type="checkbox"
                      defaultValue={""}
                      id="caCivil"
                    />
                    <label
                      className="form-check-label lm-check"
                      htmlFor="caCivil"
                    >
                      CA, Civil Division
                    </label>
                  </div>

                  <div className="form-check mb-2">
                    <input
                      className="form-check-input lm-check-in"
                      type="checkbox"
                      defaultValue={""}
                      id="caCriminal"
                    />
                    <label
                      className="form-check-label lm-check"
                      htmlFor="caCriminal"
                    >
                      CA, Criminal Division
                    </label>
                  </div>

                  <div className="form-check mb-2">
                    <input
                      className="form-check-input lm-check-in"
                      type="checkbox"
                      defaultValue={""}
                      id="caLand"
                    />
                    <label
                      className="form-check-label lm-check"
                      htmlFor="caLand"
                    >
                      CA, Land Divison
                    </label>
                  </div>

                  <div className="form-check mb-2">
                    <input
                      className="form-check-input lm-check-in"
                      type="checkbox"
                      defaultValue={""}
                      id="caProperty"
                    />
                    <label
                      className="form-check-label lm-check"
                      htmlFor="caProperty"
                    >
                      CA, Property Divison
                    </label>
                  </div>

                  <div className="form-check mb-2">
                    <input
                      className="form-check-input lm-check-in"
                      type="checkbox"
                      defaultValue={""}
                      id="caTrafficCourt"
                    />
                    <label
                      className="form-check-label lm-check"
                      htmlFor="caTrafficCourt"
                    >
                      CA, Traffic Court
                    </label>
                  </div>

                  <div className="form-check mb-2">
                    <input
                      className="form-check-input lm-check-in"
                      type="checkbox"
                      defaultValue={""}
                      id="caMilCourt"
                    />
                    <label
                      className="form-check-label lm-check"
                      htmlFor="caMilCourt"
                    >
                      CA, Military Court
                    </label>
                  </div>

                  <h4>Judges</h4>
                  <div className="input-group mb-3">
                    <input
                      type="text"
                      className="form-control lm-border"
                      placeholder="Search judges"
                      aria-label="searchJudges"
                      aria-describedby="basic-addon4"
                    />
                    <button
                      className="input-group-text lm-bg"
                      id="basic-addon4"
                    >
                      <BsSearch />
                    </button>
                  </div>

                  <h4>Counsel</h4>
                  <div className="input-group mb-3">
                    <input
                      type="text"
                      className="form-control lm-border"
                      placeholder="Counsel"
                      aria-label="counsel"
                      aria-describedby="basic-addon5"
                    />
                    <button
                      className="input-group-text lm-bg"
                      id="basic-addon5"
                    >
                      <BsSearch />
                    </button>
                  </div>
                </div>
              </div>
            </Offcanvas.Body>
          </Offcanvas>
        </div>
      </div>
    </>
  );
};

export default PublicCaseLawSidebarComponent;
