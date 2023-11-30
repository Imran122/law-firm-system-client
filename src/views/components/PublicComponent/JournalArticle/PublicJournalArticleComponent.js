import React from "react";
import PublicJournalSidebarComponent from "./SidebarJournal/PublicJournalSidebarComponent";
import PublicArticleListsComponent from "./ArticleLists/PublicArticleListsComponent";
import './JournalArticle.css';

const PublicJournalArticleComponent = () => {

    return (
        <>
            <div className="container-fluid">
                <div className="row mt-5">
                    <PublicJournalSidebarComponent/>
                    <PublicArticleListsComponent/>
                </div>
            </div>
        </>
    );
};

export default PublicJournalArticleComponent;