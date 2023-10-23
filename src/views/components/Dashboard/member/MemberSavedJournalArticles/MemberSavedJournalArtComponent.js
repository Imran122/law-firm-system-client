import { React, useState } from "react";
import MemberSavedJournalArtListsComponent from "./MemberSavedJournalArtListsComponent";

const MemberSavedJournalArtComponent = () => {
    return (
        <>
        
        <div className="row g-0">
            <div className="col col-12 col-lg-10">
                <div className="not-dashboard-home-left-col m-3 p-3"> 
                    <div className="article-lists-bg">
                        <MemberSavedJournalArtListsComponent/>
                    </div>
                </div>
            </div>
        </div>
        </>
    );
};

export default MemberSavedJournalArtComponent;
