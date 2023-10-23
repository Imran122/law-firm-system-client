import React from "react";
import { Link } from "react-router-dom";
import { IoIosArrowRoundForward } from "react-icons/io";

const PublicSubjectAreaTopPostsComponent = ({ subjectAreaDetails }) => {
  return (
    <>
      <div className="container mt-5">
        <div className="row">
          <div className="col col-12">
            <div className="lm-title">
              <h1>Dispute Resolution</h1>
            </div>
          </div>

          {subjectAreaDetails?.disputeResolutionList?.map((data) => (
            <div className="col col-12 col-lg-6" key={data._id}>
              <div className="lm-posts">
                <h2>{data.disputeTitle}</h2>
                <p>{data.disputeText}</p>
                <Link to={""}>
                  Learn more <IoIosArrowRoundForward />
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default PublicSubjectAreaTopPostsComponent;
