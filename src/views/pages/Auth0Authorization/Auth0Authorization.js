import React, { useState, useEffect, useRef } from "react";

import { useLocation, useNavigate, useSearchParams } from "react-router-dom";
import useAuth from "../../../hooks/useAuth";
import { authenticate, isAuth } from "../../../utilities/helper";

const Auth0Authorization = ({}) => {
    const [searchParams, setSearchParams] = useSearchParams();
    const code = searchParams.get("code");
    const counter = React.useRef(true);
    const location = useLocation();
    const navigate = useNavigate();
    const { user, setUser, isLoading, setIsLoading, setAuthError, authError } =
    useAuth();
    // const [code, setCode] = useState(searchParams.get("code"));

    useEffect(() => {
        if (counter.current==true) {
            counter.current=false;
            fetch(`${process.env.REACT_APP_API}/api-auth0/authorization?code=${code}`, {
                method: 'GET',
                headers: {
                    "Content-Type": "application/json",
                    Accept: "application/json",
                }
            })
                .then(res => res.json())
                // .then(res => {
                //     setChallengesData(JSON.stringify(res));
                    
                // })
                .then((response) => {
                    console.log("SIGNIN SUCCESS", response);
                    const destination = location?.state?.from || "/";
                    navigate(location?.state?.from || "/", { replace: true });
                    authenticate(response, () => {
                      setUser(isAuth());
                      setIsLoading(false);
                      navigate("/dashboard", { replace: true });
                      console.log("cookie local save ", isAuth());
                    });
                  })
        }
    }, []);

    return (
        <div className="Challenges-body">
            <h3>Authorizing......</h3>
        </div>
    );
};

export default Auth0Authorization;
