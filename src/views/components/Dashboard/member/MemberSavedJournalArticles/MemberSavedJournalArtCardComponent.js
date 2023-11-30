import axios from "axios";
import { React, useState } from "react";
import { MdFavorite, MdFavoriteBorder } from "react-icons/md";
import { Link, useNavigate } from "react-router-dom";
import useAuth from "../../../../../hooks/useAuth";
import { getCookie } from "../../../../../utilities/helper";
const MemberSavedJournalArtCardComponent = ({
  item,
  setFavContentData,
  favContentData,
}) => {
  const { MyFavData } = item;
  const { user, isLoading, setIsLoading } = useAuth();

  const [favorite, setFavorite] = useState(true);
  //const toggleFavorite = () => setFavorite((prev) => !prev);
  const navigate = useNavigate();
  const toggleFavorite = async (id) => {
    setIsLoading(true);
    if (!user?._id) {
      return;
    }

    const response = await axios.delete(
      `${process.env.REACT_APP_API}/api/favourite-delete-dashboard`,
      {
        headers: {
          Authorization: `Bearer ${getCookie("token")}`,
        },
        data: {
          userId: user?._id,
          _id: id,
        },
      }
    );

    if (response.status === 200) {
      const remaining = favContentData.filter(
        (restData) => restData._id !== id
      );

      setFavContentData(remaining);
      setIsLoading(false);
      navigate("/dashboard/saved-contents", { replace: true });
    }

    //setFavorite((prev) => !prev);
  };
  return (
    <>
      <div className="row mb-4 br-bottom">
        <div className="col col-12">
          <div className="article-list">
            <div className="article-fav">
              <button onClick={() => toggleFavorite(item._id)}>
                {favorite ? (
                  <MdFavorite style={{ color: "#F76631" }} />
                ) : (
                  <MdFavoriteBorder style={{ color: "#F76631" }} />
                )}
              </button>
            </div>

            <Link to={`/journal-article/details/`}>
              <h1>{item?.MyFavData[0]?.title}</h1>
            </Link>
            <p>
              {item?.MyFavData[0]?.journalOverview ||
                item?.MyFavData[0]?.lawsOverview ||
                item?.MyFavData[0]?.caseBookOverview ||
                item?.MyFavData[0]?.insightOverview}
            </p>
            <h3>
              {item?.MyFavData[0]?.authorName}·{" "}
              {item?.MyFavData[0]?.contributetype}·{" "}
              {new Date(item?.MyFavData[0]?.createdAt).toLocaleDateString()}
            </h3>
          </div>
        </div>
        <div className="col col-12 col-lg-2 d-none"></div>
      </div>
    </>
  );
};

export default MemberSavedJournalArtCardComponent;
