import React from "react";
import { Route, Routes } from "react-router-dom";
import PublicInsightsComponent from "./PublicInsightsComponent";
import PublicInsightDetailsComponent from "./InsightDetailsComponent/PublicInsightDetailsComponent";

const PublicInsightsRouteComponent = () => {
  return (
    <>
      <Routes>
        <Route index element={<PublicInsightsComponent />} />
        <Route
          path="details/:contributeId"
          element={<PublicInsightDetailsComponent />}
        />
      </Routes>
    </>
  );
};

export default PublicInsightsRouteComponent;
