import React, { useEffect, useState } from "react";
import Select from "react-select";
import BooksGridCard from "./BooksGridCard";
import BooksListCard from "./BooksListCard";
import { BsSearch } from "react-icons/bs";
import { IoGrid } from "react-icons/io5";
import { BiAlignLeft } from "react-icons/bi";
import "../Books.css";
import { getCookie } from "../../../../../utilities/helper";
import useAuth from "../../../../../hooks/useAuth";
const BooksCardComponent = () => {
  const [cName, setClassName] = useState("jsGridView");
  const [bookList, setBookList] = useState([]);

  const options = [
    { value: "", label: "Select Subject Area" },
    { value: "1", label: "Dispute Solution" },
    { value: "2", label: "Dispute Solution 2" },
    { value: "3", label: "Dispute Solution 3" },
  ];

  const customStyles = {
    control: (provided, state) => ({
      ...provided,
      background: "#fff",
      borderColor: "#eaecf0",

      boxShadow: state.isFocused ? null : null,
      "&:hover": {
        // Overwrittes the different states of border
        borderColor: "#eaecf0",
      },
    }),
  };
  const { user } = useAuth();
  useEffect(() => {
    fetch(`${process.env.REACT_APP_API}/api/all-contribute-book`, {
      method: "GET",
      headers: {
        "Content-type": "application/json; charset=UTF-8",
        Authorization: `Bearer ${getCookie("token")}`,
      },
    })
      .then((response) => response.json())
      .then((data) => {
        console.log("d", data);
        if (user?._id) {
          fetch(
            `${process.env.REACT_APP_API}/api/favouriteallinfo/${user._id}`,
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
              setBookList(data.result);
            });
        } else {
          setBookList(data.result);
        }
      });
  }, []);

  return (
    <>
      <div className="col col-12 col-lg-8">
        <div className="row">
          <div className="col col-12 col-lg-5 lm-book-searchfield">
            <div className="input-group mb-3">
              <input
                type="text"
                className="form-control lm-border"
                placeholder="Search..."
                aria-label="Search"
                aria-describedby="basic-addon1"
              />
              <button className="input-group-text lm-bg" id="basic-addon1">
                <BsSearch />
              </button>
            </div>
          </div>
          <div className="col col-12 col-lg-5 lm-book-searchfield mb-3">
            <Select styles={customStyles} options={options} />
          </div>
          <div className="col col-12 col-lg-2">
            <div className="b-filter-icn">
              <button
                onClick={() => setClassName("jsGridView")}
                title="Grid View"
              >
                <IoGrid
                  className={`${cName === "jsGridView" ? "active" : ""}`}
                  size="25"
                />
              </button>

              <button
                onClick={() => setClassName("jsListView")}
                title="List View"
              >
                <BiAlignLeft
                  className={`${cName === "jsListView" ? "active" : ""}`}
                  size="25"
                />
              </button>
            </div>
          </div>
        </div>
        <div className="row mt-4 book-div">
          {/* <div className={cName}>    */}
          {/* { cName === 'jsGridView' ? <BooksGridCard/> : <BooksListCard/> }  */}
          {/* </div> */}

          {bookList &&
            bookList.map((item) => {
              if (cName === "jsGridView") {
                return <BooksGridCard item={item} key={item._id} />;
              } else {
                return <BooksListCard item={item} key={item._id} />;
              }
            })}
        </div>
      </div>

      <div className="col col-12 col-lg-2 d-none"></div>
    </>
  );
};

export default BooksCardComponent;
