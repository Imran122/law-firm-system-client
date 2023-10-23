import {React, useState} from "react";
import { Container, Dropdown, Nav, Navbar } from "react-bootstrap";
import { Squash as Hamburger } from 'hamburger-react';
import { BsCaretDownFill } from "react-icons/bs";
import { IoIosArrowDown } from "react-icons/io";
import { BiEditAlt } from "react-icons/bi";
import { FaRegFlag } from "react-icons/fa";
import { RiQuestionnaireLine } from "react-icons/ri";
import { HiLogout, HiOutlineUser } from "react-icons/hi";
import { Link, NavLink, useNavigate } from "react-router-dom";
import mainLogo from "../../../assets/images/africa-juris-logo.png";
import defaultUser from "../../../assets/images/default-user-img.png";
import "./PublicHeader.css";
import { signout } from "../../../utilities/helper";
import useAuth from "../../../hooks/useAuth";
import useAuth0Logout from "../../../hooks/useAuth0Logout";

const PublicHeaderComponent = () => {
  const [isOpen, setOpen] = useState(false);
  const { user, setUser, isLoading, setIsLoading } = useAuth();
  const navigate = useNavigate();

  const [logoutUrl, setLogoutUrl] = useAuth0Logout();

  const logout = () => {
    // setIsLoading(true);
    signout(() => {
      setUser("");
      window.location.replace(logoutUrl);
    });
  };
  return (
    <>
      <header className="container-fluid">
        <div className="row mbl-navv">
          <div className="col col-12 lm-navp">
            {/* desktop navbar */}
            <div className="navbar-parent-container shadow-sm">
              <Navbar className="d-none d-md-flex align-items-center">
                {/* <Container> */}
                <Navbar.Brand>
                  <Link to="/">
                    <img src={mainLogo} alt="main-logo" />
                  </Link>
                </Navbar.Brand>
                {/* navbar left side links */}
                <Nav className="me-auto ms-2 desktop-nav-links">
                  <NavLink to="/books" activeclassname="active">
                    Books
                  </NavLink>
                  <NavLink to="/journal-article" activeclassname="active">
                    Journal Article
                  </NavLink>
                  <NavLink to="/laws" activeclassname="active">
                    Laws
                  </NavLink>
                  <NavLink to="/case-law" activeclassname="active">
                    Case Law
                  </NavLink>
                  {/* <NavLink to="/insights" activeclassname="active">
                    Insights
                  </NavLink> */}
                  <Dropdown className="navbar-user-btn insights-nav">
                    <Dropdown.Toggle
                      className="bg-transparent border-0 p-0 m-0 shadow-none"
                      id="dropdown-autoclose-true"
                    >
                      <NavLink to="/insights" activeclassname="active">
                        Insights
                      </NavLink>
                      <IoIosArrowDown size={20} />
                    </Dropdown.Toggle>

                    <Dropdown.Menu className="slide-in-blurred-top slide-out-blurred-top insights-sub-nav">
                        <div className="row">
                          <div className="col col-6">
                            <ul className="insights-sub-nav-left">
                              <li><button className="btn-nav-ins">Dispute Resolution</button></li>
                              <li><button className="btn-nav-ins">Business Structures</button></li>
                              <li><button className="btn-nav-ins">Commercial Contracts</button></li>
                              <li><button className="btn-nav-ins">Mergers and Acquisitions laws</button></li>
                            </ul>
                          </div>
                          <div className="col col-6">
                            <ul className="insights-sub-nav-right">
                              <li><button className="btn-nav-ins">Labour Law Africa</button></li>
                              <li><button className="btn-nav-ins">Employment and Labour</button></li>
                              <li><button className="btn-nav-ins">Immigration Law</button></li>
                              <li><button className="btn-nav-ins">Foreign Investment Law</button></li>
                            </ul>
                          </div>
                        </div>
                    </Dropdown.Menu>
                  </Dropdown>
                  <NavLink to="/subject-area" activeclassname="active">
                    Subject Area
                  </NavLink>
                </Nav>
                {/* navbar right side links  */}
                <div className="ms-auto d-flex align-items-center">
                  <Link to="/" className="navbar-list-btn">
                    <BiEditAlt />
                    Contribute
                  </Link>
                  <Link to="/" className="navbar-list-btn-primary">
                    <RiQuestionnaireLine />
                    Ask a Question
                  </Link>

                  {user?.email ? (
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
                  ) : (
                    <Link to="/login" className="navbar-list-btn-primary">
                      Login
                    </Link>
                  )}

                  {/* language select button */}
                  <button className="flex justify-content-between align-items-center bg-transparent border-0 p-0">
                    <span className="me-2">
                      <FaRegFlag size={20} />
                    </span>
                    <span>
                      <BsCaretDownFill
                        className="language-down-icon"
                        size={14}
                      />
                    </span>
                  </button>
                </div>
                {/* </Container> */}
              </Navbar>
            </div>

            {/* mobile navbar */}

            <Navbar
              className="d-md-none py-3 navbar-container"
              bg="transparent"
              expand={false}
            >
              <Container>

                <Navbar.Toggle
                  className="border-0 shadow-none"
                  aria-controls="offcanvasNavbar">
                  <Hamburger
                    toggled={isOpen}  
                    toggle={setOpen} />
                </Navbar.Toggle>
                
                <Navbar.Brand>
                  <Link to="/" className="mblMainLogo">
                    <img src={mainLogo} alt="main-logo" />
                  </Link>
                </Navbar.Brand>

                <div className="d-flex align-items-center">
                  {/* login button */}
                  {user?.email ? (
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

                            <h5 className="fw-bold my-1">{user.firstname}</h5>
                            {/* <small>{user.email}</small> */}
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
                  ) : (
                    <Link to="/login">
                      <button className="navbar-list-btn ">Login</button>
                    </Link>
                  )}

                  {/* login button */}
                </div>
                <Navbar.Collapse id="basic-navbar-nav" className="lm-mbl-menu">
                  <Nav className="me-auto">

                    <Link to="/" className="text-black nav-link">
                      Home
                    </Link>

                    <Link to="/books" className="text-black nav-link">
                      Books
                    </Link>
                    <Link to="/journal-article" className="text-black nav-link">
                    Journal Article
                    </Link>
                    <Link to="/case-law" className="text-black nav-link">
                      Case Law
                    </Link>
                    <Link to="/insights" className="text-black nav-link">
                      Insights
                    </Link>
                    <Link to="/subject-area" className="text-black nav-link">
                      Subject Area
                    </Link>
                  
                  </Nav>
                </Navbar.Collapse>
              </Container>
            </Navbar>
          </div>
        </div>
      </header>
    </>
  );
};

export default PublicHeaderComponent;
