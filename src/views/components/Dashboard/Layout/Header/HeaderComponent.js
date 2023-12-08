import React, { useState } from "react";
import { Container, Dropdown, Navbar, Offcanvas } from "react-bootstrap";
import { IoIosArrowDown } from "react-icons/io";
import { FaBars } from "react-icons/fa";
import { HiLogout, HiOutlineUser } from "react-icons/hi";
import { IoMdNotificationsOutline } from "react-icons/io";
import { Link, useNavigate } from "react-router-dom";
import { MdArticle, MdFavoriteBorder } from "react-icons/md";
import { GiWhiteBook } from "react-icons/gi";
import defaultUser from "../../../../../assets/images/default-user-img.png";
import ContributeButtonComponent from "./ContributeButton/ContributeButtonComponent";
import SidebarLinkComponent from "../SidebarLink/SidebarLinkComponent";
import "./Header.css";
import useAuth from "../../../../../hooks/useAuth";
import { signout } from "../../../../../utilities/helper";
import useAuth0Logout from "../../../../../hooks/useAuth0Logout";

const HeaderComponent = ({ sidebarLinks, subtitle }) => {
 
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const { user, setUser, isLoading, setIsLoading } = useAuth();
  const [logoutUrl, setLogoutUrl] = useAuth0Logout();
  const navigate = useNavigate();
  const logout = () => {
    // setIsLoading(true);
    signout(() => {
      setUser("");
      window.location.replace("/login");
    });
  };
  return (
    <header className="position-sticky top-0" style={{ zIndex: "99" }}>
      {/* mobile navbar */}
      <div className="dashboard-header-mobile d-flex align-items-center d-md-none">
        <button className="border-0 bg-transparent ms-4" onClick={handleShow}>
          <FaBars size={24} />
        </button>

        <Offcanvas show={show} onHide={handleClose}>
          <Offcanvas.Header closeButton></Offcanvas.Header>
          <Offcanvas.Body>
            {sidebarLinks.map((sidebarLink, linkIdx) => (
              <SidebarLinkComponent
                key={linkIdx}
                handleClose={handleClose}
                sidebarLink={sidebarLink}
              />
            ))}
          </Offcanvas.Body>
        </Offcanvas>

        {/* mobile navbar */}
        <Navbar
          className="d-md-none"
          bg="transparent"
          expand={false}
          style={{ position: "absolute", right: "0" }}
        >
          <Container>
            <div className="d-flex align-items-end">
              <Dropdown>
                <Dropdown.Toggle
                  className="bg-transparent border-0 p-0 m-0 shadow-none"
                  id="dropdown-autoclose-true"
                >
                  <img
                    className="user_profile_image rounded-circle"
                    src={defaultUser}
                    alt="user-profile"
                  />
                </Dropdown.Toggle>

                <Dropdown.Menu className="slide-in-blurred-top slide-out-blurred-top onlyMobileNav">
                  <div className="user-profile-img-menu">
                    <div className="d-flex flex-column justify-content-between align-items-center">
                      <img
                        className="user_profile_image rounded-circle"
                        src={defaultUser}
                        alt="user-profile"
                      />

                      <h5 className="fw-bold my-1">{user?.firstname}</h5>
                    </div>
                    <hr />
                    <div className="user-profile-img-links d-flex flex-column">
                      <Link to="/settings">
                        <div className="user-profile-img-link d-flex align-items-center">
                          <HiOutlineUser className="mx-1 border-right" />
                          <span className="ms-1">My profile</span>
                        </div>
                      </Link>
                      {user.role === "super-admin" && (
                        <>
                          <Link
                            to={"/journal-article"}
                            className="user-profile-img-link d-flex align-items-center"
                          >
                            <MdArticle className="mx-1 border-right" />
                            <span className="ms-1">Journal</span>
                          </Link>
                          <Link
                            to={"/books"}
                            className="user-profile-img-link d-flex align-items-center"
                          >
                            <GiWhiteBook className="mx-1 border-right" />
                            <span className="ms-1">Books</span>
                          </Link>
                          <Link
                            to={"/insights"}
                            className="user-profile-img-link d-flex align-items-center"
                          >
                            <MdFavoriteBorder className="mx-1 border-right" />
                            <span className="ms-1">Insights</span>
                          </Link>
                        </>
                      )}
                      <button onClick={logout}>
                        <div className="user-profile-img-link d-flex align-items-center">
                          <HiLogout className="mx-1 border-right" />
                          <span className="ms-1">Logout</span>
                        </div>
                      </button>
                    </div>
                  </div>
                </Dropdown.Menu>
              </Dropdown>
            </div>
          </Container>
        </Navbar>
      </div>
      {/* desktop header */}
      <div className="d-none dashboard-header-desktop d-md-flex justify-content-between align-items-center bg-white">
        {/* header title and subtitle */}
        <div className="header-title-subtitle-container">
          {/* <h4>{user?.firstname}</h4>
          <p>{subtitle}</p> */}
        </div>

        {/* user icons */}
        <div className="d-flex justify-content-between align-items-center">

          <ContributeButtonComponent/>

          <Dropdown className="navbar-user-btn">
            <Dropdown.Toggle
              className="bg-transparent border-0 p-0 m-0 shadow-none"
              id="dropdown-autoclose-true"
            >
              <img
                className="user_profile_image rounded-circle"
                src={defaultUser}
                alt="user-profile"
              />
              <h4 className="user-name">{user?.firstname}</h4>
              <IoIosArrowDown size={20} />
            </Dropdown.Toggle>

            <Dropdown.Menu className="slide-in-blurred-top slide-out-blurred-top home-user-drp">
              <div className="user-profile-img-menu">
                <div className="d-flex flex-column justify-content-between align-items-center">
                  <img
                    className="user_profile_image rounded-circle"
                    src={defaultUser}
                    alt="user-profile"
                  />
                  <h5 className="fw-bold my-1">{user?.firstname}</h5>
                  {/* <small>{user.firstname}</small> */}
                </div>
                <hr />
                <div className="user-profile-img-links d-flex flex-column">
                  <Link
                    to={"/dashboard"}
                    className="user-profile-img-link d-flex align-items-center mb-2"
                  >
                    <HiOutlineUser className="mx-1 border-right" />
                    <span className="ms-1">Dashboard</span>
                  </Link>
                  {user.role === "super-admin" && (
                    <>
                      <Link
                        to={"/journal-article"}
                        className="user-profile-img-link d-flex align-items-center mb-2"
                      >
                        <MdArticle className="mx-1 border-right" />
                        <span className="ms-1">Journal</span>
                      </Link>
                      <Link
                        to={"/books"}
                        className="user-profile-img-link d-flex align-items-center mb-2"
                      >
                        <GiWhiteBook className="mx-1 border-right" />
                        <span className="ms-1">Books</span>
                      </Link>
                      <Link
                        to={"/insights"}
                        className="user-profile-img-link d-flex align-items-center mb-2"
                      >
                        <MdFavoriteBorder className="mx-1 border-right" />
                        <span className="ms-1">Insights</span>
                      </Link>
                    </>
                  )}

                  <button
                    onClick={logout}
                    className="user-profile-img-link d-flex align-items-center"
                  >
                    <HiLogout className="mx-1 border-right" />
                    <span className="ms-1">Logout</span>
                  </button>
                </div>
              </div>
            </Dropdown.Menu>
          </Dropdown>

          {/* notification button */}
          <button className="rounded-circle border-0 notification-icon">
            <IoMdNotificationsOutline size={19} />
          </button>
        </div>
      </div>
    </header>
  );
};

export default HeaderComponent;
