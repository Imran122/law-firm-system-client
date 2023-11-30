import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getCookie, getLocalStorage } from "../utilities/helper";
import useAuth from "./useAuth";

//load user data by user id

const useContributeSingleDataDetails = () => {
  //const x = localStorage.getItem("contributeItem");
  //const id = JSON.parse(x).toString();
  const { contributeId } = useParams();

  const [contributeDetails, setContributeDetails] = useState([]);
  useEffect(() => {
    fetch(
      `${process.env.REACT_APP_API}/api/get-contribute-details/?id=${contributeId}`,
      {
        method: "GET",
        headers: {
          "Content-type": "application/json; charset=UTF-8",
          Authorization: `Bearer ${getCookie("token")}`,
        },
      }
    )
      .then((response) => response.json())
      .then((data) => {
        console.log(data.result);
        setContributeDetails(data.result);
      });
  }, []);

  return [contributeDetails, setContributeDetails];
};
export default useContributeSingleDataDetails;
