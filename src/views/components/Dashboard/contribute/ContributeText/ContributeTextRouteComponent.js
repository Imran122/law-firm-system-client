import React from "react";
import { Route, Routes } from "react-router-dom";
import ContributeTextComponent from "./ContributeTextComponent";

const ContributeTextRouteComponent = () => {
  return (
    <>
        <Routes>
            <Route path="contribute-text-upload" element={<ContributeTextComponent />} />
        </Routes>
    </>
  );
};

export default ContributeTextRouteComponent;
