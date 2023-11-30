import { React, useState } from "react";
import { MdFavorite, MdFavoriteBorder } from "react-icons/md";
import booksImg from "../../../../../assets/images/books-b1.png";
import { Link } from "react-router-dom";
import "../Books.css";
const BooksListCard = ({ item }) => {
  const { authorName, title } = item;
  const [favorite, setFavorite] = useState(false);
  const toggleFavorite = () => setFavorite((prev) => !prev);

  return (
    <>
      <div className="row mb-4 br-bottom">
        <div className="col col-4 col-lg-2">
          <div className="books-img">
            <img className="img-fluid" src={booksImg} alt="book-thumb" />
            {/* like button */}
          </div>
        </div>
        <div className="col col-8 col-lg-10">
          <div className="books-name-title2">
            <Link to={`/books/details/${item._id}`}>
              <h1>{title}</h1>
            </Link>
            <p>{authorName}</p>
          </div>
          <div className="books-fav2">
            <button onClick={toggleFavorite}>
              {favorite ? (
                <MdFavorite style={{ color: "#F76631" }} />
              ) : (
                <MdFavoriteBorder style={{ color: "#F76631" }} />
              )}
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default BooksListCard;
