import { React, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import MyCCasesListsComponent from "./MyCCasesListsComponent";
const MyCByCasesComponent = () => {

  return (
    <>
      <div className="row g-0">
        <div className="col col-12">
          <div className="users-list-div mt-3">
            {/* booking request card */}
              <div className="users-button">
                <Link to={"/dashboard/my-contribution/"}>
                  Books
                </Link>

                <Link to={"/dashboard/my-contribution/articles"}>
                  Articles
                </Link>

                <Link to={"/dashboard/my-contribution/insights"}>
                  Insights
                </Link>

                <Link to={"/dashboard/my-contribution/cases"} className="active">
                  Cases
                </Link>

                <Link to={"/dashboard/my-contribution/laws"}>
                  Laws
                </Link>

                <Link to={"/dashboard/my-contribution/sub-area"}>
                  Subject Area
                </Link>

                <MyCCasesListsComponent/>

              </div>
            </div>
        </div>
      </div>
    </>
  );
};

export default MyCByCasesComponent;
