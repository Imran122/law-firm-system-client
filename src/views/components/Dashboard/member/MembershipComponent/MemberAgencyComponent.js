import React from "react";
import { Link } from "react-router-dom";
import { BiChevronDown } from "react-icons/bi";
import "./Membership.css";
import useAuth from "../../../../../hooks/useAuth";

const MemberAgencyComponent = () => {
  return (
    <>
      <div className="row">
        <div className="col col-12 col-lg-12">
          <div className="member-tbl mt-3">
            <div className="row agents-tbl">
              <div className="col col-12 col-lg-8">
                <h3>Agency Membership</h3>{" "}
                <span className="ag-features">
                  Features <BiChevronDown />
                </span>
                <span className="agent-tab">ACTIVE</span>
                <p>Billing Yearly · 24 Days remaining to next invoice</p>
              </div>
              <div className="col col-6 col-lg-2">
                <button className="btn-edit-member">Cancel</button>
              </div>
              <div className="col col-6 col-lg-2">
                <Link to={"/dashboard/membership/upgrade"}>
                  <button className="btn-add-member">Upgrade</button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default MemberAgencyComponent;
