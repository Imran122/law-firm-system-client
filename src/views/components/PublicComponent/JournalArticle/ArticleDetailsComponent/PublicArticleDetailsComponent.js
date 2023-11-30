import React, { useState } from "react";
import PublicArticleDetailsSidebarComponent from "./PublicArticleDetailsSidebarComponent";
import PublicArticleDetailsCardComponent from "./PublicArticleDetailsCardComponent";
import "./JournalArticleDetails.css";

const PublicArticleDetailsComponent = () => {
  const [articleItemContent, setArticleItemContent] = useState({});
  return (
    <>
      <div className="container">
        <div className="row mt-5">
          <PublicArticleDetailsSidebarComponent
            setArticleItemContent={setArticleItemContent}
          />
          <PublicArticleDetailsCardComponent
            articleItemContent={articleItemContent}
          />
        </div>
      </div>
    </>
  );
};

export default PublicArticleDetailsComponent;
