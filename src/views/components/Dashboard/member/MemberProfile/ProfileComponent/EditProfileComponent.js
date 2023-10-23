import { React, useState } from "react";
import {BsChevronRight} from "react-icons/bs";
import { Link } from "react-router-dom";
import PhoneInput from 'react-phone-input-2';
import 'react-phone-input-2/lib/style.css';
import "../Profile.css";

const EditProfileComponent = () => {
    const [phonevalue, setPhonevalue] = useState();

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
                <Link to={"/dashboard/profile/edit-profile"}>
                    <p className="d-inline-block p-1 fw-600 my-3">
                        <span className="mx-1">Edit Profile</span>
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
                            <h3 className="form-title">Personal informations</h3>
                            <div className="d-md-flex justify-content-between align-items-center">
                                <div className="input-container mt-3 w-100">
                                    <div className="row g-2">
                                        <div className="col col-12 col-md-6 mb-2">
                                            <div className="input-wrapper">
                                                <input
                                                placeholder="First Name"
                                                type="text"
                                                name="firstname"
                                                className="form-control cc-in"
                                                />
                                            </div>
                                        </div>
                                        <div className="col col-12 col-md-6 mb-2">
                                            <div className="input-wrapper">
                                                <input
                                                placeholder="Last Name"
                                                type="text"
                                                name="lastname"
                                                className="form-control cc-in"
                                                />
                                            </div>
                                        </div>

                                        <div className="col col-12 mb-2">
                                            <div className="input-wrapper">
                                                <textarea
                                                    placeholder="Address"
                                                    className="form-control cc-in"
                                                >
                                                </textarea>
                                            </div>
                                        </div>

                                        <div className="col col-12 mb-2">
                                            <div className="input-wrapper">
                                                <input
                                                placeholder="Work Email"
                                                type="email"
                                                className="form-control cc-in"
                                                />
                                            </div>
                                        </div>

                                        <div className="col col-12 mb-2">
                                            <div className="input-wrapper">
                                                <PhoneInput
                                                    country={'us'}
                                                    value={phonevalue}
                                                    onChange={setPhonevalue}
                                                    name="phone"
                                                    defaultValue="(208) 555-0112"
                                                    className="text-input-field2"
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

                    <article className="borderl p-4 mt-3">
                        {/* booking user & car details */}
                        <form>
                            <h3 className="form-title">Institution</h3>
                            <div className="d-md-flex justify-content-between align-items-center">
                                <div className="input-container mt-3 w-100">
                                    <div className="row g-2">
                                        <div className="col col-12 mb-2">
                                            <div className="input-wrapper">
                                                <input
                                                placeholder="Institution Type"
                                                type="text"
                                                className="form-control cc-in"
                                                />
                                            </div>
                                        </div>
                                        <div className="col col-12 mb-2">
                                            <div className="input-wrapper">
                                                <input
                                                placeholder="Institution Name"
                                                type="text"
                                                className="form-control cc-in"
                                                />
                                            </div>
                                        </div>

                                        <div className="col col-12 mb-2">
                                            <div className="input-wrapper">
                                                <input
                                                placeholder="Job Title"
                                                type="text"
                                                className="form-control cc-in"
                                                />
                                            </div>
                                        </div>

                                        <div className="col col-12 mb-2">
                                            <div className="input-wrapper">
                                                <textarea
                                                    placeholder="Address"
                                                    className="form-control cc-in"
                                                >
                                                </textarea>
                                            </div>
                                        </div>

                                        <div className="col col-12 mb-2">
                                            <div className="input-wrapper">
                                                <PhoneInput
                                                    country={'us'}
                                                    value={phonevalue}
                                                    onChange={setPhonevalue}
                                                    name="phone"
                                                    defaultValue="(208) 555-0112"
                                                    className="text-input-field2"
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

export default EditProfileComponent;
