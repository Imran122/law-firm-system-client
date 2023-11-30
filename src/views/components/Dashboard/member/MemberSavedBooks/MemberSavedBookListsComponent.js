import { React, useEffect, useState } from "react";
import { MdFavorite, MdFavoriteBorder } from "react-icons/md";
import booksImg from "../../../../../assets/images/books-b1.png";
import { Link, useNavigate } from "react-router-dom";
import { getCookie } from "../../../../../utilities/helper";
import useAuth from "../../../../../hooks/useAuth";
import axios from "axios";
const MemberSavedBookListsComponent = () => {
  const { user, isLoading, setIsLoading } = useAuth();

  // const toggleFavorite = () => setFavorite((prev) => !prev);
  const [favBookData, setFavBookData] = useState([]);
  const [favorite, setFavorite] = useState(true);
  useEffect(() => {
    fetch(`${process.env.REACT_APP_API}/api/favourite-all-book-info`, {
      method: "GET",
      headers: {
        "Content-type": "application/json; charset=UTF-8",
        Authorization: `Bearer ${getCookie("token")}`,
      },
    })
      .then((response) => response.json())
      .then((data) => {
        setFavBookData(data.favContributelist);
      });
  }, []);

  const navigate = useNavigate();
  const toggleFavorite = async (id) => {
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
      const remaining = favBookData.filter((restData) => restData._id !== id);

      setFavBookData(remaining);
      setIsLoading(false);
      navigate("/dashboard/saved-books", { replace: true });
    }

    //setFavorite((prev) => !prev);
  };

  return (
    <>
      {favBookData?.map((data) => (
        <div className="row mb-4 br-bottom" key={data._id}>
          <div className="col col-3 col-lg-2">
            <div className="books-img">
              <img className="img-fluid" src={booksImg} alt="book-thumb" />
              {/* like button */}
            </div>
          </div>
          <div className="col col-5 col-lg-8">
            <div className="books-name-title2">
              <Link to={`/books/details/`}>
                <h1>{data?.MyFavData[0].title}</h1>
              </Link>
              <p>Author Name: {data?.MyFavData[0].authorName}</p>
              <p>Categorey: {data?.MyFavData[0].bookCategory}</p>
            </div>
          </div>
          <div className="col col-4 col-lg-2">
            <div className="books-fav2">
              <button onClick={() => toggleFavorite(data._id)}>
                {favorite ? (
                  <MdFavorite style={{ color: "#F76631" }} />
                ) : (
                  <MdFavoriteBorder style={{ color: "#F76631" }} />
                )}
              </button>
            </div>
          </div>
        </div>
      ))}
    </>
  );
};

export default MemberSavedBookListsComponent;
