import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { MdFavorite, MdFavoriteBorder } from "react-icons/md";
import { BsChevronLeft, BsChevronRight } from "react-icons/bs";
import "../JournalArticle.css";
import { getCookie } from "../../../../../utilities/helper";
import useAuth from "../../../../../hooks/useAuth";
import axios from "axios";
import PublicArticleListsData from "./PublicArticleListsData";

const PublicArticleListsComponent = () => {
  const { user } = useAuth();
  //const toggleFavorite = () => setFavorite((prev) => !prev);
  const [journalArticleList, setJournalArticleList] = useState([]);
  useEffect(() => {
    fetch(`${process.env.REACT_APP_API}/api/get-journal-article-list`, {
      method: "GET",
      headers: {
        "Content-type": "application/json; charset=UTF-8",
        Authorization: `Bearer ${getCookie("token")}`,
      },
    })
      .then((response) => response.json())
      .then((data) => {
        if (user?._id) {
          fetch(
            `${process.env.REACT_APP_API}/api/favourite-info-content/${user._id}`,
            {
              method: "GET",
              headers: {
                "Content-type": "application/json; charset=UTF-8",
                Authorization: `Bearer ${getCookie("token")}`,
              },
            }
          )
            .then((response) => response.json())
            .then((favdata) => {
              favdata = favdata.favContributelist;

              for (let index = 0; index < data.result.length; index++) {
                data.result[index]["favflag"] = false;

                if (favdata.some((fav) => fav._id === data.result[index]._id)) {
                  data.result[index]["favflag"] = true;
                }
              }

              setJournalArticleList(data.result);
            });
        } else {
          setJournalArticleList(data.result);
        }
      });
  }, []);

  return (
    <>
      <div className="col col-12 col-lg-8 article-lists-bg">
        <div className="lists-title-number">
          <h2>
            Number of results: <span>38</span>
          </h2>
        </div>
        {journalArticleList.map((data) => (
          <PublicArticleListsData
            key={data._id}
            item={data}
          ></PublicArticleListsData>
        ))}

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

      <div className="col col-12 col-lg-2 d-none"></div>
    </>
  );
};

export default PublicArticleListsComponent;
