import { React, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import {AiOutlineMail} from "react-icons/ai";
import {BsPatchExclamation} from "react-icons/bs";
import defaultUser from "../../../../../../../assets/images/default-member.png";
import "../../Users.css";

const SuperAdminEditorAdminDetailsComponent = () => {

  return (
    <>
        <div className="users-tbl-box">
            <div className="row users-tbl mt-3">
                <div className="col col-3 col-lg-1">
                    <img src={defaultUser} alt="Users"/>
                </div>
                <div className="col col-9 col-lg-6">
                    <h3><strong>Norman fleck</strong></h3>
                    <p>Admin since August 2016 <span className="stand-mem">ADMIN</span></p>
                </div>
                <div className="col col-6 col-lg-2 mb-2">
                    <select className="form-select">
                        <option>Admin</option>
                        <option>Editor</option>
                    </select>
                </div>
                <div className="col col-6 col-lg-3">
                    <button className="btn-cancel">
                        Remove as Admin
                    </button>
                </div>
            </div>
            <div className="row users-tbl mt-1">
                <div className="col col-12 col-lg-12">
                    <div className="ad-icon2">
                        <BsPatchExclamation/>
                        <p>As an admin Eleanor has the permission to Review Contributions, Remove and Add Editors</p>
                    </div>
                </div>
            </div>
            <div className="row">
                <div className="col col-12 col-lg-12">
                    <div className="sus-icon">
                        <AiOutlineMail/>
                        <p>nelso.norman@example.com</p>
                    </div>
                </div>
            </div>
        </div>
    </>
  );
};

export default SuperAdminEditorAdminDetailsComponent;
