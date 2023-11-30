import React from "react";
import { Link } from "react-router-dom";
import "./AllBooks.css";

const AllBooksByContributor = () => {
  
  return (
    <div className="row g-0">
      <div className="col col-12">
        <div className="not-dashboard-home-left-col allbooks-div">
          {/* booking request card */}
          <div className="books-tab">
            <Link to={"/dashboard/all-books"} >BOOKS BY YOU</Link>

            <Link to={"/dashboard/all-books/contributor"} className="active">
                BOOKS BY CONTRIBUTORS
            </Link>
          </div>
          
        </div>
      </div>
    </div>
  );
};

export default AllBooksByContributor;