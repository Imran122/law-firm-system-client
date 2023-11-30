import { React, useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { getCookie } from "../../../../../utilities/helper";
import useAuth from "../../../../../hooks/useAuth";
const SuperAdminSubAreaYouListsComponent = () => {
  const [lawsList, setLawsList] = useState([]);
  const { isLoading, setIsLoading } = useAuth();
  useEffect(() => {
    fetch(
      `${process.env.REACT_APP_API}/api/get-contribute-subject-area-byadmin`,
      {
        method: "GET",
        headers: {
          "Content-type": "application/json; charset=UTF-8",
          Authorization: `Bearer ${getCookie("token")}`,
        },
      }
    )
      .then((response) => response.json())
      .then((data) => {
        setLawsList(data.result);
      });
  }, []);

  const navigate = useNavigate();
  //update or paid or free
  const updatePaidOrFreeSatus = (id, status) => {
    setIsLoading(true);
    fetch(`${process.env.REACT_APP_API}/api/update-sub-area-single-status`, {
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
          navigate("/dashboard/all-subarea", { replace: true });
        }
      });
  };
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
    fetch(`${process.env.REACT_APP_API}/api/update-sub-area-multi-status`, {
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
          navigate("/dashboard/all-subarea", { replace: true });
        }
      });
  };

  //apply trash systems in admin
  //send trash single data work
  const sendSingleDataToTrash = (id, status) => {
    setIsLoading(true);
    fetch(`${process.env.REACT_APP_API}/api/send-single-subject-datato-trash`, {
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
          navigate("/dashboard/all-subarea", { replace: true });
        }
      });
  };

  //apply multiple trash system action
  const sendMultipleDataTrashSatus = (status) => {
    setIsLoading(true);
    fetch(
      `${process.env.REACT_APP_API}/api/send-subjectarea-multiple-datato-trash`,
      {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
          authorization: `Bearer ${getCookie("token")}`,
        },
        body: JSON.stringify({
          clickedArticleId: clickedArticleId,
          status: status,
        }),
      }
    )
      .then((response) => response.json())
      .then((data) => {
        if (data) {
          setIsLoading(false);
          navigate("/dashboard/all-subarea", {
            replace: true,
          });
        }
      });
  };
  const [subArea, setSubArea] = useState(false);

  const { user, subjectAreaPostData, setSubjectAreaPostData } = useAuth();
  const editSubArea = (value) => {
    if (value?.countryNameList.length > 0) {
      console.log("value.bookCategory from edit", value.countryNameList[0]);
      value.countryNameList = value?.countryNameList[0];
    }

    if (value?.regionNameList.length > 0) {
      console.log("value.regionNameList from edit", value.regionNameList[0]);
      value.regionNameList = value?.regionNameList[0];
    }
    // setContributeEdit(value)
    setSubjectAreaPostData(value);
    setSubArea(true);
    // console.log('editSubAreaeditSubArea',value)
    navigate("/dashboard/contribute-text-update-sub-area/" + value._id, {
      replace: true,
    });
  };
  return (
    <>
      <div className="row">
        <div className="col col-12 col-lg-12">
          <div className="row mt-3 users-tbl-box">
            <div className="col col-12 col-lg-7">
              <div className="form-check">
                <input
                  onClick={() => allSelectButton()}
                  className="form-check-input"
                  type="checkbox"
                  value=""
                  id="flexCheckDefault2"
                />
                <label
                  className="form-check-label lm-check-label"
                  htmlFor="flexCheckDefault2"
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
                  <div className="form-check">
                    <input
                      className="form-check-input"
                      type="checkbox"
                      value={data._id}
                      id="flexCheckDefault"
                      name="chk"
                      onClick={applyArticlesGetId}
                    />
                    <label
                      className="form-check-label lm-check-label"
                      htmlFor="flexCheckDefault"
                    >
                      <Link to={"/"}>
                        <h3>
                          Dispute Resolution {data.subsidaryPrinciple} Subsidary
                          Principle
                        </h3>
                        <span>{data.contributePaidFreeStatus}</span>
                      </Link>
                      <p>
                        {data.countryNameList} · Subject Area Data .
                        {new Date(data.createdAt).toLocaleDateString()}
                      </p>
                    </label>
                  </div>
                </div>
                <div className="col col-4 col-lg-1">
                  <button
                    className="btn btn-info"
                    onClick={() => editSubArea(data)}
                  >
                    Edit
                  </button>
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
    </>
  );
};

export default SuperAdminSubAreaYouListsComponent;
