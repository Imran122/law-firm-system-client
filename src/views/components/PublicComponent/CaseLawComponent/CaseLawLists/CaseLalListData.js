import React, { useState } from "react";
import useAuth from "../../../../../hooks/useAuth";
import { Link } from "react-router-dom";
import { Tab, Tabs } from "react-bootstrap";
import axios from "axios";
import { MdFavorite, MdFavoriteBorder } from "react-icons/md";
import { getCookie } from "../../../../../utilities/helper";
const CaseLalListData = ({ item }) => {
  const { user } = useAuth();
  const { title, _id, favflag } = item;
  //fav update
  const [favorite, setFavorite] = useState(favflag);
  const toggleFavorite = async (c_id) => {
    if (!user?._id) {
      return;
    }
    if (favorite === false) {
      const response = await axios.post(
        `${process.env.REACT_APP_API}/api/favourite-update`,
        {
          userId: user?._id,
          contributeDataId: c_id,
        },

        {
          headers: {
            Authorization: `Bearer ${getCookie("token")}`,
          },
        }
      );

      if (response.status === 200) {
        // setIsLoading(false);
        // navigate("/renter-pay/success", { replace: true });
      }
    } else {
      const response = await axios.delete(
        `${process.env.REACT_APP_API}/api/favourite-delete`,
        {
          headers: {
            Authorization: `Bearer ${getCookie("token")}`,
          },
          data: {
            userId: user?._id,
            contributeDataId: c_id,
          },
        }
      );

      if (response.status === 200) {
      }
    }

    setFavorite((prev) => !prev);
  };
  return (
    <>
      <div className="case-list" key={_id}>
        <div className="article-fav">
          <button onClick={() => toggleFavorite(_id)}>
            {favorite ? (
              <MdFavorite style={{ color: "#F76631" }} />
            ) : (
              <MdFavoriteBorder style={{ color: "#F76631" }} />
            )}
          </button>
        </div>
        <Link to={`/case-law/details/${_id}`}>
          <h1>{title}</h1>
        </Link>

        <h3>
          {item.countryNameList[0]} · {item.createdAt}
        </h3>
        <div className="mt-2 cl-overview-desc">
          <p>
            <strong>Overview: </strong>
            {item.caseBookOverview}
          </p>
        </div>

        <Tabs
          defaultActiveKey="summary"
          id="uncontrolled-tab-example"
          className="mt-3 mb-3 cl-details-tab"
        >
          <Tab eventKey="summary" title="SUMMARY">
            <p>{item?.caseSummary}</p>
          </Tab>
          <Tab eventKey="headnotes" title="HEADNOTES">
            <p>{item?.caseHeadNotes}</p>
          </Tab>
          <Tab eventKey="opinions" title="OPINIONS">
            <p>{item?.caseOpinions}</p>
          </Tab>
        </Tabs>

        <Link className="cl-link" to={"/case-law/details"}>
          Read this full document
        </Link>
      </div>
    </>
  );
};

export default CaseLalListData;
