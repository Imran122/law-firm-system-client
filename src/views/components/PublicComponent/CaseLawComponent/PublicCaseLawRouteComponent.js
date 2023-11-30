import React from "react";
import { Route, Routes } from "react-router-dom";
import PublicCaseLawComponent from "./PublicCaseLawComponent";
import PublicCaseLawDetailsComponent from "./CaseLawDetailsComponent/PublicCaseLawDetailsComponent";

const PublicCaseLawRouteComponent = () => {
  return (
    <>
      <Routes>
        <Route index element={<PublicCaseLawComponent />} />
        <Route
          path="details/:contributeId"
          element={<PublicCaseLawDetailsComponent />}
        />
      </Routes>
    </>
  );
};

export default PublicCaseLawRouteComponent;
