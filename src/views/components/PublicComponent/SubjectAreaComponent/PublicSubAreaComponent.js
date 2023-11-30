import React, { useEffect, useState } from "react";
import { FaAngleRight } from "react-icons/fa";
import { Link } from "react-router-dom";
import { getCookie } from "../../../../utilities/helper";
import "./SubArea.css";

const PublicSubAreaComponent = () => {
  const [subjectListData, setSubjectListData] = useState([]);
  useEffect(() => {
    fetch(`${process.env.REACT_APP_API}/api/subject-list-data`, {
      method: "GET",
      headers: {
        "Content-type": "application/json; charset=UTF-8",
        Authorization: `Bearer ${getCookie("token")}`,
      },
    })
      .then((response) => response.json())
      .then((data) => setSubjectListData(data.result));
  }, []);

  return (
    <>
      <div className="container">
        <div className="row mt-4">
          {subjectListData.map((data) => (
            <div className="col col-12 col-md-3" key={data._id}>
              <Link to={`/subject-area/details/${data._id}`}>
                <div className="sub-area-slider-box">
                  <div className="sub-area-slider-txt">
                    <h2>Dispute Resolution</h2>
                    <p>{data.subsidaryPrinciple} Subsidiary principle</p>
                  </div>
                  <div className="sub-area-slider-icon">
                    <FaAngleRight />
                  </div>
                </div>
              </Link>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default PublicSubAreaComponent;
