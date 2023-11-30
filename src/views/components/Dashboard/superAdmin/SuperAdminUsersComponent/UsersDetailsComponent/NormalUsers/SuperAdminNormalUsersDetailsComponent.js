import { React, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import {HiOutlineLocationMarker} from "react-icons/hi";
import {AiOutlineMail} from "react-icons/ai";
import {IoCallOutline} from "react-icons/io5";
import {BsChevronRight} from "react-icons/bs";
import defaultUser from "../../../../../../../assets/images/default-member.png";
import "../../Users.css";

const SuperAdminNormalUsersDetailsComponent = () => {

  return (
    <>
        <div className="users-tbl-box">
            <div className="row users-tbl mt-3">
                <div className="col col-3 col-lg-1">
                    <img src={defaultUser} alt="Users"/>
                </div>
                <div className="col col-9 col-lg-6">
                    <h3><strong>Norman fleck</strong></h3>
                    <p>Member since 2018 <span className="basic-mem">BASIC MEMBER</span></p>
                </div>
                <div className="d-done d-lg-block col col-6 col-lg-2 mb-2">
                    
                </div>
                <div className="col col-6 col-lg-2 mb-3">
                    {/* <span className="suspended">
                        Suspended
                    </span> */}
                </div>
            </div>
            <div className="row mt-3">
                <div className="col col-12 col-lg-5">
                    <div className="sus-icon">
                        <HiOutlineLocationMarker/>
                        <p>8502 Preston Rd. Inglewood, Maine 98380</p>
                    </div>
                </div>
                <div className="col col-12 col-lg-4">
                    <div className="sus-icon">
                        <AiOutlineMail/>
                        <p>nelso.norman@example.com</p>
                    </div>
                </div>
                <div className="col col-12 col-lg-3">
                    <div className="sus-icon">
                        <IoCallOutline/>
                        <p>(208) 555-0112 </p>
                    </div>
                </div>
            </div>
        </div>
        <div className="users-tbl-box mt-4">
            <div className="row">
                <div className="col col-12 col-lg-3">
                    <div className="books-contr">
                        <h2>Articles Contributed</h2>
                        <h3>28</h3>
                        <BsChevronRight/>
                    </div>
                </div>
                <div className="col col-12 col-lg-3">
                    <div className="books-contr">
                        <h2>Books Contributed</h2>
                        <h3>06</h3>
                        <BsChevronRight/>
                    </div>
                </div>
                <div className="col col-12 col-lg-3">
                    <div className="books-contr">
                        <h2>Questions Asked</h2>
                        <h3>06</h3>
                        <BsChevronRight/>
                    </div>
                </div>
            </div>
        </div>
    </>
  );
};

export default SuperAdminNormalUsersDetailsComponent;
