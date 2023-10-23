import React, { useState } from "react";
import { MdFavorite, MdFavoriteBorder } from "react-icons/md";
import { Link } from "react-router-dom";
import { BsChevronLeft, BsChevronRight } from "react-icons/bs";
import { getCookie } from "../../../../../utilities/helper";
import axios from "axios";
import useAuth from "../../../../../hooks/useAuth";
const PublicArticleListsData = ({ item }) => {
  const {
    createdAt,
    journalArticleCategorey,
    journalOverview,
    authorName,
    title,
    _id,
    favflag,
  } = item;
  const [favorite, setFavorite] = useState(favflag);
  const { user } = useAuth();
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
      <div className="article-lists-box" key={_id}>
        <div className="article-list">
          <div className="article-fav">
            <button onClick={() => toggleFavorite(_id)}>
              {favorite ? (
                <MdFavorite style={{ color: "#F76631" }} />
              ) : (
                <MdFavoriteBorder style={{ color: "#F76631" }} />
              )}
            </button>
          </div>

          <Link to={`/journal-article/details/${_id}`}>
            <h1>{title}</h1>
          </Link>
          <p>{journalOverview}</p>
          <h3>
            {authorName}· {journalArticleCategorey} · {createdAt}
          </h3>
        </div>
      </div>
    </>
  );
};

export default PublicArticleListsData;
