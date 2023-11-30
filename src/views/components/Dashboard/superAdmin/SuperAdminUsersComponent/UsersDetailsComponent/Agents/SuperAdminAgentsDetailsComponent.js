import { React, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { BsSearch } from "react-icons/bs";
import lawGroup from "../../../../../../../assets/images/law-group.png";
import defaultUser from "../../../../../../../assets/images/default-member.png";
import "../../Users.css";

const SuperAdminAgentsDetailsComponent = () => {

  return (
    <>
        <div className="row">
            <div className="col col-12 col-lg-12">
                <div className="users-tbl-box">
                    <div className="row users-tbl mt-3">
                        <div className="col col-3 col-lg-1">
                            <img src={lawGroup} alt="Agents"/>
                        </div>
                        <div className="col col-9 col-lg-6">
                            <h3><strong>YIT LAW GROUP</strong></h3>
                            <p>82 People  · Agent since 2018 <span className="agent-tab">AGENT</span></p>
                        </div>
                        <div className="col col-6 col-lg-2 mb-2">
                            <button className="btn-suspend">
                                Suspend
                            </button>
                        </div>
                        <div className="col col-6 col-lg-2">
                            <button className="btn-edit-member">
                                See Details
                            </button>
                        </div>
                    </div>
                    <div className="row users-tbl mt-3">
                            <h2 className="mt-3">All Members</h2>
                            {Array.from({ length: 4 }, (_, i) =>
                            <div className="member-lists mt-4" key={i}>
                                <div className="row">
                                    <div className="col col-2 col-lg-2">
                                        <img src={defaultUser} alt="User"/>
                                    </div>
                                    <div className="col col-10 col-lg-7">
                                        <h3>Jenny Wilson</h3>
                                        <p>Member since 2018</p>
                                    </div>
                                </div>
                            </div>
                            )}
                    </div>
                </div>
            </div> 
        </div>
    </>
  );
};

export default SuperAdminAgentsDetailsComponent;
