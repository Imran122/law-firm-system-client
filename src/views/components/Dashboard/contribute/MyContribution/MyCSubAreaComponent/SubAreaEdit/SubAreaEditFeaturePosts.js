import React from "react";
import SubAreaEditFeaturePostsSingleItem from "./SubAreaEditFeaturePostsSingleItem/SubAreaEditFeaturePostsSingleItem";

const SubAreaEditFeaturePosts = ({featuredList}) => {
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
        <div className="row mt-4">
          {featuredList && featuredList.map((data) => <SubAreaEditFeaturePostsSingleItem data={data}/> )}
        </div>
      </div>
    </>
  );
};

export default SubAreaEditFeaturePosts;
