import React from "react";
import PublicHeaderComponent from "../../../components/PublicLayout/PublicHeaderComponent";
import PublicFooterComponent from "../../../components/PublicLayout/PublicFooterComponent";
import PublicSubjectAreaRouteComponent from "../../../components/PublicComponent/SubjectAreaComponent/PublicSubjectAreaRouteComponent";

const PublicSubArea = () => {
  return (
    <>
      <PublicHeaderComponent />
      <PublicSubjectAreaRouteComponent/>
      <PublicFooterComponent/>
    </>
  );
};

export default PublicSubArea;