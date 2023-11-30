import React from "react";
import { HiUserGroup } from "react-icons/hi";

const SubAreaEditFeaturePosts = () => {
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
              <div className="col col-12 col-lg-4">
                <div
                  className="d-flex flex-column justify-content-center align-items-center lm-feature"
                  style={{ backgroundColor: "rgba(20, 195, 142, 0.2)" }}
                >
                  <span>
                    <HiUserGroup size={5} />
                  </span>
                  <input type="text" className="form-control mt-2" value="Global Covid 19 Resources"/>
                  <textarea className="form-control mt-2" placeholder="Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. 
                    Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.">
                    </textarea>
                  <button className="btn btn-primary mt-2">Submit</button>
                </div>
              </div>
          </div>
        
      </div>
    </>
  );
};

export default SubAreaEditFeaturePosts;
