import { React, useState } from "react";
import MemberSavedBookListsComponent from "./MemberSavedBookListsComponent";

const MemberSavedBooksComponent = () => {
  return (
    <>
      <div className="row g-0">
        <div className="col col-12 col-lg-8">
          <div className="not-dashboard-home-left-col m-3 p-3">
            <div className="book-div">
              <MemberSavedBookListsComponent />
            </div>
          </div>
        </div>

        <div className="col col-12 col-lg-4"></div>
      </div>
    </>
  );
};

export default MemberSavedBooksComponent;
