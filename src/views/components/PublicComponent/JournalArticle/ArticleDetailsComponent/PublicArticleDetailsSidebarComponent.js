import React, { useEffect, useState } from "react";
import { AiOutlineLeft } from "react-icons/ai";
import { Link, useParams } from "react-router-dom";
import Accordion from "react-bootstrap/Accordion";
import "./JournalArticleDetails.css";
import { getCookie } from "../../../../../utilities/helper";
import PublicArticleDetailsChapter from "./PublicArticleDetailsChapter";
const PublicArticleDetailsSidebarComponent = ({ setArticleItemContent }) => {
  let { contributeId } = useParams();
  const [hirarcyData, setHirarcyData] = useState(new Map());
  useEffect(() => {
    fetch(
      `${process.env.REACT_APP_API}/api/contribute-content-bycontributeId?contributeId=${contributeId}`,
      {
        method: "GET",
        headers: {
          "Content-type": "application/json; charset=UTF-8",
          "Authorization": `Bearer ${getCookie("token")}`
        },
      }
    )
      .then((response) => response.json())
      .then((data) => {
        data = data.result;
        //console.log('data ', data)
        const temphirarcyData = new Map();
        for (let index = 0; index < data.length; index++) {
          const element = data[index];
          if (temphirarcyData[element.parentcontributecontentId] == undefined) {
            temphirarcyData[element.parentcontributecontentId] = [element];
          } else {
            temphirarcyData[element.parentcontributecontentId].push(element);
          }
        }
        //console.log('temphirarcyData ', temphirarcyData)

        setHirarcyData(temphirarcyData);
      });
  }, [contributeId]);
  return (
    <>
      <div className="col col-12 col-lg-3 mb-4">
        <div className="back-to-ja">
          <AiOutlineLeft />
          <Link to={"/journal-article"}>Back to home</Link>
        </div>
        <div className="mt-3 ja-details-sidebar">
          {hirarcyData["#"] &&
            hirarcyData["#"].map((item) => (
              <PublicArticleDetailsChapter
                key={item._id}
                hirarcyData={hirarcyData}
                item={item}
                setArticleItemContent={setArticleItemContent}
              />
            ))}
        </div>
      </div>
    </>
  );
};

export default PublicArticleDetailsSidebarComponent;
