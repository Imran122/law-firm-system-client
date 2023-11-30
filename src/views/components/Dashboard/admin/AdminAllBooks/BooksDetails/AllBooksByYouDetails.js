import React from "react";
import booksImg from "../../../../../../assets/images/books-b1.png";
import "../AllBooks.css";

const AllBooksByYouDetails = (props) => {
 
  return (
  <>
    <div className="p-4 mt-4">
      <div className="row mb-3">
        {Array.from({ length: 8 }, (_, i) => 
            <div className="row mb-4 br-bottom" key={i}>
                <div className="col col-4 col-lg-2">
                    <div className="books-img">
                        <img className="img-fluid" src={booksImg} alt="book-thumb" />
                        {/* like button */}
                    </div>
                </div>
                <div className="col col-8 col-lg-10">
                    <div className="books-name-title2">
                        <h1>Business Law</h1>
                        <p>Vivek Kuchhal</p>
                        <h2>$238</h2>
                    </div>
                    <div className="books-fav2">
                        
                    </div>
                </div>
            </div>
          )}
      </div>
    </div>  
  </>
  );
};

export default AllBooksByYouDetails;