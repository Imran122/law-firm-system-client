import { React, useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { BsChevronLeft, BsChevronRight } from "react-icons/bs";
import { Modal } from "react-bootstrap";
import "../MyContribution.css";
import { getCookie } from "../../../../../../utilities/helper";
import MyCInsightsModalComponent from "./MyCInsightsModalComponent";

const MyCInsightListsComponent = () => {
  const [insightListData, setInsightListData] = useState([]);
  useEffect(() => {
    fetch(`${process.env.REACT_APP_API}/api/get-contribute-insight-by-user`, {
      method: "GET",
      headers: {
        "Content-type": "application/json; charset=UTF-8",
        Authorization: `Bearer ${getCookie("token")}`,
      },
    })
      .then((response) => response.json())
      .then((data) => setInsightListData(data.result));
  }, []);

  const [insights, setInsights] = useState(false);

  const closeInsights = () => setInsights(false);
  const [contributeEdit, setContributeEdit] = useState({});

  const editInsights = (value) => {
    if (value?.countryNameList.length > 0) {
      console.log("value.bookCategory from edit", value.countryNameList[0]);
      value.countryNameList = value?.countryNameList[0];
    }

    if (value?.regionNameList.length > 0) {
      console.log("value.regionNameList from edit", value.regionNameList[0]);
      value.regionNameList = value?.regionNameList[0];
    }
    setContributeEdit(value);
    setInsights(true);
  };
  return (
    <>
      <div className="row">
        <div className="col col-12">
          <div className="users-tbl-box">
            {insightListData.map((data) => (
              <div className="row books-tbl mt-3 br-bottom" key={data._id}>
                <div className="col col-6 col-lg-8">
                  <Link to={"/"}>
                    <h3>{data.title}</h3>
                  </Link>
                  <p> {data.insightOverview}</p>
                  <h5>
                    {data.authorName} · {data.insightCategorey} ·{" "}
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
                    onClick={() => editInsights(data)}
                  >
                    Edit
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
        <Modal
          show={insights}
          onHide={closeInsights}
          aria-labelledby="contained-modal-title-vcenter"
          centered
        >
          <MyCInsightsModalComponent
            setInsights={setInsights}
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

export default MyCInsightListsComponent;
