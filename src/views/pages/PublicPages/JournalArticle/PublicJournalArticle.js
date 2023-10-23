import React from "react";
import PublicHeaderComponent from "../../../components/PublicLayout/PublicHeaderComponent";
import PublicFooterComponent from "../../../components/PublicLayout/PublicFooterComponent";
import PublicJournalArticleRouteComponent from "../../../components/PublicComponent/JournalArticle/PublicJournalArticleRouteComponent";

const PublicJournalArticle = () => {
  return (
    <>
      <PublicHeaderComponent />
      <PublicJournalArticleRouteComponent/>
    </>
  );
};

export default PublicJournalArticle;