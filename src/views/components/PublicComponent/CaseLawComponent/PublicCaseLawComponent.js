import React from "react";
import PublicCaseLawSidebarComponent from "./SidebarCaseLawComponent/PublicCaseLawSidebarComponent";
import CaseLawListsComponent from "./CaseLawLists/CaseLawListsComponent";
import './CaseLaw.css';

const PublicCaseLawComponent = () => {

    return (
        <>
            <div className="container-fluid">
                <div className="row mt-5">
                    <PublicCaseLawSidebarComponent/>
                    <CaseLawListsComponent/>
                </div>
            </div>
        </>
    );
};

export default PublicCaseLawComponent;