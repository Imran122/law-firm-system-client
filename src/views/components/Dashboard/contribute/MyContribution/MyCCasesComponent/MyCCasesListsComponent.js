import { React, useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Modal } from "react-bootstrap";
import { BsChevronLeft, BsChevronRight } from "react-icons/bs";
import "../MyContribution.css";
import { getCookie } from "../../../../../../utilities/helper";
import MyCCasesModalComponent from "./MyCCasesModalComponent";

const MyCCasesListsComponent = () => {
  const [caselawListData, setCaseLawListData] = useState([]);
  useEffect(() => {
    fetch(`${process.env.REACT_APP_API}/api/get-contribute-case-law-by-user`, {
      method: "GET",
      headers: {
        "Content-type": "application/json; charset=UTF-8",
        Authorization: `Bearer ${getCookie("token")}`,
      },
    })
      .then((response) => response.json())
      .then((data) => setCaseLawListData(data.result));
  }, []);

  const [cases, setCases] = useState(false);
  const [contributeEdit, setContributeEdit] = useState({});

  const closeCases = () => setCases(false);
  const editCases = (value) => {
    if (value?.countryNameList instanceof Array) {
      console.log("value.bookCategory from edit", value.countryNameList);
      value.countryNameList = value?.countryNameList[0];
    }

    if (value?.regionNameList instanceof Array) {
      console.log("value.regionNameList from edit", value.regionNameList);
      value.regionNameList = value?.regionNameList[0];
    }

    setContributeEdit(value);
    setCases(true);
  };
  return (
    <>
      <div className="row">
        <div className="col col-12">
          <div className="users-tbl-box">
            {caselawListData.map((data) => (
              <div className="row books-tbl mt-3 br-bottom" key={data._id}>
                <div className="col col-6 col-lg-8">
                  <Link to={"/"}>
                    <h3>{data.title}</h3>
                  </Link>
                  <p> {data.caseBookOverview}</p>
                  <h5>
                    {data.authorName} · {data.court} ·{" "}
                    {new Date(data.createdAt).toLocaleDateString()}
                  </h5>
                </div>
                <div className="col col-3 col-lg-2">
                  {data.contributeRequestStatus === true ? (
                    <div className="lm-alert-success" role="alert">
                      <p>Approved</p>
                    </div>
                  ) : (
                    <div className="lm-alert-reject" role="alert">
                      <p>Pending</p>
                    </div>
                  )}
                </div>

                <div className="col col-3 col-lg-2">
                  <button
                    className="btn btn-info"
                    onClick={() => editCases(data)}
                  >
                    Edit
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>

        <Modal
          show={cases}
          onHide={closeCases}
          aria-labelledby="contained-modal-title-vcenter"
          centered
        >
          <MyCCasesModalComponent
            setCases={setCases}
            contributeEdit={contributeEdit}
          />
        </Modal>
        <div className="col col-12">
          <nav className="d-flex justify-content-center lm-pagination">
            <ul className="pagination">
              <li className="page-item">
                <button className="page-link" aria-label="Previous">
                  <BsChevronLeft />
                </button>
              </li>
              <li className="page-item">
                <button className="page-link lmp-active">1</button>
              </li>
              <li className="page-item">
                <button className="page-link">2</button>
              </li>
              <li className="page-item">
                <button className="page-link">3</button>
              </li>
              <li className="page-item">
                <button className="page-link" aria-label="Next">
                  <BsChevronRight />
                </button>
              </li>
            </ul>
          </nav>
        </div>
      </div>
    </>
  );
};

export default MyCCasesListsComponent;
