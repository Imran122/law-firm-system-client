import React from "react";
import PublicLawsSidebarComponent from "./SidebarLaws/PublicLawsSidebarComponent";
import PublicLawsListsComponent from "./LawsLists/PublicLawsListsComponent";

const PublicLawsComponent = () => {

    return (
        <>
            <div className="container-fluid">
                <div className="row mt-5">
                    <PublicLawsSidebarComponent/>
                    <PublicLawsListsComponent/>
                </div>
            </div>
        </>
    );
};

export default PublicLawsComponent;