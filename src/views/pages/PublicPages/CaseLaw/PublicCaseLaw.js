import React from "react";
import PublicHeaderComponent from "../../../components/PublicLayout/PublicHeaderComponent";
import PublicFooterComponent from "../../../components/PublicLayout/PublicFooterComponent";
import PublicCaseLawRouteComponent from "../../../components/PublicComponent/CaseLawComponent/PublicCaseLawRouteComponent";

const PublicCaseLaw = () => {
  return (
    <>
      <PublicHeaderComponent />
      <PublicCaseLawRouteComponent/>
      <PublicFooterComponent/>
    </>
  );
};

export default PublicCaseLaw;