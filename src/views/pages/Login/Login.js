import axios from "axios";
import React, { useState } from "react";
import { FcGoogle } from "react-icons/fc";
import { HiOutlineMail } from "react-icons/hi";
import { RiLockPasswordLine } from "react-icons/ri";
import { SiFacebook, SiAuth0 } from "react-icons/si";
import { Link, useLocation, useNavigate } from "react-router-dom";
import useAuth from "../../../hooks/useAuth";
import { authenticate, isAuth } from "../../../utilities/helper";
import "./Login.css";

const Login = ({ props }) => {
  const [loginData, setLoginData] = useState({});
  const { user, setUser, isLoading, setIsLoading, setAuthError, authError } =
    useAuth();
  const location = useLocation();
  console.log("lo", location);
  const navigate = useNavigate();

  //taking input
  const handelOnBlur = (e) => {
    const field = e.target.name;
    const value = e.target.value;
    const newLoginData = { ...loginData };
    newLoginData[field] = value;

    setLoginData(newLoginData);
  };

  //login system by form submit
  const [errorMessage, setErrorMessage] = useState("");
  const [passwordAlert, setPasswordAllert] = useState("");

  const handelLoginSubmit = (event) => {
    event.preventDefault();

    const { email, password } = loginData;
    //password validation by condition
    if (password === undefined || email === undefined) {
      setErrorMessage("please fill the form");
    } else if (password.length < 6) {
      setPasswordAllert("Password must be minimum 6 characters");
    } else if (password.length > 6) {
      setPasswordAllert("");
    }

    axios({
      method: "POST",
      url: `${process.env.REACT_APP_API}/api/signin`,
      data: { email, password },
    })
      .then((response) => {
        console.log("SIGNIN SUCCESS", response);
        const destination = location?.state?.from || "/";
        navigate(location?.state?.from || "/", { replace: true });
        setErrorMessage("");
        authenticate(response.data, () => {
          setUser(isAuth());
          setIsLoading(false);
          navigate("/dashboard", { replace: true });
          console.log("cookie local save ", isAuth());
        });
      })
      .catch((error) => {
        setErrorMessage(error.response.data.error);
        console.log("SIGN IN ERROR", error.response.data);
        // setValues({ ...values, buttonText: 'Submit' });
        //setAuthError(error.response.data.error);
      });
  };

  const Auth0Login = (event) => {
    event.preventDefault();

    axios({
      method: "GET",
      url: `${process.env.REACT_APP_API}/api-auth0/signin`
    })
      .then((response) => {
        console.log(response.data.url);
        window.location.replace(response.data.url);

      })
      .catch((error) => {
        setErrorMessage(error.response.data.error);
        console.log("SIGN IN ERROR", error.response.data);
        // setValues({ ...values, buttonText: 'Submit' });
        //setAuthError(error.response.data.error);
      });
  };
  return (
    <>
      <div className="container-fluid">
        <div className="row">
          <div className="col col-12 col-lg-5 d-none d-lg-block login-box">
            <div className="login-txt">
              <h1>Helping people to learn the laws better</h1>
              <p>Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit.</p>
            </div>
          </div>
          <div className="col col-12 col-lg-6 offset-lg-1 auth-right">
            <div className="error-msg">

              {/* end  auth error message show */}
            </div>
            <form
              className="form-div"
              onSubmit={handelLoginSubmit}
            >
              <div className="login-title">
                <h2>Welcome!</h2>
                <p>Log in to continue</p>
              </div>
              <div className="sign-in-info-card">
                <div className="email-password-div">
                  <p className="label">Email</p>
                  <input
                    type="text"
                    className="text-input-field"
                    placeholder="Enter your email"
                    name="email"
                    onBlur={handelOnBlur}
                  />
                  <HiOutlineMail className="icon" size={20} />
                </div>

                <div className="email-password-div">
                  <p className="label">Password</p>
                  <input
                    type="password"
                    className="text-input-field"
                    placeholder="Enter password"
                    name="password"
                    onBlur={handelOnBlur}
                  />
                  <RiLockPasswordLine className="icon" size={20} />
                </div>

                <div className="d-flex justify-content-between remember-forget-password-div">
                  <div className="d-flex align-items-center">
                    <div className="form-check">
                      <input
                        className="form-check-input"
                        type="checkbox"
                        value=""
                        id="flexCheckDefault" />
                      <label className="form-check-label" htmlFor="flexCheckDefault">
                        Remember me
                      </label>
                    </div>
                  </div>


                  <Link to={'/forgot-password'} className="forgot">
                    <p className="label primary-color">Forget Passwords?</p>
                  </Link>
                </div>

                <input
                  type="submit"
                  className="label login-button-text button login-button"
                  defaultValue="Sign In"
                />

                <div className="button">
                  <div className="d-flex justify-content-center align-items-center">
                    <FcGoogle size={25} />
                    <p className="label login-google-text ms-2">
                      Sign in with Google
                    </p>
                  </div>
                </div>

                <div className="button">
                  <div className="d-flex justify-content-center align-items-center">
                    <SiFacebook size={25} color="#4676ED" />
                    <p className="label login-google-text ms-2">
                      Sign in with Facebook
                    </p>
                  </div>
                </div>
                <div className="button" onClick={Auth0Login}>
                  <div className="d-flex justify-content-center align-items-center">
                    <SiAuth0 size={25} />
                    <p className="label login-google-text ms-2">
                      Sign in with Auth0
                    </p>
                  </div>
                </div>
                <p className="label no-account-text">
                  Don't have an account?
                  <Link to={"/signup"}>
                    <span className="primary-color"> Sign Up</span>
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

export default Login;