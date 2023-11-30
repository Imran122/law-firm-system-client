import { React, useState } from "react";
import {BsChevronRight} from "react-icons/bs";
import { Link } from "react-router-dom";
import {IoIosCheckmarkCircle} from "react-icons/io";
import "../Profile.css";

const EditPasswordComponent = () => {

    return (
        <>
            <div className="d-md-flex profile-bredcum">
                <Link to={"/dashboard/"}>
                    <p className="d-inline-block p-1 fw-600 my-3">
                        <span className="mx-1">Home</span>
                        <BsChevronRight/>
                    </p>
                </Link>
                
                <Link to={"/dashboard/profile"}>
                    <p className="d-inline-block p-1 fw-600 my-3">
                        <span className="mx-1">Profile</span>
                        <BsChevronRight/>
                    </p>
                </Link>
                <Link to={"/dashboard/profile/edit-password"}>
                    <p className="d-inline-block p-1 fw-600 my-3">
                        <span className="mx-1">Edit Password</span>
                    </p>
                </Link>
            </div>
            <div className="row">
                <div className="col col-12 col-lg-3">

                </div>
                <div className="col col-12 col-lg-9">
                    <article className="borderl p-4 mt-3">
                        {/* booking user & car details */}
                        <form>
                            
                            <div className="d-md-flex justify-content-between align-items-center">
                                <div className="input-container mt-3 w-100">
                                    <div className="row g-2">
                                        <div className="col col-12 mb-2">
                                            <div className="input-wrapper">
                                                <input
                                                placeholder="Enter Current Password"
                                                type="text"
                                                className="form-control cc-in"
                                                />
                                            </div>
                                        </div>
                                        <div className="col col-12 mb-2">
                                            <div className="input-wrapper">
                                                <input
                                                placeholder="Enter New Password"
                                                type="text"
                                                className="form-control cc-in"
                                                />
                                            </div>
                                        </div>

                                        <div className="col col-12 mb-2">
                                           <ul className="pass-rules">
                                            <li><IoIosCheckmarkCircle/>Password must be minimum 8 characters</li>
                                            <li><IoIosCheckmarkCircle/>Must contain at least one special character</li>
                                            <li><IoIosCheckmarkCircle/>Must contain at least one numeric value </li>
                                           </ul>
                                        </div>

                                        <div className="col col-12 mb-2">
                                            <div className="input-wrapper">
                                                <input
                                                placeholder="Repeat New Password"
                                                type="text"
                                                className="form-control cc-in"
                                                />
                                            </div>
                                        </div>
                                    
                                    </div>
                                    <div className="row g-3 mt-3">
                                        <div className="col col-12 col-md-8">
                                        <button
                                            type="submit"
                                            className="button-style primary-button buttonsave"
                                        >
                                            Save Changes
                                        </button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </form>
                    </article>
                </div>
            </div>
        </>
    );
};

export default EditPasswordComponent;
