import { React, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import {AiOutlineMail} from "react-icons/ai";
import {BsPatchExclamation} from "react-icons/bs";
import defaultUser from "../../../../../../assets/images/default-member.png";
import "../Users.css";

const SuperAdminProfileComponent = () => {

  return (
    <>
        <div className="users-tbl-box">
            <div className="row users-tbl mt-3">
                <div className="col col-3 col-lg-1">
                    <img src={defaultUser} alt="Users"/>
                </div>
                <div className="col col-9 col-lg-6">
                    <h3><strong>Dean Hassan</strong></h3>
                    <p>Super Admin since April 2012 <span className="stand-mem">Super Administrator</span></p>
                </div>
                <div className="col col-6 col-lg-2 mb-2">
                    
                </div>
                <div className="col col-6 col-lg-3">
                    <button className="btn-cancel">
                        Edit Info
                    </button>
                </div>
            </div>
            <div className="row users-tbl mt-1">
                <div className="col col-12 col-lg-12">
                    <div className="ad-icon2">
                        <p><BsPatchExclamation/> As a Super Admin, you have the ability to add and remove administrators, editors, review contributions, and control all necessary functions.</p>
                    </div>
                </div>
            </div>
            <div className="row">
                <div className="col col-12 col-lg-12">
                    <div className="sus-icon">
                        <AiOutlineMail/>
                        <p>dean.hassan@example.com</p>
                    </div>
                </div>
            </div>
        </div>
    </>
  );
};

export default SuperAdminProfileComponent;
