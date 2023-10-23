import React from "react";
import { Route, Routes } from "react-router-dom";
import MyCByArticlesComponent from "./MyCArticlesComponent/MyCByArticlesComponent";
import MyCByBooksComponent from "./MyCBooksComponent/MyCByBooksComponent";
import MyCByInsightsComponent from "./MyCInsightsComponent/MyCByInsightsComponent";
import MyCByCasesComponent from "./MyCCasesComponent/MyCByCasesComponent";
import MyCBySubjAreaComponent from "./MyCSubAreaComponent/MyCBySubjAreaComponent";
import MyCByLawsComponent from "./MyCLawsComponent/MyCByLawsComponent";
const MyContributionComponent = () => {
  return (
    <>
      
      <div className="row g-0">
        <div className="col col-12 col-lg-10">
            <div className="not-dashboard-home-left-col">            
                <Routes>
                  <Route
                    index
                    element={<MyCByBooksComponent/>}
                  />
                  <Route
                    path="articles"
                    element={<MyCByArticlesComponent />}
                  />
                  <Route
                    path="insights"
                    element={<MyCByInsightsComponent />}
                  />
                  <Route
                    path="cases"
                    element={<MyCByCasesComponent />}
                  />
                  <Route
                    path="laws"
                    element={<MyCByLawsComponent />}
                  />
                  <Route
                    path="sub-area"
                    element={<MyCBySubjAreaComponent />}
                  />
                </Routes>
            </div>
        </div>

        <div className="col col-12 col-lg-4">
          
        </div>
      </div>
    </>
  );
};

export default MyContributionComponent;
