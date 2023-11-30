import { Link } from "react-router-dom";
import {GrLocation} from "react-icons/gr";
import {IoMailOutline} from "react-icons/io5";
import {BsTelephone} from "react-icons/bs";
import userImg from "../../../../../../assets/images/user_image.png";

const ProfileComponent = () => {
  return (
    <>
        <article className="borderl p-4">
                {/* booking user & car details */}
            <div className="d-md-flex justify-content-between align-items-center">
                {/* user & car */}
                <div className="d-flex">
                    <div className="me-2 d-flex">
                    {/* user thumbnail */}
                        <img
                        src={userImg}
                        className="car-book-request-thumb rounded-circle border img-fluid"
                        style={{ marginLeft: "10px", width: "55px", height:"55px" }}
                        alt="user profile"
                        />
                    </div>
                    {/* user name and verification status */}
                    <div className="car-book-request-user">
                        <h5>Adam Mills</h5>
                        <p>
                            <span>Member since 2019</span>
                        </p>
                    </div>
                </div>

                <div>
                    <Link to={"/dashboard/profile/edit-profile"}>
                        <button
                        type="submit"
                        className="button-style primary-button me-2 me-xl-4 buttonl"
                        >
                            Edit Profile
                        </button>
                    </Link>
                </div>
            </div>
                <hr className="d-none d-md-block my-4" />
            <div className="d-md-flex justify-content-between align-items-center">
                <div className="content-wrapper w-100">
                    <div className="row">
                        <div className="col col-6 col-lg-4">
                            <p>
                                <GrLocation/>
                                8502 Preston Rd. Inglewood, Maine 98380
                            </p>
                        </div>
                        <div className="col col-6 col-lg-4">
                            <p>
                                <IoMailOutline/>
                                nelso.norman@example.com
                            </p>
                        </div>
                        <div className="col col-6 col-lg-4">
                            <p>
                                <BsTelephone/>
                                (208) 555-0112 
                            </p>
                        </div>
                    </div>
                </div>
                </div>
            <div className="d-md-flex justify-content-between align-items-center mt-2">
                
            </div>
        </article>

        <article className="borderl p-4 mt-4">
                {/* booking user & car details */}
                <div className="d-md-flex justify-content-between align-items-center">
                {/* user & car */}
                <div className="d-flex">
                    {/* user name and verification status */}
                    <div className="car-book-request-user">
                    <h5>Password</h5>
                    <p>
                        <span>Last Changed 3 Months ago</span>
                    </p>
                    </div>
                </div>

                <div>
                    <Link to={"/dashboard/profile/edit-password"}>
                    <button
                        type="submit"
                        className="button-style me-2 me-xl-4 cr-default-btn buttonl"
                    >
                        Change Password
                    </button>
                    </Link>
                </div>
                </div>

        </article>
    </>
  );
};

export default ProfileComponent;
