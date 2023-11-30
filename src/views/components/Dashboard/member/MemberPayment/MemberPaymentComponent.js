import React from "react";
import { Link, useParams } from "react-router-dom";
import { BsChevronRight } from "react-icons/bs";
import HomePaymentInvoiceComponent from "./MemberPaymentInvoiceComponent";
import HomePaymentFormComponent from "./MemberPaymentFormComponent";
import "./Payment.css";

const MemberPaymentComponent = () => {
  let { _id } = useParams();
  return (
    <>
      <div className="container">
        <div className="row mt-4">
          <div className="col col-12">
            <div className="pay-top-shortlinks">
              <ul>
                <li>
                  <Link to={"/dashboard/membership"}>Home</Link>
                  <BsChevronRight />
                </li>
                <li>
                  <Link to={"/dashboard/membership/upgrade"}>Profile</Link>
                  <BsChevronRight />
                </li>
                <li>
                  <Link to={`/dashboard/payment/${_id}`}>Payment</Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div className="row flex-xl-row-reverse mt-4">
          <div className="col col-12 col-lg-4">
            <HomePaymentInvoiceComponent />
          </div>

          <div className="col col-12 col-lg-8">
            <HomePaymentFormComponent />
          </div>
        </div>
      </div>
    </>
  );
};

export default MemberPaymentComponent;
