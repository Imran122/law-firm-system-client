import React from "react";
import { Route, Routes } from "react-router-dom";
import PublicLawsComponent from "./PublicLawsComponent";
import PublicLawsDetailsComponent from "./LawsDetailsComponent/PublicLawsDetailsComponent";

const PublicLawsRouteComponent = () => {
  return (
    <>
      <Routes>
        <Route index element={<PublicLawsComponent />} />
        <Route
          path="details/:contributeId"
          element={<PublicLawsDetailsComponent />}
        />
      </Routes>
    </>
  );
};

export default PublicLawsRouteComponent;
