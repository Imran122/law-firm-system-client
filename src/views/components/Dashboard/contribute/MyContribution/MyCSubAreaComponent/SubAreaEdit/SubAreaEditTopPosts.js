import React from "react";
import SubAreaEditTopPostsSIngleItem from "./SubAreaEditTopPostsSIngleItem/SubAreaEditTopPostsSIngleItem";

const SubAreaEditTopPosts = ({ disputeResuList }) => {
  console.log("sub are eidt debug...", disputeResuList)
  return (
    <>
      <div className="container mt-5">
        <div className="row">
          <div className="col col-12">
            <div className="lm-title">
              <h1>Dispute Resolution</h1>
            </div>
          </div>
          {disputeResuList && disputeResuList.map((data) => <SubAreaEditTopPostsSIngleItem data={data}/> )}

        </div>
      </div>
    </>
  );
};

export default SubAreaEditTopPosts;
