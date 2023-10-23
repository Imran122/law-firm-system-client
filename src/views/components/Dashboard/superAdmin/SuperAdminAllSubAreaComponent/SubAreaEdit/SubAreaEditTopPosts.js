import React from "react";

const SubAreaEditTopPosts = () => {
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
                <div className="lm-posts p-2">
                    <input type="text" className="form-control mt-2" value="Discover Dynamic Tools"/>
                    <textarea className="form-control mt-2" placeholder="Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. 
                    Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.">
                    </textarea>
                    <button className="btn btn-primary mt-2">Submit</button>
                </div>
            </div>

            <div className="col col-12 col-lg-6">
                <div className="lm-posts p-2">
                    <input type="text" className="form-control mt-2" value="Discover Dynamic Tools"/>
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

export default SubAreaEditTopPosts;
