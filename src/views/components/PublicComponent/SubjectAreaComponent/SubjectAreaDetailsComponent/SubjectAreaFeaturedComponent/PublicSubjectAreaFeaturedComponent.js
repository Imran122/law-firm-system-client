import React from "react";
import { FiSettings } from "react-icons/fi";
import { BsGlobe } from "react-icons/bs";
import { BiSearchAlt } from "react-icons/bi";
import { RiQuestionnaireLine } from "react-icons/ri";
import { AiOutlineDollarCircle } from "react-icons/ai";
import { HiUserGroup } from "react-icons/hi";

const PublicSubjectAreaFeaturedComponent = ({ subjectAreaDetails }) => {
  return (
    <>
      <div className="container mt-5">
        <div className="row">
          <div className="col col-12">
            <div className="lm-title">
              <h1>Featured</h1>
            </div>
          </div>
        </div>
        
          <div className="row mt-4" >
            {subjectAreaDetails?.featuredList?.map((data) => (
              <div className="col col-12 col-lg-4" key={data._id}>
                <div
                  className="d-flex flex-column justify-content-center align-items-center lm-feature"
                  style={{ backgroundColor: "rgba(20, 195, 142, 0.2)" }}
                >
                  <span>
                    <HiUserGroup size={5} />
                  </span>
                  <h2>{data?.featuredTitle}</h2>
                  <p>{data?.featuredText}</p>
                </div>
              </div>
            ))}
          </div>
        
      </div>
    </>
  );
};

export default PublicSubjectAreaFeaturedComponent;
