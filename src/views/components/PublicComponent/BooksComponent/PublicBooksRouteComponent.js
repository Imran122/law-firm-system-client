import React from "react";
import { Route, Routes } from "react-router-dom";
import PublicBooksComponent from "./PublicBooksComponent";
import PublicBookDetailsComponent from "./BookDetailsComponent/PublicBookDetailsComponent";

const PublicBooksRouteComponent = () => {

    return (
        <>
            <Routes>
                <Route index element={<PublicBooksComponent />} />
                <Route path="details/:contributeId" element={<PublicBookDetailsComponent />} />
            </Routes>
        </>
    );
};

export default PublicBooksRouteComponent;