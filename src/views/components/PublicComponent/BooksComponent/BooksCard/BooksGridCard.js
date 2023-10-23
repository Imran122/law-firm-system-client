import { React, useState } from "react";
import { MdFavorite, MdFavoriteBorder } from "react-icons/md";
import booksImg from "../../../../../assets/images/books-b1.png";
import { Link, useNavigate } from "react-router-dom";
import "../Books.css";
import useAuth from "../../../../../hooks/useAuth";
import { getCookie } from "../../../../../utilities/helper";
import axios from "axios";
const BooksGridCard = ({ item }) => {
  const { authorName, title, _id, favflag } = item;

  const [favorite, setFavorite] = useState(favflag);

  //const toggleFavorite = () => setFavorite((prev) => !prev);

  const { user } = useAuth();
  const navigate = useNavigate();
  const toggleFavorite = async () => {
    if (!user?._id) {
      return;
    }
    if (favorite === false) {
      const response = await axios.post(
        `${process.env.REACT_APP_API}/api/favourite-update`,
        {
          userId: user?._id,
          contributeDataId: _id,
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
            contributeDataId: _id,
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
      <div className="col col-12 col-lg-4 mb-4 br-right" key={_id}>
        <div className="d-flex justify-content-center align-items-center flex-wrap books-card">
          <div className="books-img">
            <img className="img-fluid" src={booksImg} alt="book-thumb" />
            {/* like button */}
          </div>
          <div className="books-fav">
            <button onClick={toggleFavorite}>
              {favorite ? (
                <MdFavorite style={{ color: "#F76631" }} />
              ) : (
                <MdFavoriteBorder style={{ color: "#F76631" }} />
              )}
            </button>
          </div>
        </div>
        <div className="d-flex justify-content-center align-items-center flex-wrap mt-2">
          <div className="books-name-title">
            <Link to={`/books/details/${item._id}`}>
              <h1>{title}</h1>
            </Link>
            <p>{authorName}</p>
          </div>
        </div>
      </div>
    </>
  );
};

export default BooksGridCard;
