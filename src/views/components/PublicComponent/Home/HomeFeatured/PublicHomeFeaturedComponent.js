import React from "react";
import {FiSettings} from "react-icons/fi";
import {BsGlobe} from "react-icons/bs";
import {BiSearchAlt} from "react-icons/bi";
import {RiQuestionnaireLine} from "react-icons/ri";
import {AiOutlineDollarCircle} from "react-icons/ai";
import {HiUserGroup} from "react-icons/hi";
import "../PublicHome.css";

const PublicHomeFeaturedComponent = () => {

  return (
    <>
      <div className="container mt-5">
        <div className="row">
            <div className="col col-12">
                <div className="lm-title">
                    <h1>Featured</h1>
                </div>
            </div>
            <div className="col col-12 col-lg-4">
                <div 
                    className="d-flex flex-column justify-content-center align-items-center lm-feature"
                    style={{backgroundColor: 'rgba(240, 146, 30, 0.3)'}}>
                    <span>
                        <RiQuestionnaireLine size={5}/>
                    </span>
                    <h2>Covid-19 Ask Queries</h2>
                    <p>Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint.</p>
                </div>
            </div>

            <div className="col col-12 col-lg-4">
                <div 
                    className="d-flex flex-column justify-content-center align-items-center lm-feature"
                    style={{backgroundColor: '#FAD4D4'}}>
                    <span>
                        <FiSettings size={5}/>
                    </span>
                    <h2>ESG Toolkit</h2>
                    <p>Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint.</p>
                </div>
            </div>

            <div className="col col-12 col-lg-4">
                <div 
                    className="d-flex flex-column justify-content-center align-items-center lm-feature"
                    style={{backgroundColor: 'rgba(158, 210, 231, 0.2)'}}>
                    <span>
                        <BsGlobe size={5}/>
                    </span>
                    <h2>Global Covid 19 Resources</h2>
                    <p>Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint.</p>
                </div>
            </div>
            
        </div>
        <div className="row mt-4">
            <div className="col col-12 col-lg-4">
                <div 
                    className="d-flex flex-column justify-content-center align-items-center lm-feature"
                    style={{backgroundColor: 'rgba(177, 181, 198, 0.2)'}}>
                    <span>
                        <AiOutlineDollarCircle size={5}/>
                    </span>
                    <h2>Sprint 2021 Budget</h2>
                    <p>Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint.</p>
                </div>
            </div>

            <div className="col col-12 col-lg-4">
                <div 
                    className="d-flex flex-column justify-content-center align-items-center lm-feature"
                    style={{backgroundColor: 'rgba(20, 195, 142, 0.2)'}}>
                    <span>
                        <HiUserGroup size={5}/>
                    </span>
                    <h2>Resources for new practical law users</h2>
                    <p>Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint.</p>
                </div>
            </div>

            <div className="col col-12 col-lg-4">
                <div 
                    className="d-flex flex-column justify-content-center align-items-center lm-feature"
                    style={{backgroundColor: 'rgba(202, 130, 255, 0.3)'}}>
                    <span>
                        <BiSearchAlt size={5}/>
                    </span>
                    <h2>Beyond Brexit: The legal implications</h2>
                    <p>Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint.</p>
                </div>
            </div>
            
        </div>
      </div>
    </>
  );
};

export default PublicHomeFeaturedComponent;