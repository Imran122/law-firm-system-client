import { React, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { BsSearch } from "react-icons/bs";
import defaultUser from "../../../../../../../assets/images/default-member.png";
import "../../Users.css";

const SuperAdminNormalUsersListsComponent = () => {

  return (
    <>
        <div className="row">
            <div className="col col-12 col-lg-12 mt-5">
                <div className="input-group mb-3">
                    <input 
                        type="text" 
                        className="form-control lm-border" 
                        placeholder="Search user" 
                        aria-label="SearchUser" aria-describedby="basic-addon1"
                        />
                    <button className="input-group-text lm-bg" id="basic-addon1">
                        <BsSearch/>
                    </button>
                </div>
            </div>
            <div className="col col-12 col-lg-12">
                <div className="users-tbl-box">
                    <div className="row users-tbl mt-3">
                        <div className="col col-3 col-lg-1">
                            <img src={defaultUser} alt="Users"/>
                        </div>
                        <div className="col col-9 col-lg-6">
                            <h3><strong>Norman fleck</strong></h3>
                            <p>Member since 2018 <span className="basic-mem">BASIC MEMBER</span></p>
                        </div>
                        <div className="col col-6 col-lg-2 mb-2">
                            <Link to={'/dashboard/users/normal-user-suspend'}>
                                <button className="btn-suspend">
                                    Suspend
                                </button>
                            </Link>
                        </div>
                        <div className="col col-6 col-lg-2">
                            <Link to={'/dashboard/users/normal-user-details'}>
                                <button className="btn-edit-member">
                                See Details
                                </button>
                            </Link>
                        </div>
                    </div>
                
                    <div className="row users-tbl mt-3">
                        <div className="col col-3 col-lg-1">
                            <img src={defaultUser} alt="Users"/>
                        </div>
                        <div className="col col-9 col-lg-6">
                            <h3><strong>Dianne Russell</strong></h3>
                            <p>Member since 2020 <span className="stand-mem">STANDARD MEMBER</span></p>
                        </div>
                        <div className="col col-6 col-lg-2 mb-2">
                            <Link to={'/dashboard/users/normal-user-suspend'}>
                                <button className="btn-suspend">
                                    Suspend
                                </button>
                            </Link>
                        </div>
                        <div className="col col-6 col-lg-2">
                            <Link to={'/dashboard/users/normal-user-details'}>
                                <button className="btn-edit-member">
                                See Details
                                </button>
                            </Link>
                        </div>
                    </div>

                    <div className="row users-tbl mt-3">
                        <div className="col col-3 col-lg-1">
                            <img src={defaultUser} alt="Users"/>
                        </div>
                        <div className="col col-9 col-lg-6">
                            <h3><strong>Ralph Edwards</strong></h3>
                            <p>Member since 2022 <span className="prem-mem">PREMIUM MEMBER</span></p>
                        </div>
                        <div className="col col-6 col-lg-2 mb-2">
                            <Link to={'/dashboard/users/normal-user-suspend'}>
                                <button className="btn-suspend">
                                    Suspend
                                </button>
                            </Link>
                        </div>
                        <div className="col col-6 col-lg-2">
                            <Link to={'/dashboard/users/normal-user-details'}>
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

export default SuperAdminNormalUsersListsComponent;
