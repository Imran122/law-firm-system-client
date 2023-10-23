import React, { useState } from "react";
import PublicLawsDetailsSidebarComponent from "./PublicLawsDetailsSidebarComponent";
import PublicLawsDetailsCardComponent from "./PublicLawsDetailsCardComponent";

const PublicLawsDetailsComponent = () => {
  const [articleItemContent, setArticleItemContent] = useState({});
  return (
    <>
      <div className="container">
        <div className="row mt-5">
          <PublicLawsDetailsSidebarComponent
            setArticleItemContent={setArticleItemContent}
          />
          <PublicLawsDetailsCardComponent
            articleItemContent={articleItemContent}
          />
        </div>
      </div>
    </>
  );
};

export default PublicLawsDetailsComponent;
