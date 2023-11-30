import React from "react";
import { Link } from "react-router-dom";
import {IoIosArrowRoundForward} from "react-icons/io";
import Books1 from "../../../../../assets/images/books-1.png";
import Books2 from "../../../../../assets/images/books-2.png";
import "../PublicHome.css";

const PublicHomeHistoryComponent = () => {

  return (
    <>
      <div className="container mt-5">
        <div className="row">

            <div className="col col-12 col-lg-6">
                <div className="row">
                    <div className="col col-12 col-lg-8">
                        <div className="lm-title">
                            <h1>PLC Magazine</h1>
                        </div>
                    </div>
                    <div className="col col-12 col-lg-4">
                        <Link to={''} className="lm-view-more">
                            View more <IoIosArrowRoundForward/>
                        </Link>
                    </div>
                </div>
                <div className="row mt-3">
                    <div className="col col-12 col-lg-6">
                        <div className="lm-mg-books">
                            <img src={Books1} className="img-fluid" alt="Books"/>
                            <h2 className="lmg-books-txt">PLC Magazine</h2>
                            <p className="lmg-books-txt2">Amet minim mollit non deserunt ullamco est sit aliqua dolor do</p>
                        </div>
                    </div>
                    <div className="col col-12 col-lg-6">
                        <div className="lm-mg-books">
                            <img src={Books2} className="img-fluid" alt="Books"/>
                            <h2 className="lmg-books-txt">PLC Magazine</h2>
                            <p className="lmg-books-txt2">Amet minim mollit non deserunt ullamco est sit aliqua dolor do</p>
                        </div>
                    </div>
                </div>
            </div>

            <div className="col col-12 col-lg-6">
                <div className="row">
                    <div className="col col-12 col-lg-8">
                        <div className="lm-title">
                            <h1>Recent History</h1>
                        </div>
                    </div>
                    <div className="col col-12 col-lg-4">
                        <Link to={''} className="lm-view-more">
                            View All <IoIosArrowRoundForward/>
                        </Link>
                    </div>
                </div>
                <div className="row mt-3">
                    <div className="col col-12 hs-posts-box">
                        <div className="hs-posts">
                            <h2>Letter before claim: Breach of contract (acutal and repudiatory)</h2>
                            <p>
                                <span className="hs-posts-1">Maintained </span>
                                · 
                                <span className="hs-posts-2"> Standard documents</span>
                            </p>
                        </div>
                        <hr/>
                        <div className="hs-posts">
                            <h2>Letter before claim: Breach of contract (acutal and repudiatory)</h2>
                            <p>
                                <span className="hs-posts-1">Maintained </span>
                                · 
                                <span className="hs-posts-2"> Standard documents</span>
                            </p>
                        </div>
                        <hr/>
                        <div className="hs-posts">
                            <h2>Letter before claim: Breach of contract (acutal and repudiatory)</h2>
                            <p>
                                <span className="hs-posts-1">Maintained </span>
                                · 
                                <span className="hs-posts-2"> Standard documents</span>
                            </p>
                        </div>
                        <hr/>
                        <div className="hs-posts">
                            <h2>Letter before claim: Breach of contract (acutal and repudiatory)</h2>
                            <p>
                                <span className="hs-posts-1">Maintained </span>
                                · 
                                <span className="hs-posts-2"> Standard documents</span>
                            </p>
                        </div>
                    </div>
                </div>
            </div>

        </div>
      </div>
    </>
  );
};

export default PublicHomeHistoryComponent;