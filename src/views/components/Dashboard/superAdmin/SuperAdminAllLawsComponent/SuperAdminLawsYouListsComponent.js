import { React, useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Modal } from "react-bootstrap";
import { getCookie } from "../../../../../utilities/helper";
import useAuth from "../../../../../hooks/useAuth";
import AllLawsByYouModalComponent from "./AllLawsByYouModalComponent";
import MyCLawsModalComponent from "../../contribute/MyContribution/MyCLawsComponent/MyCLawsModalComponent";

const SuperAdminLawsYouListsComponent = () => {
  const [lawsList, setLawsList] = useState([]);
  const { isLoading, setIsLoading } = useAuth();
  useEffect(() => {
    fetch(`${process.env.REACT_APP_API}/api/get-contribute-laws-byadmin`, {
      method: "GET",
      headers: {
        "Content-type": "application/json; charset=UTF-8",
        Authorization: `Bearer ${getCookie("token")}`,
      },
    })
      .then((response) => response.json())
      .then((data) => {
        setLawsList(data.result);
      });
  }, []);

  const navigate = useNavigate();
  //update or paid or free
  const updatePaidOrFreeSatus = (id, status) => {
    setIsLoading(true);
    fetch(`${process.env.REACT_APP_API}/api/update-status-paid-free`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
        authorization: `Bearer ${getCookie("token")}`,
      },
      body: JSON.stringify({
        id: id,
        status: status,
      }),
    })
      .then((response) => response.json())
      .then((data) => {
        if (data) {
          setIsLoading(false);
          navigate("/dashboard/all-laws", { replace: true });
        }
      });
  };

  const [laws, setLaws] = useState(false);

  const closeLaws = () => setLaws(false);
  const showLaws = () => setLaws(true);
  //all applied article code
  const [clickedArticleId, setClickedArticleId] = useState([]);
  const applyArticlesGetId = (e) => {
    let idList = [];
    const articleId = e.target.value;

    let itemName = e.target.name;
    let checked = e.target.checked;
    if (checked === true) {
      if (!idList.includes(articleId)) {
        idList.push(...clickedArticleId, articleId);
        setClickedArticleId(idList);
      }
    } else {
      const index = clickedArticleId.indexOf(articleId);
      const updateedata = [...clickedArticleId];
      if (index !== -1) {
        updateedata.splice(index, 1);
        setClickedArticleId(updateedata);
      }
    }
  };
  //all select button work
  const allSelectButton = (e) => {
    let idList = [];
    var ele = document.getElementsByName("chk");
    for (var i = 0; i < ele.length; i++) {
      if (ele[i].type == "checkbox" && ele[i].checked === false) {
        ele[i].checked = true;
        lawsList.map((data) => {
          if (!idList.includes(data._id)) {
            // ✅ only runs if value not in array
            idList.push(data._id);
          }
        });
        setClickedArticleId(idList);
      } else {
        ele[i].checked = false;
      }
    }
  };

  const applyMultiFreePaidSatus = (status) => {
    setIsLoading(true);
    fetch(`${process.env.REACT_APP_API}/api/update-multi-status`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
        authorization: `Bearer ${getCookie("token")}`,
      },
      body: JSON.stringify({
        clickedArticleId: clickedArticleId,
        status: status,
      }),
    })
      .then((response) => response.json())
      .then((data) => {
        if (data) {
          setIsLoading(false);
          navigate("/dashboard/all-laws", {
            replace: true,
          });
        }
      });
  };
  //apply trash systems in admin
  //send trash single data work
  const sendSingleDataToTrash = (id, status) => {
    setIsLoading(true);
    fetch(`${process.env.REACT_APP_API}/api/send-single-datato-trash`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
        authorization: `Bearer ${getCookie("token")}`,
      },
      body: JSON.stringify({
        id: id,
        status: status,
      }),
    })
      .then((response) => response.json())
      .then((data) => {
        if (data) {
          setIsLoading(false);
          navigate("/dashboard/all-laws", { replace: true });
        }
      });
  };
  //apply multiple trash system action
  const sendMultipleDataTrashSatus = (status) => {
    setIsLoading(true);
    fetch(`${process.env.REACT_APP_API}/api/send-multiple-datato-trash`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
        authorization: `Bearer ${getCookie("token")}`,
      },
      body: JSON.stringify({
        clickedArticleId: clickedArticleId,
        status: status,
      }),
    })
      .then((response) => response.json())
      .then((data) => {
        if (data) {
          setIsLoading(false);
          navigate("/dashboard/all-laws", {
            replace: true,
          });
        }
      });
  };

  const [contributeEdit, setContributeEdit] = useState({});

  const editLaws = (value) => {
    if (value?.countryNameList.length > 0) {
      console.log('value.bookCategory from edit', value.countryNameList[0])
      value.countryNameList = value?.countryNameList[0]
    }

    if (value?.regionNameList.length > 0) {
      console.log('value.regionNameList from edit', value.regionNameList[0])
      value.regionNameList = value?.regionNameList[0]
    }
    setContributeEdit(value)
    setLaws(true)
  }
  return (
    <>
      <div className="row">
        <div className="col col-12 col-lg-12">
          <div className="row mt-3 users-tbl-box">
            <div className="col col-12 col-lg-7">
              <div class="form-check">
                <input
                  onClick={() => allSelectButton()}
                  class="form-check-input"
                  type="checkbox"
                  value=""
                  id="flexCheckDefault2"
                />
                <label
                  class="form-check-label lm-check-label"
                  for="flexCheckDefault2"
                >
                  All Select
                </label>
              </div>
            </div>
            <div className="col col-12 col-lg-5 mt-2">
              <button
                onClick={() => applyMultiFreePaidSatus("free")}
                className="btn btn-info applybtn"
              >
                Apply Free
              </button>
              <button
                onClick={() => applyMultiFreePaidSatus("paid")}
                className="btn btn-info applybtn"
              >
                Apply Paid
              </button>
              <button
                onClick={() => sendMultipleDataTrashSatus(true)}
                className="btn btn-info applybtn"
              >
                Send Trash
              </button>
            </div>
          </div>
        </div>
        <div className="col col-12 col-lg-12">
          <div className="users-tbl-box">
            {lawsList.map((data) => (
              <div className="row arti-tbl mt-3" key={data._id}>
                <div className="col col-12 col-lg-8">
                  <div class="form-check">
                    <input
                      class="form-check-input"
                      type="checkbox"
                      value={data._id}
                      id="flexCheckDefault"
                      name="chk"
                      onClick={applyArticlesGetId}
                    />
                    <label
                      class="form-check-label lm-check-label"
                      for="flexCheckDefault"
                    >
                      <Link to={"/"}>
                        <h3>{data.title} </h3>
                        <span>{data.contributePaidFreeStatus}</span>
                      </Link>
                      <p>
                        {data.countryNameList} · {data.insightCategorey} ·{" "}
                        {new Date(data.createdAt).toLocaleDateString()}
                      </p>
                    </label>
                  </div>
                </div>
                <div className="col col-4 col-lg-1">
                  <button className="btn btn-info" onClick={() => editLaws(data)}>Edit</button>
                </div>
                <div className="col col-4 col-lg-1">
                  <button
                    onClick={() => sendSingleDataToTrash(data._id, true)}
                    className="btn btn-danger"
                  >
                    Trash
                  </button>
                </div>
                <div className="col col-4 col-lg-2">
                  {data.contributePaidFreeStatus !== "paid" ? (
                    <button
                      onClick={() => updatePaidOrFreeSatus(data._id, "paid")}
                      className="btn-paid"
                    >
                      Make Paid
                    </button>
                  ) : (
                    <button
                      onClick={() => updatePaidOrFreeSatus(data._id, "free")}
                      className="btn-paid"
                    >
                      Make Free
                    </button>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
      <Modal
        show={laws}
        onHide={closeLaws}
        aria-labelledby="contained-modal-title-vcenter"
        centered
      >
        <MyCLawsModalComponent setLaws={setLaws} contributeEdit={contributeEdit} />
      </Modal>
    </>
  );
};

export default SuperAdminLawsYouListsComponent;
