import { React, useState } from "react";
import { FcGoogle } from "react-icons/fc";
import { SiFacebook } from "react-icons/si";
import { Link, useNavigate } from "react-router-dom";
import PhoneInput from 'react-phone-input-2';
import 'react-phone-input-2/lib/style.css';
import "./Signup.css";
import useAuth from "../../../hooks/useAuth";
import axios from "axios";

const Signup = ({ props }) => {
    const [phonevalue, setPhonevalue] = useState();
    const [registerData, setRegisterData] = useState({});
    //to redirevt the previous pages
    //to redirevt the previous pages

    const navigate = useNavigate();

    const { user, setUser, isLoading, setIsLoading, setAuthError, authError } =
        useAuth();

    const handelOnBlur = (e) => {
        const field = e.target.name;
        const value = e.target.value;
        const newRegisterData = { ...registerData };
        newRegisterData[field] = value;

        setRegisterData(newRegisterData);
    };

    //renter registration system
    const [errorMessage, setErrorMessage] = useState("");
    const handelRegisterRenterSubmit = (event) => {
        event.preventDefault();
        console.log('registerData ',registerData);
        const { firstname, lastname, email, address, password } = registerData;

        console.log('phonevalue ',phonevalue);
        setIsLoading(true);
        // setValues({ ...values, buttonText: 'Submitting' });
        axios({
            method: "POST",
            url: `${process.env.REACT_APP_API}/api/signup`,
            data: { firstname, lastname, email, address, password, phone: phonevalue},
        })
            .then((response) => {
                console.log("SIGNUP SUCCESS", response);
                setErrorMessage("");
                if (response.insertedId) {
                    event.target.reset();
                }
                navigate("/login", { replace: true });
            })
            .catch((error) => {
                console.log("SIGNUP ERROR", error.response.data);
                setErrorMessage(error.response.data.error);
                // // setValues({ ...values, buttonText: 'Submit' });
                //setAuthError(error.response.data.error);
            });
    };
    return (
        <>
            <div className="container-fluid">
                <div className="row">
                    <div className="col col-12 col-lg-5 d-none d-md-block login-box">
                        <div className="login-txt">
                            <h1>Helping people to learn the laws better</h1>
                            <p>Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit.</p>
                        </div>
                    </div>
                    <div className="col col-12 col-lg-6 offset-lg-1 auth-right">
                        <div className="error-msg">

                            {/* end  auth error message show */}
                            {errorMessage && (
                                <div
                                    className="alert alert-danger justify-content-center"
                                    role="alert"
                                >
                                    {errorMessage}
                                </div>
                            )}
                        </div>
                        <form
                            className="form-div"
                            onSubmit={handelRegisterRenterSubmit}
                        >
                            <div className="login-title">
                                <h2>Welcome!</h2>
                                <p>Create an account to start learning laws</p>
                            </div>
                            <div className="sign-in-info-card">
                                <div className="row">
                                    <div className="col-6 col-md-6">
                                        <div className="email-password-div">
                                            <p className="label">First name</p>
                                            <input
                                                type="text"
                                                className="text-input-field2"
                                                placeholder="First Name"
                                                name="firstname"
                                                onBlur={handelOnBlur}
                                            />
                                        </div>
                                    </div>

                                    <div className="col-6 col-md-6">
                                        <div className="email-password-div">
                                            <p className="label">Last name</p>
                                            <input
                                                type="text"
                                                className="text-input-field2"
                                                placeholder="Last name"
                                                name="lastname"
                                                onBlur={handelOnBlur}
                                            />
                                        </div>
                                    </div>
                                </div>

                                <div className="email-password-div">
                                    <p className="label">Email</p>
                                    <input
                                        type="email"
                                        className="text-input-field2"
                                        placeholder="Email"
                                        name="email"
                                        onBlur={handelOnBlur}
                                    />
                                </div>

                                <div className="email-password-div">
                                    <p className="label">Phone Number</p>
                                    <PhoneInput
                                        country={'us'}
                                        value={phonevalue}
                                        onChange={setPhonevalue}
                                        name="phone"
                                        defaultValue="(208) 555-0112"
                                        className="text-input-field2"
                                        onBlur={handelOnBlur}
                                    />
                                </div>

                                <div className="email-password-div">
                                    <p className="label">Address</p>
                                    <input
                                        type="text"
                                        className="text-input-field2"
                                        placeholder="Address"
                                        name="address"
                                        onBlur={handelOnBlur}
                                    />
                                </div>

                                <div className="email-password-div">
                                    <p className="label">Password</p>
                                    <input
                                        type="password"
                                        className="text-input-field2"
                                        placeholder="Password"
                                        name="password"
                                        onBlur={handelOnBlur}
                                    />
                                </div>

                                <input
                                    type="submit"
                                    className="label login-button-text button login-button cr-button"
                                    defaultValue="Sign up"
                                />

                                <div className="button">
                                    <div className="d-flex justify-content-center align-items-center">
                                        <FcGoogle size={25} />
                                        <p className="label login-google-text ms-2">
                                            Sign up with Google
                                        </p>
                                    </div>
                                </div>

                                <div className="button">
                                    <div className="d-flex justify-content-center align-items-center">
                                        <SiFacebook size={25} color="#4676ED" />
                                        <p className="label login-google-text ms-2">
                                            Sign up with Facebook
                                        </p>
                                    </div>
                                </div>

                                <p className="label no-account-text">
                                    Have an account?
                                    <Link to={"/login"}>
                                        <span className="primary-color"> Log In</span>
                                    </Link>
                                </p>
                            </div>
                        </form>
                    </div>
                    <div className="col-lg-2 d-none d-md-block"></div>
                </div>
            </div>
        </>
    );
};

export default Signup;