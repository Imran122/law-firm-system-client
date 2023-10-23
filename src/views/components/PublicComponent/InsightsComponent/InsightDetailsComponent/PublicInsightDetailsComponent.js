import React, { useState } from "react";
import PublicInsightDetailsSidebarComponent from "./PublicInsightDetailsSidebarComponent";
import PublicInsightDetailsCardComponent from "./PublicInsightDetailsCardComponent";

const PublicInsightDetailsComponent = () => {
  const [articleItemContent, setArticleItemContent] = useState({});
  return (
    <>
      <div className="container">
        <div className="row mt-5">
          <PublicInsightDetailsSidebarComponent
            setArticleItemContent={setArticleItemContent}
          />
          <PublicInsightDetailsCardComponent
            articleItemContent={articleItemContent}
          />
          
        </div>
      </div>
    </>
  );
};

export default PublicInsightDetailsComponent;
