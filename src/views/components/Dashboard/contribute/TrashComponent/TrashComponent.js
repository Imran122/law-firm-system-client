import { React, useEffect, useState } from "react";
import { BsChevronLeft, BsChevronRight, BsTrash } from "react-icons/bs";
import { Link, useNavigate } from "react-router-dom";
import Select from "react-select";
import useAuth from "../../../../../hooks/useAuth";
import { getCookie } from "../../../../../utilities/helper";

const TrashComponent = () => {
  const navigate = useNavigate();
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

  const selectActions = [
    { value: "BulkAction", label: "Bulk Action", name: "Action" },
    { value: "Permanent Delete", label: "Permanent Delete", name: "Action" },
    { value: "Restore", label: "Restore", name: "Action" },
  ];

  const selectAllCategorey = [
    { value: "Book", label: "Book", name: "categoreyContent" },
    {
      value: "Journal Article",
      label: "Journal Article",
      name: "categoreyContent",
    },
    { value: "Insight", label: "Insight", name: "categoreyContent" },
    { value: "caselaw", label: "caselaw", name: "categoreyContent" },
    { value: "Laws", label: "Laws", name: "categoreyContent" },
    { value: "Subject Area", label: "Subject Area", name: "categoreyContent" },
  ];
  const [categoreyData, setCategoreyData] = useState([]);
  const [trashItemList, settrashItemList] = useState([]);
  useEffect(() => {
    fetch(`${process.env.REACT_APP_API}/api/get-trash-data-list`, {
      method: "GET",
      headers: {
        "Content-type": "application/json; charset=UTF-8",
        Authorization: `Bearer ${getCookie("token")}`,
      },
    })
      .then((response) => response.json())
      .then((data) => {
        settrashItemList(data.trashItem);
        setCategoreyData(data.trashItem);
      });
  }, []);

  const { isLoading, setIsLoading } = useAuth();
  const deleteTrashSingleItem = (id, trashDataId) => {
    setIsLoading(true);
    fetch(`${process.env.REACT_APP_API}/api/single-trash-data-delete`, {
      method: "delete",
      headers: {
        "Content-Type": "application/json",
        authorization: `Bearer ${getCookie("token")}`,
      },
      body: JSON.stringify({
        id: id,
        trashDataId: trashDataId,
      }),
    })
      .then((response) => response.json())
      .then((data) => {
        if (data) {
          console.log(data);
          const remaining = trashItemList.filter(
            (restData) => restData._id !== id
          );
          settrashItemList(remaining);
          setIsLoading(false);
          navigate("/dashboard/trash", { replace: true });
        }
      });
  };

  //categorey wise filtering

  const filterCategorey = (e) => {
    const value = e.value;
    const res = [...trashItemList];
    let result = [];

    result = res.filter((data) => {
      return data[0].contributeData.contributetype === value;
    });

    setCategoreyData(result);
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

  const [contributIdList, setContributIdList] = useState([]);
  //all select button work
  const allSelectButton = (e) => {
    let idList = [];
    let contributId = [];
    var ele = document.getElementsByName("chk");
    for (var i = 0; i < ele.length; i++) {
      if (ele[i].type == "checkbox" && ele[i].checked === false) {
        ele[i].checked = true;
        trashItemList.map((data) => {
          if (
            !idList.includes(data[0].trashId) &&
            !contributId.includes(data[0].contributeData._id)
          ) {
            // ✅ only runs if value not in array
            contributId.push(data[0].contributeData._id);
            idList.push(data[0].trashId);
          }
        });
        setContributIdList(contributId);
        setClickedArticleId(idList);
      } else {
        ele[i].checked = false;
      }
    }
  };

  const permanentDelete = () => {
    setIsLoading(true);
    fetch(`${process.env.REACT_APP_API}/api/multiple-trash-data-delete`, {
      method: "delete",
      headers: {
        "Content-Type": "application/json",
        authorization: `Bearer ${getCookie("token")}`,
      },
      body: JSON.stringify({
        contributIdList: contributIdList,
        clickedArticleId: clickedArticleId,
      }),
    })
      .then((response) => response.json())
      .then((data) => {
        if (data) {
          /*  console.log(data);
          const remaining = trashItemList.filter(
            (restData) => restData._id !== id
          ); 
          settrashItemList(remaining);*/
          setIsLoading(false);
          navigate("/dashboard/trash", { replace: true });
        }
      });
  };
  // work for resotre trash dataList
  const restoreTrashSingleItem = (id, trashDataId, status, contributetype) => {
    setIsLoading(true);
    fetch(`${process.env.REACT_APP_API}/api/restore-single-trash-data`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
        authorization: `Bearer ${getCookie("token")}`,
      },
      body: JSON.stringify({
        id: id,
        trashDataId: trashDataId,
        status: status,
        contributetype: contributetype,
      }),
    })
      .then((response) => response.json())
      .then((data) => {
        if (data) {
          /* const remaining = trashItemList.filter(
            (restData) => restData._id !== id
          );
          settrashItemList(remaining); */
          setIsLoading(false);
          navigate("/dashboard/trash", { replace: true });
        }
      });
  };

  //restore multiple data
  const restoreMultipleData = (status) => {
    setIsLoading(true);
    fetch(`${process.env.REACT_APP_API}/api/restore-multiple-trash-data`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
        authorization: `Bearer ${getCookie("token")}`,
      },
      body: JSON.stringify({
        contributIdList: contributIdList,
        clickedArticleId: clickedArticleId,
        status: false,
      }),
    })
      .then((response) => response.json())
      .then((data) => {
        if (data) {
          setIsLoading(false);
          navigate("/dashboard/trash", { replace: true });
        }
      });
  };
  return (
    <>
      <div className="row">
        <div className="col col-12 col-lg-12">
          <div className="row mt-3 users-tbl-box">
            {/* <div className="col col-6 col-lg-3">
               <Select
                options={selectActions}
                defaultValue={{ label: "Bulk Action", value: "BulkAction" }}
                styles={customStyles}
              /> 
            </div> */}
            <div className="col col-6 col-lg-2">
              <button
                onClick={permanentDelete}
                className="btn btn-primary btn-sm btn-apply"
              >
                All Delete
              </button>
            </div>
            <div className="col col-6 col-lg-2">
              <button
                onClick={restoreMultipleData}
                className="btn btn-primary btn-sm btn-apply"
              >
                All Restore
              </button>
            </div>
            <div className="col col-6 col-lg-3 filter-sec">
              <Select
                options={selectAllCategorey}
                styles={customStyles}
                onChange={filterCategorey}
              />
            </div>
            <div className="col col-6 col-lg-3 filter-sec">
              <p className="scat">Select Categorey</p>
            </div>
          </div>
        </div>
        <div className="col col-12 col-lg-8">
          <div className="table-responsive elm-table mt-4">
            <table className="table table-borderless align-items-center">
              <thead>
                <tr>
                  <th colSpan={2} className="px-2">
                    <div className="form-check">
                      <input
                        className="form-check-input"
                        type="checkbox"
                        value=""
                        id="flexCheckDefault2"
                        onClick={() => allSelectButton()}
                        name="checkAll"
                      />
                      <label
                        className="form-check-label lm-check-label"
                        htmlFor="flexCheckDefault2"
                      >
                        Title
                      </label>
                    </div>
                  </th>
                  <th>Author</th>
                  <th>Categories</th>

                  <th>Delete</th>
                  <th>Restore</th>
                </tr>
              </thead>
              <tbody>
                {categoreyData.map((data) => (
                  <tr key={data[0]?.trashId}>
                    <td>
                      <div className="form-check">
                        <input
                          className="form-check-input"
                          type="checkbox"
                          value={data[0]?.trashId}
                          id="flexCheckDefault3"
                          name="chk"
                          onClick={applyArticlesGetId}
                        />
                        <label
                          className="form-check-label lm-check-label"
                          htmlFor="flexCheckDefault3"
                        ></label>
                      </div>
                    </td>
                    <td>
                      {data[0]?.contributeData?.title ||
                        "Subject Area Subsidary Principle"}
                    </td>
                    <td>{data[0]?.contributeData?.authorName}</td>
                    <td>
                      {data[0]?.contributeData?.contributetype ||
                        "Subject Area"}
                    </td>

                    <td>
                      <button
                        onClick={() =>
                          deleteTrashSingleItem(
                            data[0]?.contributeData?._id,
                            data[0]?.trashId
                          )
                        }
                        className="btn btn-danger btn-sm"
                      >
                        <BsTrash />
                      </button>
                    </td>

                    <td>
                      <button
                        onClick={() =>
                          restoreTrashSingleItem(
                            data[0]?.contributeData?._id,
                            data[0]?.trashId,
                            false,
                            data[0]?.contributeData?.contributetype
                          )
                        }
                        className="btn btn-success btn-sm"
                      >
                        <BsTrash />
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
            {/* <nav className="d-flex justify-content-center lm-pagination">
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
            </nav> */}
          </div>
        </div>
      </div>
    </>
  );
};

export default TrashComponent;
