import React, { useEffect, useState } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import { BsChevronRight } from "react-icons/bs";
import MemberCustomPaymentInvoiceComponent from "./MemberCustomPaymentInvoiceComponent";
import MemberCustomPaymentFormComponent from "./MemberCustomPaymentFormComponent";
import "./CustomPayment.css";
import { getCookie } from "../../../../../utilities/helper";

const MemberCustomPaymentComponent = () => {
  let { _id } = useParams();
  const navigate = useNavigate();
  const [packageDetails, setPackageDetails] = useState({});
  
  // console.log(_id)
  useEffect(() => {
    fetch(`${process.env.REACT_APP_API}/api/package-details-info/${_id}`, {
      headers: {
        "Authorization": `Bearer ${getCookie("token")}`
      },
    })
      .then((response) => {
        if (response.status === 200) {
          return response.json();
        } else {
          navigate("/login", { replace: true });
        }
      })
      .then((data) => {
        // console.log(data)
        if ((data.regionNameList).length>1) {
          data.regionNameList = (data.regionNameList).join(", ")
        }

        if ((data.countryNameList).length>1) {
          data.countryNameList = (data.countryNameList).join(", ")
        }
        
        setPackageDetails(data);
      });
  }, [_id]);

  return (
    <>
      <div className="container">

        <div className="row flex-xl-row-reverse mt-4">
          <div className="col col-12 col-lg-4">
            <MemberCustomPaymentInvoiceComponent />
          </div>

          <div className="col col-12 col-lg-8">
            <MemberCustomPaymentFormComponent packageDetails={packageDetails}/>
          </div>
        </div>
      </div>
    </>
  );
};

export default MemberCustomPaymentComponent;
