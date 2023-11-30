import React from "react";
import { Link } from "react-router-dom";
import AllBooksByYouDetails from "./BooksDetails/AllBooksByYouDetails";
import "./AllBooks.css";

const AllBooksByYou = () => {
  
  return (
    <div className="row g-0">
      <div className="col col-12">
        <div className="not-dashboard-home-left-col allbooks-div">
          {/* booking request card */}
          <div className="books-tab">
            <Link to={"/dashboard/all-books"} className="active">BOOKS BY YOU</Link>

            <Link to={"/dashboard/all-books/contributor"}>
                BOOKS BY CONTRIBUTORS
            </Link>
          </div>
          <AllBooksByYouDetails/>
        </div>
      </div>
    </div>
  );
};

export default AllBooksByYou;