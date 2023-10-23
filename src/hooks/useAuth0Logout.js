import { useEffect, useState } from "react";
import { getCookie } from "../utilities/helper";
import useAuth from "./useAuth";

//load user data by user id

const useAuth0Logout = () => {
  const [logoutUrl, setLogoutUrl] = useState([]);

  useEffect(() => {
    fetch(`${process.env.REACT_APP_API}/api-auth0/signout`, {
      method: "GET",
      headers: {
        "Content-type": "application/json; charset=UTF-8"
      },
    })
      .then((response) => response.json())
      .then((data) => setLogoutUrl(data.url));
  }, []);

  return [logoutUrl, setLogoutUrl];
};
export default useAuth0Logout;