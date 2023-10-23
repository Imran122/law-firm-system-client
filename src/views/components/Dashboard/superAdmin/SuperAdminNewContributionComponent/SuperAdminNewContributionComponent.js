import React, { useEffect, useState } from "react";
import defaultMember from "../../../../../assets/images/default-member.png";
import { getCookie } from "../../../../../utilities/helper";
import useAuth from "../../../../../hooks/useAuth";
import axios from "axios";
import { useNavigate } from "react-router-dom";
const SuperAdminNewContributionComponent = () => {
  const [contributeList, setContributeList] = useState([]);
  const { isLoading, setIsLoading } = useAuth();
  useEffect(() => {
    fetch(`${process.env.REACT_APP_API}/api/get-contribute-list-data`, {
      method: "GET",
      headers: {
        "Content-type": "application/json; charset=UTF-8",
        Authorization: `Bearer ${getCookie("token")}`,
      },
    })
      .then((response) => response.json())
      .then((data) => {
        setContributeList(data.result);
      });
  }, []);
  console.log(contributeList);
  const navigate = useNavigate();
  //delete data
  const deletContribution = (id) => {
    setIsLoading(true);
    fetch(`${process.env.REACT_APP_API}/api/contributed-data-delete`, {
      method: "delete",
      headers: {
        "Content-Type": "application/json",
        authorization: `Bearer ${getCookie("token")}`,
      },
      body: JSON.stringify({
        id: id,
      }),
    })
      .then((response) => response.json())
      .then((data) => {
        if (data) {
          const remaining = contributeList.filter(
            (restData) => restData._id !== id
          );
          setContributeList(remaining);
          setIsLoading(false);
          navigate("/dashboard/new-contributions", { replace: true });
        }
      });
  };
  //update or accept new contributors
  const updateContributionsSatus = (id) => {
    setIsLoading(true);
    fetch(`${process.env.REACT_APP_API}/api/update-contribute-request`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
        authorization: `Bearer ${getCookie("token")}`,
      },
      body: JSON.stringify({
        id: id,
      }),
    })
      .then((response) => response.json())
      .then((data) => {
        if (data) {
          const remaining = contributeList.filter(
            (restData) => restData._id !== id
          );
          setContributeList(remaining);
          setIsLoading(false);
          navigate("/dashboard/new-contributions", { replace: true });
        }
      });
  };
  return (
    <>
      <div className="row g-0">
        <div className="col col-12 col-lg-12">
          <div className="not-dashboard-home-left-col">
            <div className="row">
              <div className="col col-12 col-lg-9">
                <div className="users-tbl-box">
                  {contributeList?.map((data) => (
                    <div className="row users-tbl mt-3" key={data._id}>
                      <div className="col col-3 col-lg-1">
                        <img src={defaultMember} alt="Users" />
                      </div>
                      <div className="col col-9 col-lg-7">
                        <h3>
                          <strong>{data.authorName}</strong> contributed a
                          <strong> {data.contributetype} </strong> name{" "}
                          <strong> {data.title || "subject Area"} </strong> from{" "}
                          <strong>{data.countryNameList}</strong>
                        </h3>
                        <p>
                          at {new Date(data.createdAt).toLocaleDateString()}{" "}
                        </p>
                      </div>
                      <div className="col col-4 col-lg-1 mx-2 mb-2">
                        <button
                          onClick={() => deletContribution(data._id)}
                          className="btn-cancel"
                        >
                          Reject
                        </button>
                      </div>

                      <div className="col col-4 col-lg-1 mx-2 mb-2">
                        <button
                          onClick={() => updateContributionsSatus(data._id)}
                          className="btn-accept"
                        >
                          Accept
                        </button>
                      </div>
                    </div>
                  ))}
                  {contributeList.length === 0 && (
                    <div className="row users-tbl mt-3">
                      <div className="col col-9 col-lg-7">
                        <h3>
                          <strong>No Data</strong> Available
                        </h3>
                      </div>
                    </div>
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default SuperAdminNewContributionComponent;
