import React from "react";
import PublicInsightListsComponent from "./InsightsLists/PublicInsightListsComponent";

const PublicJournalArticleComponent = () => {

    return (
        <>
            <div className="container">
                <div className="row mt-5">
                    {/* <PublicJournalSidebarComponent/> */}
                    <div className="col col-12 col-lg-1"></div>
                    <PublicInsightListsComponent/>
                </div>
            </div>
        </>
    );
};

export default PublicJournalArticleComponent;