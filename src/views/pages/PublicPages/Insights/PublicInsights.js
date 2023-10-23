import React from "react";
import PublicHeaderComponent from "../../../components/PublicLayout/PublicHeaderComponent";
import PublicFooterComponent from "../../../components/PublicLayout/PublicFooterComponent";
import PublicInsightsRouteComponent from "../../../components/PublicComponent/InsightsComponent/PublicInsightsRouteComponent";
const PublicInsights = () => {
  return (
    <>
      <PublicHeaderComponent />
      <PublicInsightsRouteComponent/>
      <PublicFooterComponent/>
    </>
  );
};

export default PublicInsights;