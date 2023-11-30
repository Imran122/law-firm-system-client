import axios from "axios";
import { React, useEffect, useState } from "react";
import { BsChevronLeft, BsChevronRight } from "react-icons/bs";
import { Link, useNavigate } from "react-router-dom";
import useAuth from "../../../../../hooks/useAuth";
import { getCookie } from "../../../../../utilities/helper";
import MemberSavedJournalArtCardComponent from "./MemberSavedJournalArtCardComponent";
const MemberSavedJournalArtListsComponent = () => {
  const { user, isLoading, setIsLoading } = useAuth();

  // const toggleFavorite = () => setFavorite((prev) => !prev);
  const [favContentData, setFavContentData] = useState([]);
  const [favorite, setFavorite] = useState(true);
  useEffect(() => {
    fetch(`${process.env.REACT_APP_API}/api/favourite-all-content-info`, {
      method: "GET",
      headers: {
        "Content-type": "application/json; charset=UTF-8",
        Authorization: `Bearer ${getCookie("token")}`,
      },
    })
      .then((response) => response.json())
      .then((data) => {
        setFavContentData(data.favContributelist);
      });
  }, []);

  return (
    <>
      <div className="article-lists-box">
        {favContentData?.map((data) => (
          <MemberSavedJournalArtCardComponent
            item={data}
            key={data._id}
            setFavContentData={setFavContentData}
            favContentData={favContentData}
          />
        ))}
      </div>
      <div className="row mb-4">
        <div className="col col-12">
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
      </div>
    </>
  );
};

export default MemberSavedJournalArtListsComponent;
