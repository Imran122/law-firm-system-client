import React, { useState } from "react";
import defaultUser from "../../../../../assets/images/default-user-img.png";
import { Link } from "react-router-dom";
import { MdFavorite, MdFavoriteBorder } from "react-icons/md";
import axios from "axios";
import useAuth from "../../../../../hooks/useAuth";
import { getCookie } from "../../../../../utilities/helper";
const PublicLawsListData = ({ item }) => {
  const {
    lawsCategorey,
    lawsActNumber,
    lawsAssentDate,
    title,
    lawsCommencementDate,
    _id,
    favflag,
    lawsOverview,
    authorName,
  } = item;
  const [favorite, setFavorite] = useState(favflag);
  const { user } = useAuth();
  const toggleFavorite = async (c_id) => {
    if (!user?._id) {
      return;
    }
    if (favorite === false) {
      const response = await axios.post(
        `${process.env.REACT_APP_API}/api/favourite-update`,
        {
          userId: user?._id,
          contributeDataId: c_id,
        },

        {
          headers: {
            Authorization: `Bearer ${getCookie("token")}`,
          },
        }
      );

      if (response.status === 200) {
        // setIsLoading(false);
        // navigate("/renter-pay/success", { replace: true });
      }
    } else {
      const response = await axios.delete(
        `${process.env.REACT_APP_API}/api/favourite-delete`,
        {
          headers: {
            Authorization: `Bearer ${getCookie("token")}`,
          },
          data: {
            userId: user?._id,
            contributeDataId: c_id,
          },
        }
      );

      if (response.status === 200) {
      }
    }

    setFavorite((prev) => !prev);
  };
  return (
    <>
      <div className="col col-12 col-lg-6" key={_id}>
        <div className="laws-lists-box">
          <div className="laws-list">
            <div className="laws-fav">
              <button onClick={() => toggleFavorite(_id)}>
                {favorite ? (
                  <MdFavorite style={{ color: "#F76631" }} />
                ) : (
                  <MdFavoriteBorder style={{ color: "#F76631" }} />
                )}
              </button>
            </div>
            {/* ${data._id} */}
            <Link to={`/laws/details/${_id}`}>
              <h1>{title}</h1>
            </Link>

            <div className="laws-cats">
              <table>
                <tr>
                  <td width={"50%"}>
                    <b>{lawsCategorey}</b>
                  </td>
                  <td>
                    <b>Laws Act No:</b>{" "}
                    <span className="laws-blk">{lawsActNumber}</span>
                  </td>
                </tr>
                <tr>
                  <td width={"50%"}>
                    <b>Assent Date:</b>
                  </td>
                  <td>
                    <b>Commencement Date:</b>
                  </td>
                </tr>
                <tr>
                  <td width={"50%"} className="laws-blk">
                    {/* {new Date(data?.lawsAssentDate).toLocaleString()} */}

                    {new Date(lawsAssentDate).toLocaleDateString()}
                  </td>
                  <td className="laws-blk">
                    {/* {new Date(data?.lawsCommencementDate).toLocaleString()} */}
                    {new Date(lawsCommencementDate).toLocaleDateString()}
                  </td>
                </tr>
              </table>
            </div>

            <p className="mt-3">{lawsOverview}</p>

            <div className="laws-author">
              <div className="row">
                <div className="col col-6">
                  <img
                    src={defaultUser}
                    alt="default user"
                    width={"30px"}
                    height={"30px"}
                  />
                  <p className="d-inline px-3">{authorName}</p>
                  <br />
                  <p className="laws-con">{item?.countryNameList[0]}</p>
                </div>
                <div className="col col-6">
                  <Link
                    to={`/laws/details/${_id}`}
                    className="float-right btn2"
                  >
                    <span>Details </span>
                  </Link>
                </div>
              </div>
            </div>

            {/* <p>{data?.lawsActNumber}</p>
                <p>{data?.lawsAssentDate}</p>
                <p>{data?.lawsCommencementDate}</p> */}
            {/* <Link to={`/laws/details/${data._id}`} className="btnLawDetails"></Link> */}
          </div>
        </div>
      </div>
    </>
  );
};

export default PublicLawsListData;
