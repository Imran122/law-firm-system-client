import React from "react";
import { Link } from "react-router-dom";
import mainLogo from "../../../assets/images/africa-juris-logo.png";
import { BsFacebook, BsYoutube, BsWhatsapp } from "react-icons/bs";
import "./PublicFooter.css";

const PublicFooterComponent = () => {

  return (
    <>
        <div className="container">
            <div className="row newsletter mt-5">
                <div className="col col-12 col-md-6">
                    <div className="newsletter-txt">
                    <h3>Newsletter</h3>
                    <p>Be the first one to know  about discounts, offers and events</p>
                    </div>
                </div>
                <div className="col col-12 col-md-6">
                    <div className="newsletter-email">
                        <div className="input-group mb-3">
                            <span className="input-group-text">
                            <i className="fa-solid fa-envelope"></i>
                            </span>
                            <input 
                                type="email" 
                                className="form-control" 
                                placeholder="Enter your email" 
                                aria-describedby="button-addon2"/>
                            <span className="input-group-text">
                            <button className="btn btn-default nws-btn" type="button" id="button-addon2">Submit</button>
                            </span>
                        </div>
                    </div>
                </div>
            </div>
       

            <div className="row footer mt-5">
                <div className="col col-12 col-md-4">
                    <img src={mainLogo} alt="logo" />
                    <p>Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit.</p>
                </div>
                <div className="col col-12 col-md-8">
                    <div className="row">
                    <div className="col col-12 col-md-4">
                        <ul className="footer-menu">
                            <li>About</li>
                            <li>
                                <Link to={'/'}>About us</Link>
                            </li>
                            <li>
                                <Link to={'/'}>Blog</Link>
                            </li>
                            <li>
                                <Link to={'/'}>Careers</Link>
                            </li>
                            <li>
                                <Link to={'/'}>Pricing</Link>
                            </li>
                        </ul>
                    </div>

                    <div className="col col-12 col-md-4">
                        <ul className="footer-menu">
                            <li>Support</li>
                            <li>
                                <Link to={'/'}>Contact us</Link>
                            </li>
                            <li>
                                <Link to={'/'}>Whatsapp</Link>
                            </li>
                            <li>
                                <Link to={'/'}>Telegram</Link>
                            </li>
                            <li>
                                <Link to={'/'}>Ticketing</Link>
                            </li>
                        </ul>
                    </div>

                    <div className="col col-12 col-md-4">
                        <ul className="footer-menu">
                            <li>FAQ</li>
                            <li>
                                <Link to={'/'}>Account</Link>
                            </li>
                            <li>
                                <Link to={'/'}>Orders</Link>
                            </li>
                            <li>
                                <Link to={'/'}>Payments</Link>
                            </li>
                            <li>       
                                <Link to={'/'}>Returns</Link>
                            </li>
                        </ul>
                    </div>
                    </div>
                </div>
            </div>
        </div>
        <footer className="container-fluid">
            <div className="container">
                <div className="row mt-5">
                    <div className="col col-12 col-md-4">
                        <div className="footer-left-icon">
                            <ul>
                                <li>
                                    <Link to={'/'}>
                                        <BsFacebook/>
                                    </Link>
                                </li>
                                <li>
                                    <Link to={'/'}>
                                        <BsYoutube/>
                                    </Link>
                                </li>
                                <li>
                                    <Link to={'/'}>
                                        <BsWhatsapp/>
                                    </Link>
                                </li>
                            </ul>
                        </div>
                    </div>
                    <div className="col col-12 col-md-8">
                        <div className="footer-right">
                            <p> &copy; {(new Date().getFullYear())} Africa Juris All Rights Reserved</p>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    </>
  );
};

export default PublicFooterComponent;