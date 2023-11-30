import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { Tab, Tabs } from "react-bootstrap";
import Select from "react-select";
import { MdFavorite, MdFavoriteBorder } from "react-icons/md";
import { BsSearch } from "react-icons/bs";
import { BsChevronLeft, BsChevronRight } from "react-icons/bs";
import "../CaseLaw.css";
import { getCookie } from "../../../../../utilities/helper";
import useAuth from "../../../../../hooks/useAuth";
import axios from "axios";
import CaseLalListData from "./CaseLalListData";

const CaseLawListsComponent = () => {
  const { user } = useAuth();
  //const toggleFavorite = () => setFavorite((prev) => !prev);
  const options = [
    { value: "", label: "Sources" },
    { value: "2", label: "Sources 2" },
    { value: "3", label: "Sources 3" },
    { value: "4", label: "Sources 4" },
  ];

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
  const [caseLawList, setCaseLawList] = useState([]);
  const [searchResult, setSearchResult] = useState([]);

  useEffect(() => {
    fetch(`${process.env.REACT_APP_API}/api/get-contribute-caselase-list`, {
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

              setCaseLawList(data.result);
              setSearchResult(data.result);
            });
        } else {
          setCaseLawList(data.result);
          setSearchResult(data.result);
        }
      });
  }, []);

  // search work

  const handleOnType = (e) => {
    const searchText = e.target.value;

    const matchCase = caseLawList.filter((fo) =>
      fo?.title?.toLowerCase().includes(searchText.toLowerCase())
    );

    if (searchText === "") {
      setSearchResult(caseLawList);
    } else {
      setSearchResult(matchCase);
    }
  };

  return (
    <>
      <div className="col col-12 col-lg-8 case-lists-bg">
        <div className="row">
          <div className="col col-12 col-lg-4 lm-book-searchfield  ">
            <div className="input-group mb-3 ">
              <input
                type="text"
                className="form-control lm-border "
                onChange={handleOnType}
                placeholder="Search by case name..."
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
                onChange={handleOnType}
                placeholder="Search by terms tag..."
                aria-label="Search"
                aria-describedby="basic-addon1"
              />
              <button className="input-group-text lm-bg" id="basic-addon1">
                <BsSearch />
              </button>
            </div>
          </div>
        </div>
        <div className="case-lists-box">
          {searchResult.map((data) => (
            <CaseLalListData key={data._id} item={data}></CaseLalListData>
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

export default CaseLawListsComponent;
