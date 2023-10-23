import React from "react";
import { Route, Routes } from "react-router-dom";
import PublicSubAreaComponent from "./PublicSubAreaComponent";
import PublicSubjectAreaDetailsComponent from "./SubjectAreaDetailsComponent/PublicSubjectAreaDetailsComponent";

const PublicSubjectAreaRouteComponent = () => {
  return (
    <>
      <Routes>
        <Route index element={<PublicSubAreaComponent />} />
        <Route
          path="details/:id"
          element={<PublicSubjectAreaDetailsComponent />}
        />
      </Routes>
    </>
  );
};

export default PublicSubjectAreaRouteComponent;
