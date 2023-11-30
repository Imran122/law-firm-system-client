import React from "react";
import { Route, Routes } from "react-router-dom";
import PublicJournalArticleComponent from "./PublicJournalArticleComponent";
import PublicArticleDetailsComponent from "./ArticleDetailsComponent/PublicArticleDetailsComponent";

const PublicJournalArticleRouteComponent = () => {
  return (
    <>
      <Routes>
        <Route index element={<PublicJournalArticleComponent />} />
        <Route
          path="details/:contributeId"
          element={<PublicArticleDetailsComponent />}
        />
      </Routes>
    </>
  );
};

export default PublicJournalArticleRouteComponent;
