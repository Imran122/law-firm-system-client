import { React, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { BsSearch } from "react-icons/bs";
import defaultUser from "../../../../../../../assets/images/default-member.png";
import "../../Users.css";

const SuperAdminEditorAdminListsComponent = () => {

  return (
    <>
        <div className="row">
            <div className="col col-12 col-lg-12 mt-5">
                <div className="input-group mb-3">
                    <input 
                        type="text" 
                        className="form-control lm-border" 
                        placeholder="Enter email to invite editors/admins" 
                        aria-describedby="basic-addon1"
                        />
                    <button className="input-group-text lm-bg" id="basic-addon1">
                        <select className="form-select">
                            <option>Editor</option>
                            <option>Admin</option>
                        </select>
                    </button>
                </div>
            </div>
            <div className="col col-12 col-lg-12">
                <div className="users-tbl-box">
                    <div className="row users-tbl mt-3">
                        <div className="col col-3 col-lg-1">
                            <img src={defaultUser} alt="Agents"/>
                        </div>
                        <div className="col col-9 col-lg-6">
                            <h3><strong>Eleanor Pena</strong></h3>
                            <p>Admin since August 2016 <span className="stand-mem">ADMIN</span></p>
                        </div>
                        <div className="col col-6 col-lg-2 mb-2">
     
                        </div>
                        <div className="col col-6 col-lg-2">
                            <Link to={'/dashboard/users/editor-admin/editor-admin-details'}>
                                <button className="btn-edit-member">
                                    See Details
                                </button>
                            </Link>
                        </div>
                    </div>

                    <div className="row users-tbl mt-3">
                        <div className="col col-3 col-lg-1">
                            <img src={defaultUser} alt="Agents"/>
                        </div>
                        <div className="col col-9 col-lg-6">
                            <h3><strong>Dianne Russell</strong></h3>
                            <p>Editor since September 2018 <span className="basic-mem">EDITOR</span></p>
                        </div>
                        <div className="col col-6 col-lg-2 mb-2">
     
                        </div>
                        <div className="col col-6 col-lg-2">
                            <Link to={'/dashboard/users/editor-admin/editor-admin-details'}>
                                <button className="btn-edit-member">
                                    See Details
                                </button>
                            </Link>
                        </div>
                    </div>
                </div>

            </div> 
        </div>
    </>
  );
};

export default SuperAdminEditorAdminListsComponent;
