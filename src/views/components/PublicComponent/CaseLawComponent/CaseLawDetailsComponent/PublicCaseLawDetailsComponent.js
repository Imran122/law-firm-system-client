import React, { useState } from "react";
import PublicCaseLawDetailsSidebarComponent from "./PublicCaseLawDetailsSidebarComponent";
import PublicCaseLawDetailsCardComponent from "./PublicCaseLawDetailsCardComponent";
import "./CaseLawDetails.css";

const PublicCaseLawDetailsComponent = () => {
  const [caseItemContent, setCaseItemContent] = useState({});
  return (
    <>
      <div className="container">
        <div className="row mt-5">
          <PublicCaseLawDetailsSidebarComponent
            setCaseItemContent={setCaseItemContent}
          />
          <PublicCaseLawDetailsCardComponent
            setCaseItemContent={setCaseItemContent}
          />
        </div>
      </div>
    </>
  );
};

export default PublicCaseLawDetailsComponent;
