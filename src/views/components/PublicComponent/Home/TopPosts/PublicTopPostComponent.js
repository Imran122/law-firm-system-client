import React from "react";
import { Link } from "react-router-dom";
import {IoIosArrowRoundForward} from "react-icons/io"
import "../PublicHome.css";

const PublicTopPostComponent = () => {

  return (
    <>
      <div className="container mt-5">
        <div className="row">
            <div className="col col-12">
                <div className="lm-title">
                    <h1>Dispute Resolution</h1>
                </div>
            </div>
            <div className="col col-12 col-lg-6">
                <div className="lm-posts">
                    <h2>Discover Dynamic Tools</h2>
                    <p>Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.</p>
                    <Link to={''}>
                        Learn more <IoIosArrowRoundForward/>
                    </Link>
                </div>
            </div>
            <div className="col col-12 col-lg-6">
                <div className="lm-posts">
                    <h2>Matter Maps</h2>
                    <p>Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.</p>
                    <Link to={''}>
                        Learn more <IoIosArrowRoundForward/>
                    </Link>
                </div>
            </div>
        </div>
      </div>
    </>
  );
};

export default PublicTopPostComponent;