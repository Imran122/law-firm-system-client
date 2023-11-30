import React from "react";
import { Route, Routes } from "react-router-dom";
import AllBooksByYou from "./AllBooksByYou";
import AllBooksByContributor from "./AllBooksByContributor";
import "./AllBooks.css";

const AdminAllBooksComponent = () => {
  return (
    <>
        <div className="row g-0">
            <div className="col col-12 col-lg-10">
                <div className="not-dashboard-home-left-col">
                {/* booking request card */}
                    <Routes>
                        <Route
                            index
                            element={<AllBooksByYou />}
                        />
                        <Route
                            path="contributor"
                            element={<AllBooksByContributor />}
                        />
                    </Routes>
                </div>
            </div>
        </div>
    </>
  );
};

export default AdminAllBooksComponent;
