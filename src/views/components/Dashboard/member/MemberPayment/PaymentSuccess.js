import React from "react";
import { Link } from "react-router-dom";
import {IoCaretBackCircleSharp} from "react-icons/io5";
import "./Payment.css";

const PaymentSuccess = () => {
  return (
    <>
      <div className="row g-0">
        <div className="col col-12 col-lg-8">
          <div className="not-dashboard-home-left-col m-3 p-3">
            <div className="book-div">
              <div className="alert alert-success" role="alert">
                Payment added Successfully!
              </div> 
              <Link to={'/dashboard'} className="returnDashboard">
                <IoCaretBackCircleSharp/> Return to dashboard
              </Link>
            </div>
          </div>
        </div>

        <div className="col col-12 col-lg-4"></div>
      </div>
    </>
  );
};

export default PaymentSuccess;
