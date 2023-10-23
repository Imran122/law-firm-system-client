import { useEffect, useState } from "react";
import { getCookie } from "../utilities/helper";
import useAuth from "./useAuth";

//load user data by user id

const usePackageList = () => {
  const { user, setUser } = useAuth();
  const [packageListData, setPackageListData] = useState([]);
  useEffect(() => {
    fetch(`${process.env.REACT_APP_API}/api/package-list-data`, {
      method: "GET",
      headers: {
        "Content-type": "application/json; charset=UTF-8",
        "Authorization": `Bearer ${getCookie("token")}`
      },
    })
      .then((response) => response.json())
      .then((data) => setPackageListData(data));
  }, []);

  return [packageListData, setPackageListData];
};
export default usePackageList;
