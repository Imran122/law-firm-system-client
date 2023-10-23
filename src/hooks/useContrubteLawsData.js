import { useEffect, useState } from "react";
import { getCookie } from "../utilities/helper";
import useAuth from "./useAuth";

//load user data by user id

const useContrubteLawsData = () => {
  const { user, setUser, searchResult, setSearchResult } = useAuth();
  const [lawsList, setLawsList] = useState([]);
  useEffect(() => {
    fetch(`${process.env.REACT_APP_API}/api/get-contribute-laws`, {
      method: "GET",
      headers: {
        "Content-type": "application/json; charset=UTF-8",
        Authorization: `Bearer ${getCookie("token")}`,
      },
    })
      .then((response) => response.json())
      .then((data) => {
        if (user?._id) {
          fetch(
            `${process.env.REACT_APP_API}/api/favourite-info-content/${user._id}`,
            {
              method: "GET",
              headers: {
                "Content-type": "application/json; charset=UTF-8",
                Authorization: `Bearer ${getCookie("token")}`,
              },
            }
          )
            .then((response) => response.json())
            .then((favdata) => {
              favdata = favdata.favContributelist;

              for (let index = 0; index < data.result.length; index++) {
                data.result[index]["favflag"] = false;

                if (favdata.some((fav) => fav._id === data.result[index]._id)) {
                  data.result[index]["favflag"] = true;
                }
              }

              setLawsList(data.result);
              setSearchResult(data.result);
            });
        } else {
          setLawsList(data.result);
          setSearchResult(data.result);
        }
      });
  }, []);

  return [lawsList, setLawsList];
};
export default useContrubteLawsData;
