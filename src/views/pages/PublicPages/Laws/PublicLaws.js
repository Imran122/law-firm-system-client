import React from "react";
import PublicHeaderComponent from "../../../components/PublicLayout/PublicHeaderComponent";
import PublicLawsRouteComponent from "../../../components/PublicComponent/LawsComponent/PublicLawsRouteComponent";

const PublicLaws = () => {
  return (
    <>
      <PublicHeaderComponent />
      <PublicLawsRouteComponent/>
    </>
  );
};

export default PublicLaws;