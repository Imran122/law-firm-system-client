import React, { useEffect, useState } from "react";
import defaultUser from "../../../../../assets/images/default-user-img.png";
import { Link } from "react-router-dom";
import { MdFavorite, MdFavoriteBorder } from "react-icons/md";
import { BsChevronLeft, BsChevronRight } from "react-icons/bs";
import { getCookie } from "../../../../../utilities/helper";
import { BsSearch } from "react-icons/bs";
import useAuth from "../../../../../hooks/useAuth";
import "../Laws.css";
import useContrubteLawsData from "../../../../../hooks/useContrubteLawsData";
import axios from "axios";
import PublicLawsListData from "./PublicLawsListData";
const PublicLawsListsComponent = () => {
  //const toggleFavorite = () => setFavorite((prev) => !prev);
  const [lawsList, setLawsList] = useContrubteLawsData();
  const { searchResult, setSearchResult } = useAuth();

  const handleOnType = (e) => {
    const searchText = e.target.value;
    const field = e.target.name;

    if (searchText === "") {
      setSearchResult(lawsList);
    } else if (field === "countryNameList") {
      const matchCase = lawsList.filter((fo) =>
        fo?.countryNameList[0]?.toLowerCase().includes(searchText.toLowerCase())
      );
      setSearchResult(matchCase);
    } else if (field === "title") {
      const matchCase = lawsList.filter((fo) =>
        fo?.title?.toLowerCase().includes(searchText.toLowerCase())
      );
      setSearchResult(matchCase);
    }
  };

  return (
    <>
      <div className="col col-12 col-lg-8 article-lists-bg">
        <div className="row">
          <div className="col col-12 col-lg-4 lm-book-searchfield  ">
            <div className="input-group mb-3 ">
              <input
                type="text"
                className="form-control lm-border "
                name="countryNameList"
                onChange={handleOnType}
                placeholder="Search by country..."
                aria-label="Search"
                aria-describedby="basic-addon1"
              />
              <button className="input-group-text lm-bg" id="basic-addon1">
                <BsSearch />
              </button>
            </div>
          </div>
          <div className="col col-12 col-lg-4 lm-book-searchfield mb-3">
            <div className="input-group mb-3 ">
              <input
                type="text"
                className="form-control lm-border "
                name="title"
                onChange={handleOnType}
                placeholder="Search by  laws name..."
                aria-label="Search"
                aria-describedby="basic-addon1"
              />
              <button className="input-group-text lm-bg" id="basic-addon1">
                <BsSearch />
              </button>
            </div>
          </div>
        </div>
        {/*  <div className="lists-title-number">
          <h2>
            Number of results: <span>38</span>
          </h2>
        </div> */}
        <div className="row">
          {searchResult.map((data) => (
            <PublicLawsListData key={data._id} item={data}></PublicLawsListData>
          ))}
        </div>

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

export default PublicLawsListsComponent;
