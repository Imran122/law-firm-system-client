import { React, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { BsSearch } from "react-icons/bs";
import lawGroup from "../../../../../../../assets/images/law-group.png";
import "../../Users.css";

const SuperAdminAgentsListsComponent = () => {

  return (
    <>
        <div className="row">
            <div className="col col-12 col-lg-12 mt-5">
                <div className="input-group mb-3">
                    <input 
                        type="text" 
                        className="form-control lm-border" 
                        placeholder="Search agents" 
                        aria-label="SearchAgents" aria-describedby="basic-addon1"
                        />
                    <button className="input-group-text lm-bg" id="basic-addon1">
                        <BsSearch/>
                    </button>
                </div>
            </div>
            <div className="col col-12 col-lg-12">
                <div className="users-tbl-box">
                    {Array.from({ length: 4 }, (_, i) =>
                    <div className="row users-tbl mt-3" key={i}>
                        <div className="col col-3 col-lg-1">
                            <img src={lawGroup} alt="Agents"/>
                        </div>
                        <div className="col col-9 col-lg-6">
                            <h3><strong>YIT LAW GROUP</strong></h3>
                            <p>82 People · Agent since 2018 <span className="agent-tab">AGENT</span></p>
                        </div>
                        <div className="col col-6 col-lg-2 mb-2">
                            <button className="btn-suspend">
                                Suspend
                            </button>
                        </div>
                        <div className="col col-6 col-lg-2">
                            <Link to={'/dashboard/users/agents/agent-details'}>
                                <button className="btn-edit-member">
                                    See Details
                                </button>
                            </Link>
                        </div>
                    </div>
                    )}
                </div>

            </div> 
        </div>
    </>
  );
};

export default SuperAdminAgentsListsComponent;
