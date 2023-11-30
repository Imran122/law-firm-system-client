import React from "react";
import MemberDeviceComponent from "./DevicesComponent/MemberDeviceComponent";
import MemberListsComponent from "./MemberListsComponent/MemberListsComponent";
import MemberAgencyComponent from "./MemberAgencyComponent";
import MemberPaymentComponent from "./MemberPaymentComponent";
import "./Membership.css";

const MemberMembershipComponent = () => {
  return (
    <>
      
      <div className="row g-0">
        <div className="col col-12 col-lg-8">
            <div className="not-dashboard-home-left-col">            
                <MemberDeviceComponent/>
                <MemberListsComponent/>
                <MemberAgencyComponent/>
                <MemberPaymentComponent/>
            </div>
        </div>

        <div className="col col-12 col-lg-4">
          
        </div>
      </div>
    </>
  );
};

export default MemberMembershipComponent;
